<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">


      <input type="text" placeholder="Add a username.." id="username" :value="name">
      <input type="text" placeholder="Add an email.." id="email" v-model="email">
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
      email: '',
    }
  },

  methods: {


  ...mapActions(['addUser']),


    onSubmit() {

      this.addUser(this.name)

      this.addUser(this.email)

      // We use "commit" to call mutations in Vuex
 /*     this.$store.commit('addNewUser', {
        name: this.$refs.username.value,
        email: this.$refs.email.value,
      })*/
      // We can access getters via this.$store.getters
    }
  },

  created() {

  },



}
</script>

<style scoped>

</style>