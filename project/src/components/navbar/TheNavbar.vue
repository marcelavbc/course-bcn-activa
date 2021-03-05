<template>
  <nav class="navbar navbar-expand-lg sticky-top" id="navbar">
    <router-link data-toggle="collapse" to="/" class="navbar-brand"
      ><img id="logo" src="../../assets/Itlogo.png"
    /></router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link data-toggle="collapse" data-target=".navbar-collapse" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link data-toggle="collapse" data-target=".navbar-collapse" to="/users">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link data-toggle="collapse" data-target=".navbar-collapse" to="/albums">Albums</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="text"
          placeholder="Search users"
          aria-label="Search"
          @keyup="filterUsers($event)"
          @click="changeRoute"
        />
      </form>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("users", ["filterUsers", "changeRoute"]),
  },
};
</script>
