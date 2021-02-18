<template>
  <div class="custom-control custom-radio">
    <input
      type="radio"
      id="allMovies"
      name="customRadio"
      class="custom-control-input"
      value="allMovies"
      @change="filterRadio"
      checked="checked"
      v-model="radioBtn"
    />
    <label class="custom-control-label" for="allMovies">All movies</label>
  </div>
  <div class="custom-control custom-radio">
    <input
      type="radio"
      id="avaliableMovies"
      name="customRadio"
      class="custom-control-input"
      value="avaliableMovies"
      @change="filterRadio"
      v-model="radioBtn"
    />
    <label class="custom-control-label" for="avaliableMovies"
      >Avaliable Movies</label
    >
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  methods: {
    ...mapState(["radioBtn", "inputSearch"]),
    ...mapActions(["filterRadio"]),
    ...mapGetters(["radioBtn"]),
  },
};
</script>