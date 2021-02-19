<template>
  <div class="container">
    <h3 class="text-center title">Vuex Movies Search</h3>
    <radio-button></radio-button>
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
        <div
          class="card not-avaliable body"
          :class="{ avaliable: movie.availability }"
        >
          <div class="d-flex flex-column">
            <h4 class="card-title text-center">{{ movie.name }}</h4>
            <h5 class="card-subtitle my-2 text-muted align-self-end">
              {{ movie.genre }}
            </h5>
            <!-- <p class="availability">Disponible: {{ movie.availability }}</p> -->
          </div>
          <p class="card-text">
            {{ movie.description }}
          </p>
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
    this.setHeight();
  },
  beforeUpdate() {
    this.setHeight();
  },
};
</script>
