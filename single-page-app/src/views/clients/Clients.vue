<template>
  <div class="container">
    <h1>Clients</h1>
    <div class="row mt-5">
      <client-card v-for="client in clients" :key="client.id">
        <div class="card px-2" style="width: 18rem">
          <img
            class="card-img-top"
            :src="require(`../../assets/${client.img}.png`)"
            :alt="client.name"
          />
          <div class="card-body">
            <h5 class="card-title">{{ client.name }}</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              distinctio voluptates quibusdam.
            </p>
            <router-link
              :to="{ name: 'ClientDetails', params: { id: client.id, name:client.name, img:client.img, info:client.info } }"
            >
              <button class="btn btn-details">Més informació</button>
            </router-link>
          </div>
        </div>
      </client-card>
    </div>
  </div>
</template>

<script>
import ClientCard from "../../components/ClientCard";

export default {
  components: { ClientCard },
  data() {
    return {
      clients: [
        {
          id: 1,
          name: "Mercadona",
          img: "mercadona",
          info:
            "Mercadona és una companyia valenciana de distribució de queviures que va néixer el 1981 de la mà de Juan Roig, que en segueix essent el president executiu. Integrada en el sector dels supermercats, posseeix un capital espanyol completament.",
        },
        {
          id: 2,
          name: "Dia",
          img: "dia",
          info:
            "DIA és una cadena de supermercats espanyola de maxidescompte. Compta amb 3700 establiments, 26 locals de distribució i 22.000 treballadors. És present a Espanya, Grècia, Turquia, la Xina, el Brasil, i l'Argentina sota el nom de Dia. A Portugal, sota el nom de Minipreço; i a França, amb el nom d’Ed.",
        },
        {
          id: 3,
          name: "Auchan",
          img: "auchan",
          info:
            "Alcampo és la filial d'hipermercats a Espanya del Grup Auchan també present a través de la cadena de supermercats Sabeco, la promotora immobiliària Immochan i la financera Accordfin. Aquesta cadena de distribució va iniciar la seva activitat a Espanya el 1981 amb l'obertura d'un hipermercat a Utebo.",
        },
        {
          id: 4,
          name: "Carrefour",
          img: "carrefour",
          info:
            "Carrefour S.A és un grup francès especialitzat en la gran distribució. El 2004, el grup tenia 10.000 magatzems a 30 països, tenia 400.000 treballadors i les seves vendes consolidades van assolir els 90,6 miliars d'euros.",
        },
        {
          id: 5,
          name: "BonArea",
          img: "bonarea",
          info:
            "bonÀrea Agrupa compta amb una àmplia experiència en el sector agroalimentari. Desenvolupa totes les activitats ramaderes, industrials i comercials necessàries per arribar al consumidor sense intermediaris.",
        },
        {
          id: 6,
          name: "Spar",
          img: "spar",
          info:
            "SPAR és una cadena multinacional neerlandesa de supermercats i botigues a l'abast. Amb més de 20.000 establiments repartits en 35 països, és considerada com la cadena de venda minorista més gran del món.",
        },
      ],
    };
  },
};
</script>

<style>
.card-img-top {
  height: 100px;
  object-fit: contain;
}

.btn-details {
  background-color: #42b983;
  color: white;
}
</style>