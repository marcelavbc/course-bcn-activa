<template>
  <div id="hijo">
    <p>{{ name }}</p>
    <button @click="addToCounter" class="btn">{{ value }}</button>
  </div>
</template>

<script>
export default {
  props: ["name", "value"],
  methods: {
      addToCounter(){
          this.$emit('count-add-one', this.name);
      }
  },
};
</script>