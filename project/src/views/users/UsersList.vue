<template>
  <div>
    <h1>Users</h1>
    <div class="user-card" v-for="user in users" :key="user.id">
      <p>{{ user.username }}</p>
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
          },
        }"
      >
        <button class="btn btn-info" @click="loadUsersConsulted(user)">See user</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  computed: {
    ...mapState("users", ["users"]),
  },
  created() {
    this.$store.dispatch("users/loadUsers");
  },
  methods: {
    ...mapMutations("users", ["loadUsersConsulted"])
  },
};
</script>
<style scoped>
</style>