<template>
  <div class="container mb-5">
    <div class="row justify-content-center">
      <div class="col-12 text-center my-4 header-title">
        <back-button></back-button>
        <h3 class="page-title">{{single.name}}</h3>
      </div>
      <div class="col col-md-6">
        <card-info>
          <p class="m-1 text-justify w-100">
            <span class="data-user">Name:</span> {{single.name}}
          </p>
          <p class="m-1 text-justify w-100">
            <span class="data-user">Username:</span> {{ single.username }}
          </p>
          <p class="m-1 text-justify w-100">
            <span class="data-user">E-mail:</span> {{ single.email }}
          </p>
          <p class="m-1 text-justify w-100">
            <span class="data-user">Phone:</span> {{ single.phone }}
          </p>
          <p class="m-1 text-justify w-100">
            <span class="data-user">Address:</span>
          </p>
          <p class="m-1 text-justify w-100">{{ single.address.street }}, {{ single.address.suite }}</p>
          <p class="m-1 text-justify w-100">{{ single.address.zip }}</p>
          <p class="m-1 text-justify w-100">{{ single.address.city }}</p>
          <p class="m-1 text-justify w-100">
            <span class="data-user">Company:</span> {{ single.company.name }}
          </p>
          <p class="m-1 text-justify w-100">
            <span class="data-user">Web:</span> {{ single.website }}
          </p>
        </card-info>
      </div>
    </div>
  </div>
</template>
<script>
import CardInfo from "../../../components/cards/CardInfo";
import BackButton from "../../../components/utils/BackButton";

import { mapGetters } from "vuex";

export default {
  components: { CardInfo, BackButton },
  computed: {
    ...mapGetters("users", ["single"]),
  },
};
</script>
