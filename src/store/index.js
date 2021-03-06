import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {

    users: []

  },
  getters: {

    usersList: state => state.users

  },

  actions: {

    async fetchUsers({commit}) {
      const response = await axios.get("http://localhost:3000/users");
      commit("setUsers", response.data)
    },

    async deleteUser({commit}, id){
      await axios.delete(`http://localhost:3000/users/${id}`);
      commit("removeUser", id)},


    async addUser({commit}, user ) {
      const response = await axios.post("http://localhost:3000/users", user);
      commit("addNewUser", response.data)
      var test = response.data

      console.log(test)

    },







  },

  mutations: {

    setUsers: (state, users) => (
        state.users = users),

    removeUser: (state, id) => {
      state.users = state.users.filter(user => user.id !== id)
    },

    addNewUser: (state, user) => {


        state.users.push({

          id: user.id,
          name: user.name,
          email: user.email
        })

    },




    update(state, payload) {
      const index = _.findIndex(state.users, ["id", payload.id]);

      state.users[index][payload.type] = payload.value;
    },






  },
  modules: {

  }
})
