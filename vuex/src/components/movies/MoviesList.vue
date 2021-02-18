<template>
  <div class="container">
    <h3>Vuex Movies Search</h3>
    <div class="row">
      <div class="col-12 radio">
        <search-bar></search-bar>
      </div>
    </div>
    <div class="row">
      <div class="col-12 radio">
        <radio-button></radio-button>
      </div>
    </div>

    <div class="row movies-row">
      <movie-card v-for="movie in filtered" :key="movie.id">
        <h5 class="card-title">{{ movie.name }}</h5>
        <p>Disponible: {{ movie.availability }}</p>
        <h6 class="card-subtitle mb-2 text-muted">{{ movie.genre }}</h6>
        <p class="card-text">
          {{ movie.description }}
        </p>
      </movie-card>
    </div>
  </div>
</template>

<script>
import MovieCard from "../movies/MovieCard";
import SearchBar from "../SearchBar";
import RadioButton from "../RadioButton";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  components: {
    MovieCard,
    SearchBar,
    RadioButton,
  },
  computed: {
    ...mapState(["movies", "moviesFiltered"]),
    ...mapGetters(["allMovies", "filtered","radioBtn"]),
  },
  methods: {
    ...mapActions(["filterRadio"]),
  },
};
</script>

<style scoped>
</style>