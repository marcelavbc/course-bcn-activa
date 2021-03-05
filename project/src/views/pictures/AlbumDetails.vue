<template>
  <div class="container mb-5">
    <div class="row justify-content-center mt-3 details-container">
      <div class="col-12">
        <div class="back-button text-center w-100">
        <back-button></back-button>
      </div>
        <h1 class="photos-title text-center my-3">Photos</h1>
      </div>
      <div
        class="col-md-4 mb-3"
        v-for="(data, index) in albumContent"
        :key="index"
      >
        <div class="pic-card">
          <img class="mt-2" :src="data.thumbnailUrl" :alt="data.title" />
          <div class="mt-2">
            <p class="text-center">
              {{ data.title }}
            </p>
          </div>
        </div>
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

<style scoped>
.pic-card {
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #db007f
}

.pic-card p {
  margin: 0!important
}

.details-container {
  margin-bottom: 50px;
}

.photos-title {
  color: #db007f;
}

</style>