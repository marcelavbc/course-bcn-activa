<template>
  <div>
    <h1>Albums</h1>
    <div class="user-card" v-for="(album, key, index) in albums" :key="index">
      <p>the key {{ key }}</p>
      <router-link
        :to="{ name: 'AlbumDetails', params: { id: index, album: JSON.stringify(album) } }"
      >
        <button class="btn btn-success">See album</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("albums", ["albums"]),
  },
  created() {
    this.$store.dispatch("albums/loadAlbums");
  },
};
</script>
