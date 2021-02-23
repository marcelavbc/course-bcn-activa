import { createStore } from 'vuex'
import movies from '../../movies'
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters'

const store = createStore({
    state() {
        return {
            movies: movies,
            moviesFiltered: [],
            inputSearch: '',
            radio: 'all',
            check: [],
            showGenres: false,
            maxHeight: '',
            notFound: false
        }
    },
    getters: rootGetters,
    mutations: rootMutations,
    actions: rootActions
});

export default store;