<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-12 text-center my-4 header-title">
          <back-button></back-button>
        <h3 class="page-title">Albums</h3>
      </div>
      <div class="col-md-4 mb-3" v-for="(album, index) in albums" :key="index">
        <card-info >
            <p>Album {{ index }}</p>
            <router-link
              :to="{
                name: 'AlbumDetails',
                params: { id: index, album: JSON.stringify(album) },
              }"
            >
            <button-see @click="loadAlbumsConsulted(album)"></button-see>
            </router-link>
        </card-info>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  computed: {
    ...mapState("albums", ["albums"]),
  },
  created() {
    this.$store.dispatch("albums/loadAlbums");
  },
  methods: {
    ...mapMutations("albums", ["loadAlbumsConsulted"]),
  },
};
</script>

