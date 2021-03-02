<template>
  <div class="container">
    <div class="row info-user">
      <div class="col-12 text-center my-3">
        <h1>Users</h1>
      </div>
      <div class="col-md-3 mb-3" v-for="user in users" :key="user.id">
        <card-info>
          <div class="info">
            <p>{{ user.name }}</p>
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
                  company: user.company.name
                },
              }"
            >
              <button class="btn btn-see" @click="loadUsersConsulted(user)">
                See user
              </button>
            </router-link>
          </div>
        </card-info>
      </div>
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
    ...mapMutations("users", ["loadUsersConsulted"]),
  },
};
</script>
<style >
.info-user h1 {
  color: #db007f;
}

.btn-see {
  background-color: #db007f;
  color: white;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>