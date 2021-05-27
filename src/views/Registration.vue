<template>
  <div class="home">
    <h5 v-if="isNotUnique">User with this login already exists! Please, try again.</h5>
    <h5 v-if="passIsNotValid">Password is too short! Please, try again.</h5>
    <p>Login:</p>
    <input v-model="login" type="text">
    <p>Password:</p>
    <input v-model="password" type="password" ><br>
    <input type="submit" value="Register" @click="onClick">
  </div>
</template>

<script>
// @ is an alias to /src
import { queries } from '../queries'
import { takeHash } from '../hashing'
import { onLogin, onLogout } from '@/vue-apollo'

export default {
  name: 'Registration',
  data() {
    return {
      passIsNotValid: false,
      isNotUnique: false,
      login: "",
      password: "",
    };
  },
  apollo: {},
  methods: {
    async onClick() {
      this.$data.passIsNotValid = false;
      this.$data.isNotUnique = false;
      let password = this.$data.password.trim();
      this.$data.password = "";
      if (password.length < 8) {
        this.$data.passIsNotValid = true;
        return;
      }
      password = takeHash(password);
      console.log(password);
      const login = this.$data.login.trim();
      const existingRes = await this.$apollo.query({
        query: queries.USER_EXIST,
        variables: { username: login },
      });
      if (existingRes.data.usernameExists) {
        this.$data.isNotUnique = true;
        this.$data.login = "";
        return;
      }
      await this.$apollo.query({
        query: queries.REGISTER_USER,
        variables: {
          username: login,
          password: password
        }
      });
      try {
        const user = await this.$apollo.query({
          query: queries.USER,
          fetchPolicy: "no-cache",
        });
        if (user.data !== null) {
          await onLogout(this.$apollo.provider.defaultClient);
        }
      }
      catch (error) { console.error(error);}
      const result = await this.$apollo.query({
        query: queries.LOGIN_USER,
        variables: {
          username: login,
          password: password
        }
      });
      await onLogin(this.$apollo.provider.defaultClient, result.data.login);
      this.$router.push({
        name: 'Chat_Rooms'
      });
    }
  }
}
</script>

<style>
h5 {
  color: red;
}
</style>
