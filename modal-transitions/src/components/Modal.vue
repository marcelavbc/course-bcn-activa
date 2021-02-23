<template>
  <transition name="slide">
    <div class="modal" v-if="open">
      <h1>Lorem Ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        provident explicabo accusamus laudantium voluptatum nobis sed nesciunt
        neque possimus molestiae?
      </p>
      <button class="button" @click="$emit('close')">Close Modal</button>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["open"],
  emits: ["close"],
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 16px;
  padding: 25px;
}

h1 {
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
}

p {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>