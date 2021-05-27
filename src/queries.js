import gql from "graphql-tag";
export const queries = {
  USER: gql`
    query user{
      me{
        id
        username
        currentRoom{
          id
        }
      }
    }
  `,
  USER_EXIST: gql`
    query userExists($username: String!) {
      usernameExists(username: $username)
    }
  `,
  LOGIN_USER: gql`
    query login($username: String!, $password: String!) {
      login(username: $username, password: $password)
    }
  `,
  REGISTER_USER: gql`
    query register($username: String!, $password: String!) {
      register(username: $username, password: $password)
      {
        id
        username
      }
    }
  `,
  GET_ROOMS: gql`
    query rooms{
      rooms{
        id
        name
        owner{
          id
        }
      }
    }
  `,
  GET_MESSAGES: gql`
    query messages{
      me{
        id
        username
        currentRoom{
          id
          name
          members{
            id
            username
          }
          owner{
            id
            username
          }
          lastMessages{
            id
            text
            timestamp
            author{
              username
            }
          }
        }
      }
    }
  `,
  JOIN_ROOM: gql`
    mutation join($roomId: ID!){
      joinRoom(roomId:$roomId){
        id
        name
        members{
          id
          username
        }
        owner{
          id
          username
        }
        lastMessages{
          id
          text
          timestamp
          author{
            username
          }
        }
      }
    }
  `,
  LEAVE_ROOM: gql`
    mutation leave{
      leaveCurrentRoom{
        id
      }
    }
  `,
  CREATE_ROOM: gql`
    mutation create_room($name:String!){
      createRoom(name:$name)
      {
        id
        name
      }
    }
  `,
  UPDATE_ROOM:gql`
  mutation update_room($id: ID!, $name: String!){
    updateRoom(id: $id, name: $name)
    {
      id
      name
    }
  }
  `,
  DELETE_ROOM:gql`
  mutation delete_room($id: ID!){
    deleteRoom(id: $id)
    {
      id
      name
    }
  }
  `,
  CREATE_MESSAGE: gql`
    mutation createMessage($text: String!){
      createMessage(text: $text){
        id
        text
        timestamp
      }
    }
  `,
  ON_CREATE_ROOM: gql`
  subscription create{
    roomCreated{
       id
        name
        owner{
          id
        }
    }
  }
  `,
  ON_CREATE_MESSAGE: gql`
  subscription create{
    messageCreated{
      id
      text
      timestamp
      author{
        username
      }
    }
  }
  `,
  ON_USER_LEAVE: gql`
  subscription user_leave{
    memberLeft{
       id
       username
    }
  }
  `,
  ON_USER_JOIN: gql`
  subscription user_join{
    memberJoined{
      id
      username
    }
  }
  `,
  ON_UPDATE_ROOM: gql`
  subscription update_room{
    roomUpdated{
      id
      name
      owner{
        id
        username
      }
    }
  }
  `,
  ON_DELETE_ROOM: gql`
  subscription delete_room{
    roomDeleted{
      id
      name
      owner{
        id
      }
    }
  }
 `  
};