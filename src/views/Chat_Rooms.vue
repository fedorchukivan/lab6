<template>
    <div>
      <div v-if="notAuthorized">
        <h4>Sorry, for joining to chat rooms you have to be authorized!</h4>
      </div>
      <div v-else>
        <div v-if="emptyName">
          <h4>Name of room shouldn't be empty!</h4>
        </div>
        <div v-if="existingRoom">
          <h4>Room with this name already exists, please try again!</h4>
        </div>
        <div class="row justify-content-center">
          <div class="col-auto">
            <input v-model="roomName" type="text" class="form-control" placeholder="Enter name of new room...">
          </div>
          <div class="col-auto">
            <button v-on:click="onCreate" type="button" class="btn btn-outline-success">Create</button>
          </div>
        </div>
        <br><br>
        <h3>Chat rooms list:</h3>
        <ul class="list-group list-group-flush">
          <li v-for="room in roomsOfUser" v-bind:key="room.id" class="list-group-item list-group-item-success">
            <p v-on:click="onJoin(room.id)">{{room.name}}(your room)</p>
          </li>
          <li v-for="room in otherRooms" v-bind:key="room.id" class="list-group-item">
            <p v-on:click="onJoin(room.id)">{{room.name}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import { queries } from '../queries'

export default {
  name: 'Chat_Rooms',
  apollo: {
    $subscribe: {
      roomCreated: {
        query: queries.ON_CREATE_ROOM,
        result ({data}) {
          const newRoom = {data}.data.roomCreated;
          console.log('Added: ', newRoom);
          this.$data.rooms.push(newRoom);
        }
      },
      roomDeleted: {
        query: queries.ON_DELETE_ROOM,
        result ({data}) {
          console.log('Removed: ', {data}.data.roomDeleted);
          for (let i in this.$data.rooms) {
            if(this.$data.rooms[i].id === {data}.data.roomDeleted.id) {
              this.$data.rooms.splice(i, 1);
              break;
            }
          }
        }
      },
      roomUpdated: {
        query: queries.ON_UPDATE_ROOM,
        result ({data}) {
          console.log('Updated: ', {data}.data.roomUpdated);
          for (let room of this.$data.rooms) {
            if(room.id === {data}.data.roomUpdated.id) {
              room.name = {data}.data.roomUpdated.name;
              break;
            }
          }
        }
      }
    }
  },
  data(){
    return {
      rooms: [],
      user: {},
      notAuthorized: false,
      roomName: "",
      emptyName: false,
      existingRoom: false,
    };
  },
  created: async function () {
    try {
      this.$data.notAuthorized = false;
      console.log('Created...!');
      this.$data.user = await this.$apollo.query({
        query: queries.USER,
        fetchPolicy: "no-cache",
      });
      console.log(this.$data.user);
      if (this.$data.user.data !== null)
      {
        const roomsData = await this.$apollo.query({
          query: queries.GET_ROOMS,
          fetchPolicy: "no-cache",
        });
        this.$data.rooms = roomsData.data.rooms;
      }
      else {
        this.$data.notAuthorized = true;
      }
    }
    catch {
      this.$data.notAuthorized = true;
    }
  },
  computed: {
    roomsOfUser: function () {
      return this.$data.rooms.filter(room => room.owner.id === this.$data.user.data.me.id);
    },
    otherRooms: function () {
      return this.$data.rooms.filter(room => room.owner.id !== this.$data.user.data.me.id);
    }
  },
  methods: {
    async onCreate() {
      this.$data.emptyName = false;
      this.$data.existingRoom = false;
      const roomName = this.$data.roomName;
      this.$data.roomName = "";
      if(roomName.trim().length === 0) {
        this.$data.emptyName = true;
        return;
      }
      try {
        const result = await this.$apollo.mutate({
          mutation: queries.CREATE_ROOM,
          variables: { name: roomName.trim() },
        });
        console.log(result);
      } catch (error) {
        this.$data.existingRoom = true;
      }
    },
    async onJoin(id) {
      try {
        console.log(`joining to room with ${id} id`);
        console.log(this.$data.user);
        this.$data.user = await this.$apollo.query({
          query: queries.USER,
          fetchPolicy: "no-cache",
        });
        if (this.$data.user.data.me.currentRoom !== null) {
          await this.$apollo.mutate({
            mutation: queries.LEAVE_ROOM,
          });
        }
        const result = await this.$apollo.mutate({
          mutation: queries.JOIN_ROOM,
          variables: { roomId: id },
        });
        console.log(`Join reuslt: ${result}`);
        this.$router.push({
          name: "Room",
          params: { id: id }
        }).catch(() => {console.log('Push failed')});
      } catch (error) {
        console.log('joining refused');
      }
    }
  }
    
}
</script>

<style>
h4 {
  color: red;
}
li:hover {
  font-weight: bold;
}
</style>
