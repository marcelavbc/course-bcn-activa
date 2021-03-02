<template>
  <div class="container">
    <div class="row justify-content-center my-3">
      <div
        class="col-md-3 mb-3"
        v-for="(data, index) in albumContent"
        :key="index"
      >
        <card-info class="p-0">
          <div class="pic-card">
            <img class="mt-2" :src="data.thumbnailUrl" :alt="data.title" />
            <p class="text-center align-self-end mt-3">{{ data.title }}</p>
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

<style scoped>
.pic-card {
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.pic-card p{
  background-color: #db007f;
  width: 100%;
  margin:0
}
</style>