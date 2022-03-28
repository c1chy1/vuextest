<template>
  <div >
    <ul class="list-group mt-5 mx-4 flex justify-between">
      <li class="list-group-item list-group-item-action" v-for="user in usersList" :key="user.id">

        <div class="d-flex w-100 justify-content-between">
          <h3>{{user.name}}</h3>

          <small class="text-danger delete" @click="Delete">&#10005;</small>
        </div>
        <p>{{user.email}}</p>

      </li>
    </ul>
  </div>
</template>

<script>


import {mapGetters,mapActions} from "vuex";

export default {
  name: "UsersList",

  methods: {

    ...mapActions(["fetchUsers","deleteUser"]),



    Delete()

    { this.deleteUser( {
      id: this.id})}

  },

  computed: mapGetters(["usersList"]),

  created() {

    this.fetchUsers()

    console.log(this.$store)
  }

}
</script>

<style scoped>

.delete {
font-size: 18px;
cursor: pointer;
}
</style>