<template>
  <div :validate="_validation">
    <slot v-bind="validateInput(input, id, inputType)" :_validation="(this.validate ? 'true' : 'false')"> </slot>
    <p v-if="error">{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: ["input", "inputType", "id", "_validation"],
  data() {
    return {
      error: true,
      message: "",
      validate: true
    };
  },
  methods: {
    validateInput(input, id, inputType) {
      if (inputType === "text") {
        let reg = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{5,12}$/;
        if (reg.test(input)) {
          this.error = false;
          this.validate = true
        } else {
          this.error = true;
          this.message = "name should have 6 to 13 letters";
        }
      } else if (inputType === "number") {
        if (id === "mobile") {
          let reg = /^\d{9}$/;
          if (reg.test(input)) {
            this.error = false;
          } else {
            this.error = true;
            this.message = "phone should have 9 numbers";
          }
        } else if (id === "zip") {
          let reg = /^\d{5}$/;
          if (reg.test(input)) {
            this.error = false;
          } else {
            this.error = true;
            this.message = "zip should have 5 numbers";
          }
        }
      } else if (inputType === "email") {
        let reg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (reg.test(input)) {
          this.error = false;
        } else {
          this.error = true;
          this.message = "should be an email address";
        }
      }
    },
    
  },

};
</script>


        
    