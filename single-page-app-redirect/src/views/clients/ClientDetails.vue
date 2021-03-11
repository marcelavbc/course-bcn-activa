<template>
  <div class="container">
    <div
      v-if="client"
      class="details-div d-flex justify-content-center align-items-center"
    >
      <img
        class="detail-img"
        :src="require(`../../assets/${client.img}.png`)"
        alt="client.name"
      />
      <div class="ml-5">
        <h1>{{ client.name }}</h1>
        <p>{{ client.info }}</p>
      </div>
    </div>

    <div v-else>
      <p>loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      client: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/clients/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.client = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
.detail-img {
  width: 300px;
  
}
</style>