<template>
  <div>
      <h3>user Details page</h3>
    <p>{{ name }}</p>
    <p>{{ username }}</p>
    <p>{{ email }}</p>
    <p>{{ street }}</p>
    <p>{{ suite }}</p>
    <p>{{ zip }}</p>
    <p>{{ city }}</p>

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
  props: ["id", "name", "email", "username", "street", "suite", "zip", "city"],
  
};
</script>