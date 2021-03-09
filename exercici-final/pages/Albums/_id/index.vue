<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-12 text-center my-4 header-title">
        <back-button></back-button>
        <h3 class="page-title">Photos</h3>
      </div>
      <div
        class="col-md-4 mb-3"
        v-for="(data, index) in single"
        :key="index"
      >
        <card-info>
            <img class="mt-2" :src="data.thumbnailUrl" :alt="data.title" />
            <div class="mt-2">
              <p class="text-center subtitle">
                {{ data.title }}
              </p>
            </div>
        </card-info>
      </div>
    </div>
  </div>
</template>

<script>
import CardInfo from "../../../components/cards/CardInfo";
import BackButton from "../../../components/utils/BackButton";

import { mapGetters } from "vuex";

export default {
  components: { CardInfo, BackButton },
  computed: {
    ...mapGetters("albums", ["single"]),
  },
};
</script>
</script>

<style>

</style>