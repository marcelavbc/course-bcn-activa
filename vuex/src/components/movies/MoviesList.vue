<template>
  <div class="container">
    <h3 class="text-center title">Vuex Movies Search</h3>
    <radio-button></radio-button>
    <hr />
    <search-bar></search-bar>
    <div class="list-gender-selected" v-if="genresSelected.length > 0">
      <div class="selected-list">
        <div class="theList" v-for="genre in genresSelected" :key="genre">
          <span class="genreSelected">{{ genre }}</span>
          <br />
        </div>
      </div>
    </div>
    <check-genre></check-genre>
    <div class="row movies-row" id="theCards">
      <movie-card v-for="movie in moviesList" :key="movie.id">
        <div class="card">
          <div
            class="card-header not-avaliable"
            :class="{ avaliable: movie.availability }"
          >
            <h5 class="m-0 movie-title">{{ movie.name }}</h5>
          </div>
          <div class="card-body">
            <div class="d-flex flex-column">
              <h5 class="card-title text-muted align-self-end m-0">
                {{ movie.genre }}
              </h5>
              <p v-if="movie.availability" class="m-0">Avaliable</p>
              <p v-else class="m-0">Not avaliable</p>
            </div>
            <hr class="card-divisor"/>
            <p class="card-text">{{ movie.description }}</p>
          </div>
        </div>
      </movie-card>
    </div>
  </div>
</template>

<script>
import MovieCard from "../movies/MovieCard";
import SearchBar from "../SearchBar";
import RadioButton from "../RadioButton.vue";
import CheckGenre from "../CheckGenre";

import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    MovieCard,
    SearchBar,
    RadioButton,
    CheckGenre,
  },
  computed: {
    ...mapGetters(["moviesList", "genresSelected"]),
  },
  methods: {
    ...mapActions(["searchMovie", "loadMovies", "setHeight"]),
  },
  beforeMount() {
    this.loadMovies();
  },
  mounted() {
    console.log('mounted')
    this.setHeight();
  },
  updated() {
    console.log('updated')
    this.setHeight();
  },
};
</script>
