<template>
  <div>
    <the-navbar />
    <appear :translate="['-100px', 0]">
      <Nuxt />
    </appear>
    <the-footer />
  </div>
</template>

<script>
import TheNavbar from "../components/navbar/TheNavbar";
import TheFooter from "../components/footer/TheFooter";
import Appear from "../components/utils/Appear";

export default {
  components: {
    TheNavbar,
    TheFooter,
    Appear,
  },
};
</script>

