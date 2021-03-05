import axios from 'axios'
import router from '../../router/index';

const albums = {
    namespaced: true,
    state: {
        albums: [],
        albumConsulted: []
    },
    mutations: {
        SET_ALBUMS(state, data) {
            state.albums = data;
        },
        loadAlbumsConsulted(state, payload) {
            let payloadKey = payload[0].albumId
            function findProp(obj, prop) {
                var result = [];
                function recursivelyFindProp(o, keyToBeFound) {
                    Object.keys(o).forEach(function (key) {
                        if (typeof o[key] === 'object') {
                            recursivelyFindProp(o[key], keyToBeFound);
                        } else {
                            if (key === keyToBeFound) result.push(o[key]);
                        }
                    });
                }
                recursivelyFindProp(obj, prop);
                return result;
            }

            let ids = findProp(state.albumConsulted, "albumId");

            let check = ids.findIndex(item => item === payloadKey)
            if (check === -1) {
                payload.count = 1;
                state.albumConsulted.push(payload);
            } else {
                let toAdd = state.albumConsulted.find(ele => ele.id === payload.id);
                toAdd.count++;
            }
        }
    },
    actions: {
        loadAlbums({ commit }) {
            axios
                .get('http://jsonplaceholder.typicode.com/photos')
                .then(res => {
                    const result = res.data.reduce((c, v) => {
                        c[v.albumId] = c[v.albumId] || [];
                        c[v.albumId].push(v);
                        return c;
                    }, {});
                    commit('SET_ALBUMS', result);
                })
                .catch(error => console.log(error));
        },
        changeRouteAlbums() {
            router.push({ name: "Albums" });
        }, 
    },
}

export default albums