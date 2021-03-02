<template>
  <div class="home">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-6">
          <card-info>
            <h5 class="text-center">Users consulted</h5>
            <div v-if="usersConsulted.length">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Username</th>
                    <th scope="col">City</th>
                    <th scope="col">Counter</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in usersConsulted" :key="user.id">
                    <td>{{ user.username }}</td>
                    <td>{{ user.address.city }}</td>
                    <td>{{ user.count }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else>
              <p class="text-center mt-5 text-muted">No user consulted</p>
            </div>
          </card-info>
        </div>
        <div class="col-md-6">
          <card-info>
            <h5 class="text-center">Pictures consulted</h5>
            <div v-if="albumConsulted.length">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Album Number</th>
                    <th scope="col">Counter</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="album in albumConsulted" :key="album.id">
                    <td>{{ album[0].albumId }}</td>
                    <td>{{ album.count }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else>
              <p class="text-center mt-5 text-muted">No album consulted</p>
            </div>
          </card-info>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState("users", ["usersConsulted"]),
    ...mapState("albums", ["albumConsulted"]),
  },
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home h5 {
  color: #db007f;
  margin-bottom: 15px;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(219, 0, 127, 0.1);
}
</style>
