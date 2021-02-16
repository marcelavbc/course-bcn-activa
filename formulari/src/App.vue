<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div id="app" class="container-fluid">
    <Formulario></Formulario>
  </div>
</template>

<script>
import Formulario from "../src/components/Formulario";
export default {
  name: "App",
  components: { Formulario },
};
</script>

<style src="./Styles/css/app.css"></style>
