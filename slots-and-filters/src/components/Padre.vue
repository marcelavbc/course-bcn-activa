<template>
  <div class="center">
    <div :class="[isClosed ? 'closed' : 'open']">
      <ModalBootstrap>
        <div slot="header">
          <div class="modal-header">
            <h5 class="modal-title" id="myModalLabel">Conversor</h5>
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

<script src="../Scripts/padre.js"></script>



