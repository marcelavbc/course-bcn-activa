import axios from 'axios'

const users = {
    namespaced: true,
    state: {
        users: [],
        usersConsulted: []
    },
    mutations: {
        SET_USERS(state, data) {
            state.users = data
        },
        loadUsersConsulted(state, payload) {
            let check = state.usersConsulted.findIndex(item => item.username === payload.username)

            if (check === -1) {
                payload.count = 1
                state.usersConsulted.push(payload)
            } else {
                let userClicked = state.usersConsulted.find(item => item.id === payload.id)
                userClicked.count++
            }
        }
    },
    actions: {
        loadUsers({ commit }) {
            axios
                .get('http://jsonplaceholder.typicode.com/users')
                .then(res => {
                    commit('SET_USERS', res.data)
                })
                .catch(error => console.log(error))
        },

    },
}

export default users