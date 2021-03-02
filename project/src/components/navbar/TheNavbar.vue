<template>
  <nav class="navbar navbar-expand-lg" id="navbar">
    <router-link to="/" class="navbar-brand"
      ><img id="logo" src="../../assets/Itlogo.png"
    /></router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/users">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/albums">Albums</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<style scoped>
#navbar {
  padding: 0 10px 0 0;
  background-color: black;
}

#navbar a {
  margin-right: 35px;
  font-weight: bold;
  color: white;
}

#navbar a.router-link-exact-active {
  color: #db007f;
  text-decoration: none;
}

.navbar-collapse {
  padding-left: 10px;
}

#logo {
  width: 190px;
}

.navbar-toggler {
  border: 2px solid #db007f;
}

.fa-bars {
  color: #db007f;
  font-size: 28px;
}

.navbar-nav {
  justify-content: center;
  width: 60%;
}

.btn {
  border: 1px solid #db007f;
  color: #db007f;
}
</style>