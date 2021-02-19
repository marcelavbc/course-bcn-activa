export default {
    searchMovie(state) {
        if (state.radio === 'all') {
            if (state.check.length !== 0) {
                state.moviesFiltered = state.movies.filter((movie) =>
                    movie.name.toLowerCase().includes(state.inputSearch.toLowerCase())).filter(item => state.check.includes(item.genre))
            } else {
                state.moviesFiltered = state.movies.filter((movie) =>
                    movie.name.toLowerCase().includes(state.inputSearch.toLowerCase()))
            }
        } else if (state.radio === 'avaliable') {
            if (state.check.length !== 0) {
                state.moviesFiltered = state.movies.filter((movie) =>
                    movie.name.toLowerCase().includes(state.inputSearch.toLowerCase()) && movie.availability === true).filter(item => state.check.includes(item.genre))
            } else {
                state.moviesFiltered = state.movies.filter((movie) =>
                    movie.name.toLowerCase().includes(state.inputSearch.toLowerCase()) && movie.availability === true)
            }
        }
    },
    loadMovies(state) {
        state.moviesFiltered = state.movies
    },
    setHeight(state) {
        console.log(state)
        let row = document.getElementById("theCards");
        let cards = row.getElementsByClassName("card");
        let array = [...cards];
        let divArray = [];
        for (let i = 0; i < array.length; i += 1) {
            divArray.push(array[i].clientHeight);
        }
        let max = Math.max(...divArray) + "px";
        console.log('max', max)
        for (let j = 0; j < cards.length; j++) {
            cards.item(j).style.height = max
        }
    },
    toggleGenres(state) {
        state.showGenres = !state.showGenres
        let btn = document.getElementById("genreBtn");
        if (state.showGenres) {
            btn.innerHTML = 'Hide genres'
        } else {
            btn.innerHTML = 'Show genres'
        }
    }
}