import { createApp } from 'vue'
import { createStore } from 'vuex'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue'
import movies from '../MOCK_DATA.json'
const store = createStore({
    state() {
        return {
            movies: movies,
            moviesFiltered: [],
            inputSearch: '',
            radioBtn: 'all'

        }
    },
    getters: {
        allMovies: state => {
            return state.movies
        },
        filtered: state => {
            return state.moviesFiltered
        },
        radioBtn: state => {
            return state.radioBtn
        },
    },
    mutations: {
        searchMovie(state) {
            if (state.radioBtn === 'all') {
                state.moviesFiltered = state.movies.filter((movie) =>
                    movie.name.toLowerCase().includes(state.inputSearch.toLowerCase())
                );
            } else {
                state.moviesFiltered = state.movies.filter((movie) =>
                    movie.availability === true && movie.name.toLowerCase().includes(state.inputSearch.toLowerCase())
                );
            }
            console.log(state.moviesFiltered.length)
            console.log(state.radioBtn)
        },
        filterRadio(state) {
            if (event.target.value === 'allMovies') {
                if (state.inputSearch === '') {
                    state.moviesFiltered = state.movies
                } else {
                    state.moviesFiltered = state.movies.filter((movie) =>
                        movie.name.toLowerCase().includes(state.inputSearch.toLowerCase())
                    );
                }
            } else if (event.target.value !== 'allMovies') {
                const arrayMovies = [];
                if (state.inputSearch === '') {
                    console.log('no string here')
                    state.radioBtn = 'some'
                    for (let i = 0; i < state.moviesFiltered.length; i++) {
                        if (state.moviesFiltered[i].availability === true) {
                            arrayMovies.push(state.moviesFiltered[i])
                        }
                    }
                    state.moviesFiltered = arrayMovies
                } else {
                    console.log('not empty')
                    state.moviesFiltered = state.movies.filter((movie) =>
                        movie.availability === true && movie.name.toLowerCase().includes(state.inputSearch.toLowerCase())
                    );
                }

            }
            // if (event.target.value === 'allMovies') {
            //     state.moviesFiltered = state.movies
            //     state.radioBtn = 'all'
            //     console.log('state', state.inputSearch)
            // } else {
            //     const arrayMovies = [];
            //     state.radioBtn = 'some'
            //     for (let i = 0; i < state.moviesFiltered.length; i++) {
            //         if (state.moviesFiltered[i].availability === true) {
            //             arrayMovies.push(state.moviesFiltered[i])
            //         }
            //     }
            //     state.moviesFiltered = arrayMovies
            // }

        }
    },
    actions: {
        filterRadio(context) {
            context.commit('filterRadio')
        },
        searchMovie(context) {
            context.commit('searchMovie')
        }
    }
});

const app = createApp(App);
app.use(store);
app.mount('#app')
