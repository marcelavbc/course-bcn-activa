<template>
  <div class="container">
    <div class="row info-album mb-5">
      <div class="col-12 text-center my-3">
        <h1>Albums</h1>
      </div>
      <div class="col-md-3 mb-3" v-for="(album, index) in albums" :key="index">
        <card-info>
          <div class="info">
            <p>Album number {{ index }}</p>
            <router-link
              :to="{
                name: 'AlbumDetails',
                params: { id: index, album: JSON.stringify(album) },
              }"
            >
              <button class="btn btn-album" @click="loadAlbumsConsulted(album)">
                See album
              </button>
            </router-link>
          </div>
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

<style scoped>
.info-album h1 {
  color: #db007f;
}

.btn-album {
  background-color: white;
  color: #db007f;
  border-color: #db007f;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
