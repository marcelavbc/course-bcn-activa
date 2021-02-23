import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["searchMovie"]),
  },
  computed: {
    inputRadio: {
      get() {
        return this.$store.state.radio;
      },
      set(value) {
        this.$store.commit("setRadio", value);
      },
    },
  },
};