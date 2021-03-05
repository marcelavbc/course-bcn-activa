<template>
    <div class="home">
      <div class="container mb-5">
        <div class="row mt-5">
          <div class="col-md-6 mt-4">
            <card-info>
              <h5 class="text-center">Users consulted</h5>
              <div v-if="usersConsulted.length">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col" class="text-center">Username</th>
                      <th scope="col" class="text-center">City</th>
                      <th scope="col" class="text-center">Counter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in usersConsulted" :key="user.id">
                      <td class="text-center">{{ user.username }}</td>
                      <td class="text-center">{{ user.address.city }}</td>
                      <td class="text-center">{{ user.count }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-else>
                <p class="text-center mt-5 text-muted">No user consulted</p>
              </div>
            </card-info>
          </div>
          <div class="col-md-6 mt-4">
            <card-info>
              <h5 class="text-center">Pictures consulted</h5>
              <div v-if="albumConsulted.length">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col" class="text-center">Album Number</th>
                      <th scope="col" class="text-center">Counter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="album in albumConsulted" :key="album.id">
                      <td class="text-center">Album: {{ album[0].albumId }}</td>
                      <td class="text-center">{{ album.count }}</td>
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

