<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-12 text-center my-4 header-title">
        <back-button></back-button>
        <h3 class="page-title">Albums</h3>
      </div>
      <div
        class="col-md-4 mb-3"
        v-for="(album, index) in allAlbums"
        :key="index"
      >
        <card-info>
          <p>Album {{ index }}</p>
          <nuxt-link :to="'albums/' + album[0].albumId">
            <button-see @click.native="loadAlbumsConsulted(album)"></button-see>
          </nuxt-link>
        </card-info>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import CardInfo from "../../components/cards/CardInfo";
import ButtonSee from "../../components/utils/ButtonSee";
import BackButton from "../../components/utils/BackButton";
export default {

  components: { CardInfo, ButtonSee, BackButton },
  head() {
    return {
      title: "Albums",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Dumb app",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("albums", ["allAlbums"]),
  },
  created() {
    this.$store.dispatch("albums/loadAlbums");
  },
  methods: {
    ...mapMutations("albums", ["loadAlbumsConsulted"]),
  },
};
</script>

<style>
</style>