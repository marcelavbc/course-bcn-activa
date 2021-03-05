<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-12 text-center my-3 header-title">
        <back-button></back-button>
        <h3 class="page-title">Users</h3>
      </div>
      <div class="col-md-4 mb-3" v-for="user in allUsers" :key="user.id">
        <card-info>
            <p>{{ user.name.toUpperCase() }}</p>
            <router-link
              :to="{
                name: 'UserDetails',
                params: {
                  id: user.id,
                  name: user.name,
                  username: user.username,
                  email: user.email,
                  street: user.address.street,
                  suite: user.address.suite,
                  zip: user.address.zipcode,
                  city: user.address.city,
                  phone: user.phone,
                  website: user.website,
                  company: user.company.name,
                },
              }"
            >
              <button-see @click="loadUsersConsulted(user)"></button-see>
            </router-link>
        </card-info>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("users", ["allUsers"]),
  },
  created() {
    this.$store.dispatch("users/loadUsers");
  },
  methods: {
    ...mapMutations("users", ["loadUsersConsulted"]),
  },
};
</script>
