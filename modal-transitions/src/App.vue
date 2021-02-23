<template>
  <button class="button" @click="showDialog">Show Modal</button>
  <transition name="fade" appear>
    <div class="modal-overlay" v-if="dialogIsVisible" @click="hideDialog"></div>
  </transition>
  <the-modal @close="hideDialog" :open="dialogIsVisible">
    <button class="button" @click="hideDialog">Close it!</button>
  </the-modal>
</template>

<script>
import TheModal from "./components/Modal";
export default {
  name: "App",
  components: {
    TheModal,
  },
  data() {
    return {
      dialogIsVisible: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "montserrat", sans-serif;
}

#app {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
}

.button {
  background-color: rgb(106, 90, 205);
  border: none;
  outline: none;
  color: white;
  padding: 15px 25px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 8px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}

.button:hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(106, 90, 205, 1);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
