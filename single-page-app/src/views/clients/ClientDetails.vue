<template>
  <div class="container">
    <div class="details-div d-flex justify-content-center align-items-center">
      <img
        class="detail-img"
        :src="require(`../../assets/${img}.png`)"
        alt="name"
      />
      <div class="ml-5">
        <h1>{{ name }}</h1>
        <p>{{ info }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "img", "info"],
};
</script>

<style scoped>
.detail-img {
  width: 300px;
}
</style>