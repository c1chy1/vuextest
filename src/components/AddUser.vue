<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">


      <input type="text" placeholder="Add a username.." id="username" ref="username">
      <input type="text" placeholder="Add an email.." id="email" ref="email">
    </div>
<!--    <div class="form-group">
      <input type="text" class="form-control" placeholder="Enter email" v-model="email">
    </div>-->
    <button type="submit" value="Submit" class="btn btn-block btn-primary">Add</button>
  </form>
</template>

<script>


import {mapActions} from 'vuex'

export default {
  name: "AddUser",

  data() {
    return {
      name: '',
      email:''
    }
  },

  methods: {


  ...mapActions(['addUser']),



    newUser: function() {
      // We use "commit" to call mutations in Vuex
      this.$store.commit('addNewUser', {
        name: this.$refs.username.value,
        email: this.$refs.email.value,

      })
      // We can access getters via this.$store.getters
      let allUsers = JSON.stringify(this.$store.getters.users);
      console.log('New User Added!')
      console.log(`All Users are here: ${allUsers}`);
    },



    onSubmit() {
      // We use "commit" to call mutations in Vuex
      this.$store.commit('addNewUser', {
        name: this.$refs.username.value,
      })
      // We can access getters via this.$store.getters
    }
  },

  created() {


  },



}
</script>

<style scoped>

</style>