<template>
  <div class="container-fluid">
    <the-navbar></the-navbar>
    <router-view v-slot="{ Component }">
      <appear :translate="['-100px', 0]">
        <component :is="Component" />
      </appear>
    </router-view>
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

<style src="./Styles/css/app.css"></style>
