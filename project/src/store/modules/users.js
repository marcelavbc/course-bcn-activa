import axios from 'axios'
import router from '../../router/index';

const users = {
    namespaced: true,
    state: {
        users: [],
        usersConsulted: [],
    },
    getters: {
        allUsers: state => state.users
    },
    mutations: {
        SET_USERS(state, data) {
            state.users = data
        },
        loadUsersConsulted(state, payload) {
            let check = state.usersConsulted.findIndex(item => item.username === payload.username);
            if (check === -1) {
                payload.count = 1;
                state.usersConsulted.push(payload);
            } else {
                let userClicked = state.usersConsulted.find(item => item.id === payload.id);
                userClicked.count++;
            }
        },
    },
    actions: {
        loadUsers({ commit }) {
            axios
                .get('http://jsonplaceholder.typicode.com/users')
                .then(res => {
                    commit('SET_USERS', res.data);
                })
                .catch(error => console.log(error));
        },
        filterUsers({ commit }, event) {
            let theInput = (event.target.value).toUpperCase();
            let newData = [];
            axios
                .get('http://jsonplaceholder.typicode.com/users')
                .then(res => {
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].name.toUpperCase().startsWith(theInput)) {
                            newData.push(res.data[i]);
                        }
                    }
                    commit('SET_USERS', newData);
                })
                .catch(error => console.log(error));
        },
        changeRoute() {
            router.push({ name: "Users" });
        }, 
    },
}

export default users