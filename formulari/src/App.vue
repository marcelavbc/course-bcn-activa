<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div id="app" class="container">
    <div class="row">
        <Formulario></Formulario>
    </div>
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
