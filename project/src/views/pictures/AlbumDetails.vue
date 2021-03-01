<template>
  <div>
    <h3>Album Details Page</h3>
    <div v-for="(data, index) in albumContent" :key="index">
      <h4>{{ data.title }}</h4>
      <img :src="data.thumbnailUrl" :alt="data.title" />
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
    console.log("data", this.albumContent);
  },
};
</script>