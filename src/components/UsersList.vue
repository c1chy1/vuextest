<template>



  <div >
    <ul class="list-group mt-5 mx-4 flex justify-between flex-col ">
      <li class="w-1/3 list-group-item list-group-item-action my-4 bg-yellow-300" v-for="user in usersList" :key="user.id">
        <small class="text-danger delete" @click="deleteUser(user.id)">&#10005;</small>

        <div class="d-flex  justify-content-between">
          <h3>{{user.name}}</h3>

        </div>
        <p>{{user.email}}
        </p>
        <button class="btn btn-primary" @click="editMode = !editMode">
          <i class="icon" :class="{ 'icon-edit': !editMode, 'icon-check': editMode }">EDIT</i>
        </button>


        <template v-if="editMode">
          <input type="text" class="form-input" :value="user.name" @change="updateUser($event, 'name')" />
        </template>
        <template v-else>
          {{ user.name }}
        </template>


      </li>
    </ul>
  </div>
</template>

<script>


import {mapGetters,mapActions,mapMutations} from "vuex";

export default {
  name: "UsersList",


  data() {
    return {
      editMode: false
    };
  },


  methods: {
    ...mapMutations(["update"]),
    ...mapActions(["fetchUsers","deleteUser"]),

    updateUser(e, type) {
      this.update({
        id: this.user.id,
        type: type,
        value: e.target.value
      })
    },


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