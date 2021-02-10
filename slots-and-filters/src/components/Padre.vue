<template>
  <div class="center">
    <div :class="[isClosed ? 'closed' : 'open']">
      <ModalBootstrap>
        <div slot="header">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Conversor</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="toggleModal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <div slot="body">
          <div class="modal-body">
            <h3>Cambio de Euros a Dolares</h3>
            <input
              v-model="euros"
              v-on:keyup="isANumber"
              onfocus="this.value === ''"
            />
            <p v-if="euros != '' && isValid" class="my-3">
              El cambio de {{ euros | toEuros }} es de
              <span>{{ euros | currency }}</span
              >.
            </p>
            <p v-else class="my-3">Por favor, escriba un valor numérico.</p>
          </div>
        </div>
        <div slot="footer">
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-close"
              data-dismiss="modal"
              @click="toggleModal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </ModalBootstrap>
    </div>
    <div v-if="isClosed" class="closed-message">
      <p>Has cerrado el modal</p>
      <button @click="toggleModal" class="btn btn-open">Abrir otra vez</button>
    </div>
  </div>
</template>

<script>
import ModalBootstrap from "./ModalBootstrap";

export default {
  components: { ModalBootstrap },
  data() {
    return {
      euros: "",
      isValid: true,
      isClosed: false,
    };
  },
  filters: {
    currency(val) {
      return (parseFloat(val) * 1.23).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
    toEuros(val) {
      return parseFloat(val).toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
      });
    },
  },
  methods: {
    isANumber() {
      var reg = /^-?\d+\.?\d*$/;
      if (reg.test(this.euros)) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
    },
    toggleModal() {
      this.isClosed = !this.isClosed;
      this.euros = "";
    },
  },
};
</script>

