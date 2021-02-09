<template>
  <div id="padre">
    <p>{{ missatge }}</p>
    <Hijo></Hijo>
  </div>
</template>

<script>
import Hijo from "./Hijo";
export default {
  components: { Hijo },
  data() {
    return {
      missatge: "Soc el Pare",
    };
  },
};
</script>