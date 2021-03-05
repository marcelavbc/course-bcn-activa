<template>
  <div class="container mb-5">
    <div class="row justify-content-center">
      <div class="col-12 text-center my-3 header-title">
        <back-button></back-button>
        <h3 class="page-title">{{name}}</h3>
      </div>
      <div class="col">
        <card-info>
          <p class="m-1 text-justify w-100"><span class="data-user">Name:</span> {{ name }}</p>
          <p class="m-1 text-justify w-100">
            <span class="data-user">Username:</span> {{ username }}
          </p>
          <p class="m-1 text-justify w-100"><span class="data-user">E-mail:</span> {{ email }}</p>
          <p class="m-1 text-justify w-100"><span class="data-user">Phone:</span> {{ phone }}</p>
          <p class="m-1 text-justify w-100"><span class="data-user">Address:</span></p>
          <p class="m-1 text-justify w-100">{{ street }}, {{ suite }}</p>
          <p class="m-1 text-justify w-100">{{ zip }}</p>
          <p class="m-1 text-justify w-100">{{ city }}</p>
          <p class="m-1 text-justify w-100">
            <span class="data-user">Company:</span> {{ company }}
          </p>
          <p class="m-1 text-justify w-100"><span class="data-user">Web:</span> {{ website }}</p>
        </card-info>
      </div>
    </div>

    <!-- <p>lat: {{ address.geo.lat }}</p>
    <p>lng: {{ address.geo.lng }}</p>
    <p>{{ phone }}</p>
    <p>{{ company.name }}</p>
    <p>{{ company.catchPhrase }}</p>
    <p>{{ company.bs }}</p> -->
  </div>
</template>

<script>
export default {
  props: [
    "id",
    "name",
    "email",
    "username",
    "street",
    "suite",
    "zip",
    "city",
    "phone",
    "website",
    "company",
  ],
};
</script>

<style scoped>
.title {
  color: #db007f;
}
.data-user {
  color: #db007f;
}
</style>