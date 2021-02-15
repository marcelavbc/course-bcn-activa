<template>
  <div class="col">
    <form>
      <div class="form-group name-group">
        <label for="exampleInputEmail1">Nom:</label>
        <Validaciones :input="fullName" :id="'name'" :inputType="'text'">
          <template scope="{_validation}">
            <input
              id="name"
              type="text"
              class="form-control"
              v-model="fullName"
              :validation="_validation"
            />
          </template>
        </Validaciones>
      </div>

      <!-- <div class="number-data">
        <div class="form-group w-50 mr-3">
          <label for="exampleInputEmail1">Mòbil:</label>
          <Validaciones :input="mobile" :id="'mobile'" :inputType="'number'">
            <input
              id="mobile"
              type="number"
              class="form-control"
              v-model="mobile"
            />
          </Validaciones>
        </div>

        <div class="form-group w-50">
          <label for="exampleInputEmail1">Codi Postal:</label>
          <Validaciones :input="zip" :id="'zip'" :inputType="'number'">
            <input id="zip" type="number" class="form-control" v-model="zip" />
          </Validaciones>
        </div>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">E-mail:</label>
        <Validaciones :input="email" :id="'email'" :inputType="'email'">
          <input
            id="email"
            type="email"
            class="form-control"
            v-model.trim="email"
          />
        </Validaciones>
      </div> -->
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import Validaciones from "../components/Validaciones";

export default {
  components: { Validaciones },
  data() {
    return {
      fullName: "",
      mobile: null,
      zip: null,
      email: "",
    };
  },
  methods: {
    submitButton(){
      
    }
  },
};
</script>

<style scoped src="../Styles/css/form.css"></style>