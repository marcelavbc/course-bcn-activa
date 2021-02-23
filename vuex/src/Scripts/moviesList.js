import MovieCard from "../components/movies/MovieCard.vue";
import SearchBar from "../components/SearchBar.vue";
import RadioButton from "../components/RadioButton.vue";
import CheckGenre from "../components/CheckGenre.vue";

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
    ...mapActions(["loadMovies", "setHeight"]),
  },
  beforeMount() {
    this.loadMovies();
  },
  mounted() {
    this.setHeight();
  },
  updated(){
    this.setHeight();
  }
};