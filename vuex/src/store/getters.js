export default {
    moviesList(state) {
        return state.moviesFiltered;
    },
    allMovies(state) {
        return state.movies;
    },
    genresSelected(state) {
        return state.check;
    },
    inputSearch(state){
        return state.inputSearch;
    }
}