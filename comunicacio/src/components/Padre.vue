<template>
  <div id="padre" class="col-12 d-flex flex-column align-items-center">
      <h4 class="mt-4">Component Pare</h4>
    <Hijo
      v-for="(item, index) in itemArray"
      :key="index"
      :name="item.name"
      :value="item.value"
      @count-add-one="counterPlus"
    ></Hijo>
    
  </div>
</template>

<script>
import Hijo from "./Hijo";

export default {
  components: { Hijo },
  data() {
    return {
      itemArray: [
        {
          name: "item 1",
          value: 0,
        },
        {
          name: "item 2",
          value: 0,
        },
        {
          name: "item 3",
          value: 0,
        },
      ],
    };
  },
  methods: {
    counterPlus(element) {
        const identifiedItem = this.itemArray.find(item => item.name === element);
        identifiedItem.value++
    },
  },
};
</script>