import ModalBootstrap from "../components/ModalBootstrap.vue";

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