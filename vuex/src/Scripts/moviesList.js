import MovieCard from "../components/movies/MovieCard.vue";
import SearchBar from "../components/SearchBar.vue";
import RadioButton from "../components/RadioButton.vue";
import CheckGenre from "../components/CheckGenre.vue";
import NotAvaliable from "../components/NotAvaliable.vue"

import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import {mapState} from "vuex"

export default {
  components: {
    MovieCard,
    SearchBar,
    RadioButton,
    CheckGenre,
    NotAvaliable
  },
  computed: {
    ...mapGetters(["moviesList", "genresSelected"]),
    ...mapState(["notFound"])
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