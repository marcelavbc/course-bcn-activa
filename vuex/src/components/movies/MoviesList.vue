<template>
  <div class="container">
    <h3 class="text-center title">Vuex Movies Search</h3>
    <radio-button></radio-button>
    <hr />
    <search-bar></search-bar>
    <div class="list-gender-selected" v-if="genresSelected.length > 0">
      <div class="selected-list">
        <div class="theList" v-for="genre in genresSelected" :key="genre">
          <span class="genreSelected">{{ genre }}</span>
          <br />
        </div>
      </div>
    </div>
    <check-genre></check-genre>
    <not-avaliable v-if="notFound"></not-avaliable>
    <div class="row movies-row" id="theCards">
      <movie-card v-for="movie in moviesList" :key="movie.id">
        <div class="card">
          <div
            class="card-header not-avaliable"
            :class="{ avaliable: movie.availability }"
          >
            <h5 class="m-0 movie-title">{{ movie.name }}</h5>
          </div>
          <div class="card-body">
            <div class="d-flex flex-column">
              <h5 class="card-title text-muted align-self-end m-0">
                {{ movie.genre }}
              </h5>
              <p v-if="movie.availability" class="m-0">Avaliable</p>
              <p v-else class="m-0">Not avaliable</p>
            </div>
            <hr class="card-divisor" />
            <p class="card-text">{{ movie.description }}</p>
          </div>
        </div>
      </movie-card>
    </div>
  </div>
</template>

<script src="../../Scripts/moviesList.js"></script>
