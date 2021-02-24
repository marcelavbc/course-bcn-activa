<template>
  <div class="row w-100">
    <div class="col-12 d-flex align-items-center justify-content-center">
      <form @submit.prevent="submitForm" id="theForm">
        <div class="form-group">
          <Appear :delay="500" :translate="['-100px', 0]">
            <label>Nom:</label>
          </Appear>
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
          <Appear :delay="700" :translate="['-100px', 0]">
            <label>Mòbil:</label>
          </Appear>
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
          <Appear :delay="900" :translate="['-100px', 0]">
            <label>Codi Postal:</label>
          </Appear>
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
          <Appear :delay="1100" :translate="['-100px', 0]">
            <label>E-mail:</label>
          </Appear>
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
          <Appear :delay="1300" :translate="['-100px', 0]">
            <label>Contrasenya:</label>
          </Appear>
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
          <Appear :delay="1500" :translate="['-100px', 0]">
            <label>Confirm Contrasenya:</label>
          </Appear>
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
        <Appear :delay="1900" :duration="900">
          <button id="submitButton" type="submit" class="btn btn-primary">
            Submit
          </button>
        </Appear>
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
        <div class="modal-dialog" role="document">
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
import Appear from "../components/utils/Appear";

export default {
  components: { Validaciones, Appear },
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
      if (event.target.attributes[3].value === "true") {
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