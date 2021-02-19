<template>
  <div class="row">
    <div class="col-12 radio">
      <div class="custom-control custom-radio">
        <input
          type="radio"
          id="allMovies"
          name="customRadio"
          class="custom-control-input"
          @change="searchMovie"
          checked="checked"
          value="all"
          v-model="this.$store.state.radio"
        />
        <label class="custom-control-label" for="allMovies">All movies</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          id="avaliableMovies"
          name="customRadio"
          class="custom-control-input"
          @change="searchMovie"
          value="avaliable"
          v-model="this.$store.state.radio"
        />
        <label class="custom-control-label" for="avaliableMovies"
          >Avaliable Movies</label
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["searchMovie"]),
  },
};
</script>
