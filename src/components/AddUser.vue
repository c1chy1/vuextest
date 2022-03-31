<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">


      <input type="text" placeholder="Add a username.." id="name" v-model="name">
      <input type="text" placeholder="Add an email.." id="email" v-model="email">
    </div>
    <button type="submit" value="Submit" class="btn btn-block btn-primary">Add</button>
  </form>
</template>

<script>


import {mapActions} from 'vuex'

export default {
  name: "AddUser",

  data() {
    return {
      id: this.$store.state.users.id,
      name: '',
      email: '',
    }
  },

  methods: {


  ...mapActions(['addUser']),


    onSubmit() {

      this.addUser({



          id : this.id,
          name: this.name,
          email: this.email



      })



    }
  },

  created() {

  },



}
</script>

<style scoped>

</style>