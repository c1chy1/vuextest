import { createStore } from 'vuex'
/*import UserModule from '../store/modules/user-module'*/
import axios from 'axios'



export default createStore({
  state: {

    users: []

  },
  getters: {

    usersList: state => state.users

  },
  mutations: {

    setUsers: (state, users) => (
        state.users = users)

  },
  actions: {

    async fetchUsers({commit}) {
      const response = await axios.get("http://localhost:3000/users");
      commit("setUsers", response.data)
    }

  },
  modules: {

  }
})
