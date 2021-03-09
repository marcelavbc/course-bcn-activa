<template>
  <nav class="navbar navbar-expand-lg sticky-top" id="navbar">
    <nuxt-link to="/" class="navbar-brand">
      <img id="logo" src="../../assets/Itlogo.png" />
    </nuxt-link>
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
          <nuxt-link
            data-toggle="collapse"
            data-target=".navbar-collapse"
            to="/"
            >Home</nuxt-link
          >
        </li>
        <li class="nav-item">
          <nuxt-link
            data-toggle="collapse"
            data-target=".navbar-collapse"
            to="/users"
            >Users</nuxt-link
          >
        </li>
        <li class="nav-item">
          <nuxt-link
            data-toggle="collapse"
            data-target=".navbar-collapse"
            to="/albums"
            >Albums</nuxt-link
          >
        </li>
      </ul>
      <nuxt-link to="/users">
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Search users"
            aria-label="Search"
            @keyup="filterUsers($event)"
          />
        </form>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("users", ["filterUsers"]),
  },
};
</script>
