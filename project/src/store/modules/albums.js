import axios from 'axios'

const albums = {
    namespaced: true,
    state: {
        albums: [],
    },
    mutations: {
        SET_ALBUMS(state, data) {
            state.albums = data;
        }
    },
    actions: {
        loadAlbums({ commit }) {
            axios
                .get('http://jsonplaceholder.typicode.com/photos ')
                .then(res => {
                    const result = res.data.reduce((c, v) => {
                        c[v.albumId] = c[v.albumId] || [];
                        c[v.albumId].push(v);
                        return c;
                    }, {});
                    commit('SET_ALBUMS', result)
                })
                .catch(error => console.log(error))
        },
    },
}

export default albums