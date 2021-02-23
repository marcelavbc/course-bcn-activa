import { mapActions } from "vuex";

export default {
    methods: {
        ...mapActions(["searchMovie", "toggleGenres"]),
    },
    computed: {
        inputSearch: {
            get() {
                return this.$store.state.inputSearch;
            },
            set(value) {
                this.$store.commit("setInput", value);
            }
        }
    }
};