<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-12 text-center my-4 header-title">
        <back-button></back-button>
        <h3 class="page-title">Photos</h3>
      </div>
      <div
        class="col-md-4 mb-3"
        v-for="(data, index) in albumContent"
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
export default {
  props: ["id", "album"],
    data() {
    return {
      albumContent: [],
    };
  },
  mounted() {
    this.albumContent = JSON.parse(this.$props.album);
  },
};
</script>
