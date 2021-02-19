import { createStore } from 'vuex'
import movies from '../../movies'
import rootMutations from './mutations';
import rootActions from './actions';

const store = createStore({
    state() {
        return {
            movies: movies,
            moviesFiltered: [],
            inputSearch: '',
            radio: 'all',
            check: [],
            showGenres: false,
        }
    },
    getters: {
        moviesList(state){
            return state.moviesFiltered
        },
        allMovies(state){
            return state.movies
        }, 
        genresSelected(state){
            return state.check
        }, 
        
    },
    mutations: rootMutations,
    actions: rootActions
});

export default store;