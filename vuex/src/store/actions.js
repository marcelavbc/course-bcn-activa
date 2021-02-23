export default {
    searchMovie(context) {
        context.commit('searchMovie');
    },
    loadMovies(context) {
        context.commit('loadMovies');
    }, 
    toggleGenres(context){
        context.commit('toggleGenres');
    }, 
    setHeight(context){
        context.commit('setHeight');
    }
    
}