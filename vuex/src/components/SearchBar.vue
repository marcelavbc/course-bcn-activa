<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">@</span>
    </div>
    <input
      type="text"
      class="form-control"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="basic-addon1"
      @keyup="searchMovie"
      v-model="this.$store.state.inputSearch"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["movies", "moviesFiltered"]),
    ...mapGetters(["allMovies", "filtered"]),
  },
  methods: {
    ...mapState(["radioBtn", "inputSearch"]),
    ...mapActions(["searchMovie"]),
  },
};
</script>
