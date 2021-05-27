<template>
  <div class="home">
    <h4 id="welcome">Welcome to chat rooms app!</h4><br>
    <h5 v-if="isIncorrect">Incorrect login or password! Please, try again.</h5>
    <p>Login:</p>
    <input v-model="login" type="text">
    <p>Password:</p>
    <input v-model="password" type="password" ><br>
    <input type="submit" value="Sign In" @click="onClick">
    <input v-if="user.data !== null" type="submit" value="Sign Out" @click="onSigningOut">
  </div>
</template>

<script>
// @ is an alias to /src
import { queries } from '../queries'
import { takeHash } from '../hashing'
import { onLogin, onLogout } from '@/vue-apollo'

export default {
  name: 'Sign_In',
  data() {
    return {
      isLogined: true,
      isIncorrect: false,
      login: "",
      password: "",
      user: { data: null },
    };
  },
  created: async function() {
    try {
      this.$data.user = await this.$apollo.query({
        query: queries.USER,
        fetchPolicy: "no-cache",
      });
    }
    catch (error) { this.$data.user.data = null; }
  },
  methods: {
    async onClick() {
      this.$data.isIncorrect = false;
      const password = takeHash(this.$data.password.trim());
      this.$data.password = "";
      const login = this.$data.login.trim();
      if (this.$data.user.data !== null) {
        await onLogout(this.$apollo.provider.defaultClient);
      }
      try {
        console.log(login);
        console.log(password);
        const result = await this.$apollo.query({
          query: queries.LOGIN_USER,
          variables: {
            username: login,
            password: password
          }
        });
        console.log(result);
        await onLogin(this.$apollo.provider.defaultClient, result.data.login);
        this.$router.push({
          name: 'Chat_Rooms',
        });
      }
      catch {
        this.$data.isIncorrect = true;
      }
    },
    async onSigningOut() {
      try {
        await onLogout(this.$apollo.provider.defaultClient);
        this.$data.user.data = null;
      }
      catch (error) { console.error(error); }
    }
  }
}
</script>

<style>
h5 {
  color: red;
}
#welcome {
  color: #2c3e50;
}
</style>
