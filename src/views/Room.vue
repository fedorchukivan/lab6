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
        <div v-if="isUpdating">
            <span><input v-model="newName" type="text"></span>
            <span><button v-on:click="onUpdate">Confirm</button></span>
            <span><button v-on:click="onDelete">Delete</button></span><br><br>
        </div>
        <div v-else>
            <div v-if="isOwner">
              <nav class="navbar navbar-light" style="background-color: #42b983;">
                <span style="padding-left:5%"><button type="button" class="btn btn-outline-secondary" v-on:click="onLeave" >Leave</button></span>
                <span style="color:white">    {{roomName}}    </span>
                <span><button type="button" class="btn btn-outline-light" v-on:click="onUpdating">Update</button></span>
                <span><button type="button" class="btn btn-outline-danger" v-on:click="onDelete">Delete</button></span><br><br>
              </nav>
            </div>
            <div v-else>
              <nav class="navbar navbar-light" style="background-color: #42b983;">
                <span style="padding-left:5%"><button type="button" class="btn btn-outline-secondary" v-on:click="onLeave">Leave</button></span>
                <span style="color:white">    {{roomName}}    </span><br><br>
              </nav>
            </div>
            
        </div>
        <table style="width:90%; margin-left:5%">
          <tr>
            <td style="vertical-align:top; border: 1px solid black; width:80%; overflow:hidden">
              <div class="row"><h5 style="color:grey">Messages</h5></div>
              <table style="width:97%; margin-left:1%;" cellspacing="0">
                <div v-for="message in messages" v-bind:key="message.id" style="margin-bottom: 5px;">
                  <div v-if="message.author.id === -1" class="row">
                    {{message.text}}
                  </div>
                  <div v-else-if="message.author.username === user.data.me.username">
                    <div style="background-color: #58f3ad;">
                      <div class="row">
                        <p style="text-align:left; font-weight:bold;">{{message.author.username}}:</p>
                      </div>
                      <div class="row">
                        <div class="col" style="text-align:left">{{message.text}}</div>
                        <div class="col-2">{{message.timestamp}}</div>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <div class="row">
                      <p style="text-align:left; font-weight:bold">{{message.author.username}}:</p>
                    </div>
                    <div class="row">
                      <div class="col" style="text-align:left">{{message.text}}</div>
                      <div class="col-2">{{message.timestamp}}</div>
                    </div>
                  </div>
                </div>
              </table>
            </td>
            <td style="vertical-align:top; border: 1px solid black; width:40%;">
              <ul class="list-group list-group-flush">
                <li class="list-group-item list-group-item-primary">Owner: {{owner.username}}</li>
                <li class="list-group-item list-group-item-secondary">Active users: </li>
                <div v-for="member in members" v-bind:key="member.id">
                  <li v-if="member.id === user.data.me.id" class="list-group-item list-group-item-success">{{member.username}}(you)</li>
                  <li v-else class="list-group-item">{{member.username}}</li>
                </div>
              </ul>
            </td>
          </tr>
        </table>
        <br>
        <div class="row justify-content-center">
          <div class="col-auto">
            <input v-model="newMessage" type="text" class="form-control" placeholder="Enter a message...">
          </div>
          <div class="col-auto">
            <button v-on:click="onSend" type="button" class="btn btn-outline-success">Send</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { queries } from '../queries'

