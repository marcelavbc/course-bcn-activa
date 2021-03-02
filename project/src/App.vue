<template>
  <div class="container-fluid">
    <the-navbar></the-navbar>
    <router-view />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavbar from "../src/components/navbar/TheNavbar";
import TheFooter from "../src/components/footer/TheFooter";

export default {
  components: { TheNavbar, TheFooter },
};
</script>

<style>
.container-fluid {
  padding: 0 !important;
}



/* 
#app {
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
