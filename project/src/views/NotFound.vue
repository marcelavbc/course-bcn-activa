<template>
  <div class="not-found-container">
    <div class="text-center">
      <h4>404</h4>
      <h5>Page not found</h5>
    </div>

    <i class="fas fa-exclamation-triangle"></i>
    <div>
      <h5>Where would you like to go?</h5>
      <div class="d-flex justify-content-around mt-4">
        <p class="link" @click="changeRoute">Users</p>
        <p class="link" @click="changeRouteAlbums">Albums</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("users", ["changeRoute"]),
    ...mapActions("albums", ["changeRouteAlbums"]),
  },
};
</script>