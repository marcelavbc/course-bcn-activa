<template>
  <div class="container">
    <h1>Clients</h1>
    <div class="row mt-5">
      <client-card v-for="client in clients" :key="client.id">
        <div class="card px-2" style="width: 18rem">
          <img
            class="card-img-top"
            :src="require(`../../assets/${client.img}.png`)"
            :alt="client.name"
          />
          <div class="card-body">
            <h5 class="card-title">{{ client.name }}</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              distinctio voluptates quibusdam.
            </p>
            <router-link
              :to="{ name: 'ClientDetails', params: { id: client.id } }"
            >
              <button class="btn btn-details">Més informació</button>
            </router-link>
          </div>
        </div>
      </client-card>
    </div>
  </div>
</template>

<script>
import ClientCard from "../../components/ClientCard";

export default {
  components: { ClientCard },
  data() {
    return {
      clients: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/clients")
      .then((res) => res.json())
      .then((data) => (this.clients = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.card-img-top {
  height: 100px;
  object-fit: contain;
}

.btn-details {
  background-color: #42b983;
  color: white
}
</style>