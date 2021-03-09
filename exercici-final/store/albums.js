import axios from 'axios'

export const state = () => ({
    albums: [],
    albumsConsulted: [],
    singleAlbum: {}
})

export const getters = {
    allAlbums: state => state.albums,
    single: state => state.singleAlbum
}

export const mutations = {
    SET_ALBUMS(state, data) {
        state.albums = data
    },
    loadAlbumsConsulted(state, payload) {
        state.singleAlbum = payload;
        let check = state.albumsConsulted.findIndex(item => item[0].albumId === payload[0].albumId);
        if (check === -1) {
            payload.count = 1;
            state.albumsConsulted.push(payload);
        } else {
            let albumClicked = state.albumsConsulted.find(item => item[0].albumId === payload[0].albumId);
            albumClicked.count++;
        }
    }
}

export const actions = {
    async loadAlbums({ commit }) {
        let response = await axios.get('http://jsonplaceholder.typicode.com/photos')
        const result = response.data.reduce((c, v) => {
            c[v.albumId] = c[v.albumId] || [];
            c[v.albumId].push(v);
            return c;
        }, {});
        commit('SET_ALBUMS', result);
    }
}