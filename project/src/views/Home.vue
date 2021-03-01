<template>
  <div class="home">
    <div class="border border-info mx-5">
      <h3>Users consulted</h3>
      <div v-if="usersConsulted.length">
        <p v-for="user in usersConsulted" :key="user.id">
          {{user.username}} | {{user.count}}
        </p>
      </div>
      <p></p>
    </div>
    <br />
    <div class="border border-info mx-5">
      <h3>Pictures consulted</h3>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState("users", ["usersConsulted"])
  }
  
};
</script>
