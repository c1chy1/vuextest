<template>
  <form @submit.prevent="onUserSubmit">
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Enter name" v-model="test">
    </div>
<!--    <div class="form-group">
      <input type="text" class="form-control" placeholder="Enter email" v-model="email">
    </div>-->
    <button type="submit" value="Submit" class="btn btn-block btn-primary">Add</button>
  </form>
</template>

<script>



import { mapActions } from 'vuex'

export default {
  name: "AddUser",

  data() {

    return {


      test: this.$store.name ,

      name: '',


    }

  },

  methods: {


  ...mapActions(['addUser']),

    onUserSubmit(event) {
      event.preventDefault()
      this.addUser(this.$store.name)
    }
  },

  created() {


    console.log(this.test)
  }

}
</script>

<style scoped>

</style>