<template>
    <div class="home">
      <div class="container mb-5">
        <div class="row">
          <div class="col-md-6 mt-4">
            <card-info>
              <h5 class="text-center">Users consulted</h5>
              <div v-if="usersConsulted.length">
                <table class="table table-striped">
                  <thead>
                    <tr class="row">
                      <th scope="col" class="text-center data">Username</th>
                      <th scope="col" class="text-righ data">Counter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="row" v-for="user in usersConsulted" :key="user.id">
                      <td class="data">{{ user.username }}</td>
                      <td class="data text-right">{{ user.count }}</td>
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
                    <tr class="row">
                      <th scope="col" class="text-center data">Album</th>
                      <th scope="col" class="text-righ data">Counter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="row" v-for="album in albumConsulted" :key="album.id">
                      <td class="data">{{ album[0].albumId }}</td>
                      <td class="data text-right">{{ album.count }}</td>
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

