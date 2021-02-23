import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  methods: {
    ...mapActions(["searchMovie"]),
  },
  computed: {
    ...mapState(["showGenres"]),
    getMoviesGenres: {
      get() {
        return this.$store.state.check;
      },
      set(value) {
        this.$store.state.check = value;
      },
    },
  },
};