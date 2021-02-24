<template>
<div :validate="_validation">
    <slot v-bind="validateInput(input, id, inputType, pass)" :_validation="this.validate ? 'true' : 'false'">
    </slot>
    <p v-if="!validate">{{ message }}</p>
</div>
</template>

<script>
export default {
    props: ["input", "inputType", "id", "_validation", "pass"],
    data() {
        return {
            message: "",
            validate: false,
        };
    },
    methods: {
        validateInput(input, id, inputType, pass) {
            if (inputType === "text") {
                let reg = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{5,12}$/;
                this.checkRegex(reg, input);
                if (!this.validate) {
                    this.message = "El nom ha de tenir de 6 a 13 lletres";
                }
            } else if (inputType === "number") {
                if (id === "mobile") {
                    let reg = /^\d{9}$/;
                    this.checkRegex(reg, input);
                    if (!this.validate) {
                        this.message = "El mòbil ha de tenir 9 dígits";
                    }
                } else if (id === "zip") {
                    let reg = /^\d{5}$/;
                    this.checkRegex(reg, input);
                    if (!this.validate) {
                        this.message = "El codi postal ha de tenir 5 dígits";
                    }
                }
            } else if (inputType === "email") {
                let reg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
                this.checkRegex(reg, input);
                if (!this.validate) {
                    this.message = "Escrigui una adreça d'email vàlida";
                }
            } else if (inputType === "password") {
                if (id === "password") {
                    let reg = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,12}$/;
                    this.checkRegex(reg, input);
                    if (!this.validate) {
                        this.message =
                            "La contrasenya ha de tenir de 6 a 13 caràcters, lletres majúscules, minúscules i dígits";
                    }
                }
                if (id === "validPass") {
                    if (input === pass) {
                        this.validate = true;
                    } else {
                        this.validate = false;
                        if (!this.validate && input !== "") {
                            this.message = "La contrasenya no coincideix";
                        }
                    }
                }
            }
        },
        checkRegex(reg, input) {
            let that = this;
            return reg.test(input) ? (that.validate = true) : (that.validate = false);
        },
    },
};
</script>