export default {
  name: 'Room',
  apollo: {
    $subscribe: {
      roomDeleted: {
        query: queries.ON_DELETE_ROOM,
        result ({data}) {
          if (this.$data.id === {data}.data.roomDeleted.id) {
            this.$data.user.data.me.currentRoom = null;
            const message = {
              id: this.$data.specialMessageNewId++,
              text: `This chat was deleted, so you will be automaticly redirected to 'Chat Rooms' page after 5 sec.`,
              author: { id: -1 }
            }
            console.log('Notification: ', message);
            this.$data.messages.push(message);
            setTimeout(() => {this.$router.push({
              name: 'Chat_Rooms',
            }).catch(() => {});}, 5000);
          }
        }
      },
      roomUpdated: {
        query: queries.ON_UPDATE_ROOM,
        result ({data}) {
          console.log('Updated: ', {data}.data.roomUpdated);
          const upName = {data}.data.roomUpdated.name;
          this.$data.roomName = upName;
          this.$data.newName = upName;
        }
      },
      userJoined: {
        query: queries.ON_USER_JOIN,
        result ({data}) {
          const newMember = {data}.data.memberJoined;
          console.log('Joined: ', newMember);
          this.$data.members.push(newMember);
          const message = {
            id: this.$data.specialMessageNewId++,
            text: `${newMember.username} joined to the chat`,
            author: { id: -1 }
          }
          console.log('Notification: ', message);
          this.$data.messages.push(message);
        }
      },
      userLeave: {
        query: queries.ON_USER_LEAVE,
        result ({data}) {
          const oldMember = {data}.data.memberLeft;
          console.log('Leaved: ', oldMember);
          for (let i in this.$data.members) {
            if(this.$data.members[i].id === oldMember.id) {
              this.$data.members.splice(i, 1);
              break;
            }
          }
          const message = {
            id: this.$data.specialMessageNewId++,
            text: `${oldMember.username} has left the chat`,
            author: { id: -1 }
          }
          console.log('Notification: ', message);
          this.$data.messages.push(message);
        }
      },
      messageCreated: {
        query: queries.ON_CREATE_MESSAGE,
        result ({data}) {
          console.log('New message: ', {data}.data.messageCreated);
          this.$data.messages.push({data}.data.messageCreated);
        }
      }
    }
  },
  data(){
    return {
      messages: [], user: {}, owner: {}, members: [],
      id: "", roomName: "", newName: "", newMessage: "",
      specialMessageNewId: 0,
      notAuthorized: false, emptyName: false,
      existingRoom: false, isUpdating: false,
      isOwner: false,
    };
  },
  created: async function () {
    try {
      console.log('Room Created...');
      this.$data.user = await this.$apollo.query({
        query: queries.USER,
        fetchPolicy: "no-cache",
      });
      console.log(this.$data.user);
      if (this.$data.user.data !== null)
      {
        const roomData = await this.$apollo.query({
          query: queries.GET_MESSAGES,
          fetchPolicy: "no-cache",
        });
        this.$data.id = roomData.data.me.currentRoom.id;
        this.$data.messages = roomData.data.me.currentRoom.lastMessages;
        this.$data.members = roomData.data.me.currentRoom.members;
        this.$data.owner = roomData.data.me.currentRoom.owner;
        if (this.$data.owner.id === this.$data.user.data.me.id) { this.$data.isOwner = true; }
        this.$data.roomName = roomData.data.me.currentRoom.name;
        this.$data.newName = roomData.data.me.currentRoom.name;
      }
      else {
        this.$data.notAuthorized = true;
      }
    }
    catch {
      this.$data.notAuthorized = true;
    }
  },
  methods: {
    async onUpdate() {
      this.$data.isUpdating = false;
      this.$data.emptyName = false;
      this.$data.existingRoom = false;
      this.$data.newName = this.$data.newName.trim();
      const roomName = this.$data.newName;
      if(roomName.length === 0) {
        this.$data.newName = this.$data.roomName;
        this.$data.emptyName = true;
        return;
      }
      try {
        const result = await this.$apollo.mutate({
          mutation: queries.UPDATE_ROOM,
          variables: { id: this.$data.id, name: roomName },
        });
        console.log(result);
        this.$data.roomName = roomName;
      } catch (error) {
        this.$data.existingRoom = true;
      }
    },
    onUpdating() {
      this.$data.isUpdating = true;
    },
    async onDelete() {
      try {
          const del = await this.$apollo.mutate({
              mutation: queries.DELETE_ROOM,
              variables: { id: this.$data.id },
          });
          this.$data.user.data.me.currentRoom = null;
          console.log(del);
          this.$router.push({
              name: 'Chat_Rooms',
          });
      } catch (error) {
          console.error('Deleting went wrong: ', error);
      }
    },
    async onLeave() {
        try {
          await this.$apollo.mutate({
            mutation: queries.LEAVE_ROOM,
          });
          this.$data.user.data.me.currentRoom = null;
          this.$router.push({
              name: 'Chat_Rooms',
            params: {}
          }).catch(() => {console.log('Push failed')});
        }
        catch (error) {
          console.log('Error happened: ', error);
        }
    },
    async onSend() {
      if (this.$data.newMessage.trim().length > 0) {
        try {
          await this.$apollo.mutate({
              mutation: queries.CREATE_MESSAGE,
              variables: { text: this.$data.newMessage },
          });
          this.$data.newMessage = "";
        }
        catch (error) {
          console.log('Error happened: ', error);
        }
      }
    }
  },
  beforeDestroy: async function() {
    console.log('BD: ',this.$data.user.data.me.currentRoom);
    if (this.$data.user.data.me.currentRoom !== null) {
      await this.$apollo.mutate({
        mutation: queries.LEAVE_ROOM,
      });
    }
  }
    
}
</script>

<style>
h4 {
  color: red;
}
li:hover {
  font-weight: normal;
}
</style>