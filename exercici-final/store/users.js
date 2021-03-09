
import axios from 'axios'

export const state = () => ({
    users: [],
    usersConsulted: [],
    singleUser: {}
})

export const getters = {
    allUsers: state => state.users,
    single: state => state.singleUser
}

export const mutations = {
    SET_USERS(state, data) {
        state.users = data
    },
    loadUsersConsulted(state, payload) {
        state.singleUser = payload;
        let check = state.usersConsulted.findIndex(item => item.username === payload.username);
        if (check === -1) {
            payload.count = 1;
            state.usersConsulted.push(payload);
        } else {
            let userClicked = state.usersConsulted.find(item => item.id === payload.id);
            userClicked.count++;
        }
    },
}

export const actions = {
    async loadUsers({ commit }) {
        let users = await axios.get('http://jsonplaceholder.typicode.com/users')
        commit('SET_USERS', users.data)
    },
    async filterUsers({ commit }, event) {
        let theInput = (event.target.value).toUpperCase();
        let newData = [];
        let search = await axios.get('http://jsonplaceholder.typicode.com/users')
        for (let i = 0; i < search.data.length; i++) {
            if (search.data[i].name.toUpperCase().startsWith(theInput)) {
                newData.push(search.data[i]);
            }
        }
        commit('SET_USERS', newData);
    }
}