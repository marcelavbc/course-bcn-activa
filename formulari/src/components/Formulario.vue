<template>
  <div class="row w-100">
    <div class="col-12 d-flex align-items-center justify-content-center">
      <form @submit.prevent="submitForm" id="theForm">
        <div class="form-group">
          <label>Nom:</label>
          <Validaciones :input="fullName" :id="'name'" :inputType="'text'">
            <template scope="{_validation}">
              <input
                id="name"
                type="text"
                class="form-control"
                v-model="fullName"
                :validation="_validation"
                @keyup="checkValidation"
              />
            </template>
          </Validaciones>
        </div>

        <div class="form-group">
          <label>Mòbil:</label>
          <Validaciones :input="mobile" :id="'mobile'" :inputType="'number'">
            <template scope="{_validation}">
              <input
                id="mobile"
                type="number"
                class="form-control"
                v-model="mobile"
                :validation="_validation"
                @keyup="checkValidation"
              />
            </template>
          </Validaciones>
        </div>
        <div class="form-group">
          <label>Codi Postal:</label>
          <Validaciones :input="zip" :id="'zip'" :inputType="'number'">
            <template scope="{_validation}">
              <input
                id="zip"
                type="number"
                class="form-control"
                v-model="zip"
                :validation="_validation"
                @keyup="checkValidation"
              />
            </template>
          </Validaciones>
        </div>
        <div class="form-group">
          <label>E-mail:</label>
          <Validaciones :input="email" :id="'email'" :inputType="'email'">
            <template scope="{_validation}">
              <input
                id="email"
                type="email"
                class="form-control"
                v-model="email"
                :validation="_validation"
                @keyup="checkValidation"
              />
            </template>
          </Validaciones>
        </div>
        <div class="form-group">
          <label>Contrasenya:</label>
          <Validaciones
            :input="password"
            :id="'password'"
            :inputType="'password'"
          >
            <template scope="{_validation}">
              <input
                id="password"
                type="password"
                class="form-control"
                v-model="password"
                :validation="_validation"
                @keyup="checkValidation"
              />
            </template>
          </Validaciones>
        </div>
        <div class="form-group">
          <label>Confirm Contrasenya:</label>
          <Validaciones
            :input="validPass"
            :id="'validPass'"
            :inputType="'password'"
            :pass="password"
          >
            <template scope="{_validation}">
              <input
                id="validPass"
                type="password"
                class="form-control"
                v-model="validPass"
                :validation="_validation"
                @keyup="checkValidation"
              />
            </template>
          </Validaciones>
        </div>
        <button id="submitButton" type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>

      <!-- Modal -->
      <div
        class="modal col"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Les teves dades
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="closeModal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>{{ fullName }}</p>
              <p>{{ mobile }}</p>
              <p>{{ zip }}</p>
              <p>{{ email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      password: "",
      validPass: "",
      isValid: false,
    };
  },
  methods: {
    submitForm() {
      let inputs = [...document.getElementsByClassName("form-control")];
      let isValidate = [];
      for (let i = 0; i < inputs.length; i++) {
        isValidate.push(inputs[i].attributes[3].value);
      }
      let notValid = isValidate.some((ele) => ele === "false");
      if (!notValid) {
        this.isValid = true;
      }
      if (this.isValid) {
        const modal = document.getElementById("exampleModalCenter");
        modal.classList.add("show");
      } else {
        for (let i = 0; i < inputs.length; i++) {
          if (event.target[i].attributes[3].value === "false") {
            event.target[i].classList.add("is-invalid");
          }
        }
      }
    },
    checkValidation(event) {
      let theInput = event.target;
      if (event.target.attributes[3].value === "false") {
        theInput.classList.add("is-invalid");
        // theInput.classList.remove("is-valid");
        console.log("error", event.target.attributes);
      } 
      if (event.target.attributes[3].value === "true"){
        theInput.classList.add("is-valid");
        theInput.classList.remove("is-invalid");
        console.log("valid", event.target.attributes);
      }
    },
    closeModal() {
      let inputs = [...document.getElementsByClassName("form-control")];
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("is-valid");
      }
      const modal = document.getElementById("exampleModalCenter");
      modal.classList.remove("show");
      this.fullName = "";
      this.mobile = null;
      this.zip = null;
      this.email = "";
      this.password = "";
      this.validPass = "";
      this.isValid = false;
    },
  },
};
</script>

<style scoped src="../Styles/css/form.css"></style>