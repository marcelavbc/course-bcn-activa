export default {
    setInput(state, value) {
        state.inputSearch = value;
    },
    setRadio(state, value) {
        state.radio = value;
    },
    getGenres(state, value) {
        state.check = value;
    },
    searchMovie(state) {
        if (state.radio === 'all') {
            if (state.check.length !== 0) {
                state.moviesFiltered = state.movies.filter((movie) =>
                    movie.name.toLowerCase().includes(state.inputSearch.toLowerCase())).filter(item => state.check.includes(item.genre));
            } else {
                state.moviesFiltered = state.movies.filter((movie) =>
                    movie.name.toLowerCase().includes(state.inputSearch.toLowerCase()));
            }
        } else if (state.radio === 'avaliable') {
            if (state.check.length !== 0) {
                state.moviesFiltered = state.movies.filter((movie) =>
                    movie.name.toLowerCase().includes(state.inputSearch.toLowerCase()) && movie.availability === true).filter(item => state.check.includes(item.genre));
            } else {
                state.moviesFiltered = state.movies.filter((movie) =>
                    movie.name.toLowerCase().includes(state.inputSearch.toLowerCase()) && movie.availability === true);
            }
        }

    },
    loadMovies(state) {
        state.moviesFiltered = state.movies;
    },
    setHeight(state) {
        let row = document.getElementById("theCards");
        let cards = row.getElementsByClassName("card");
        let heights = [];
        let max = '';

        if (state.maxHeight === '') {
            for (let i = 0; i < cards.length; i++) {
                heights.push(cards[i].clientHeight);
            }
            max = Math.max(...heights) + "px";

            for (let j = 0; j < cards.length; j++) {
                cards.item(j).style.height = max;
            }
            state.maxHeight = max;
        } else {
            for (let j = 0; j < cards.length; j++) {
                cards.item(j).style.height = state.maxHeight;
            }
        }
    },
    toggleGenres(state) {
        state.showGenres = !state.showGenres
        let btn = document.getElementById("genreBtn");
        if (state.showGenres) {
            btn.innerHTML = 'Hide genres';
        } else {
            btn.innerHTML = 'Show genres';
        }
    }
}