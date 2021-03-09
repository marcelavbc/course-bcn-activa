<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-12 text-center my-4 header-title">
        <back-button></back-button>
        <h3 class="page-title">Users</h3>
      </div>
      <div v-if="!allUsers.length" class="no-user w-100 mt-4r">
        <h5 class="text-center">No user found.</h5>
      </div>
      <div class="col-md-4 mb-3" v-for="user in allUsers" :key="user.id">
        <card-info>
          <p>{{ user.name.toUpperCase() }}</p>
          <nuxt-link
            :to="'users/' + user.id"  
          >
            <button-see @click.native="loadUsersConsulted(user)"></button-see>
          </nuxt-link>
        </card-info>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import CardInfo from "../../components/cards/CardInfo";
import ButtonSee from "../../components/utils/ButtonSee";
import BackButton from "../../components/utils/BackButton";

export default {
  components: { CardInfo, ButtonSee, BackButton },
  head() {
    return {
      title: "Users",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Dumb app",
        },
      ],
    };
  },
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