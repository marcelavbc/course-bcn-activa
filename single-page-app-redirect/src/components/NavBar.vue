<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item mr-3">
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li class="nav-item mr-3">
            <router-link :to="{ name: 'Clients' }">Clients</router-link>
          </li>
          <li class="nav-item mr-3">
            <router-link :to="{ name: 'Suppliers' }">Proveïdors</router-link>
          </li>
          <li class="nav-item mr-3">
            <router-link :to="{ name: 'Stock' }">Magatzem</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle p-0"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Botiga
            </a>
            <div
              class="dropdown-menu pl-2"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <p>
                <router-link :to="{ name: 'Food' }">Alimentaciò</router-link>
              </p>
              <p>
                <router-link :to="{ name: 'Freezen' }">Congelats</router-link>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
#nav {
  padding: 30px 0;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar {
  padding: 30px;
  font-size: 18px;
}
</style>