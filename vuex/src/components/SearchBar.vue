<template>
  <div class="row search-container">
    <div class="col-12 col-md-8 search">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Type to search"
          aria-label="Search"
          aria-describedby="basic-addon1"
          @keyup="searchMovie"
          v-model="inputSearch"
        />
      </div>
    </div>
    <div class="col-12 col-md-4 genre-container">
      <button id="genreBtn" class="btn btn-primary" @click="toggleGenres">
        Show Genres
      </button>
    </div>
  </div>
</template>

<script src="../Scripts/searchBar.js"></script>
