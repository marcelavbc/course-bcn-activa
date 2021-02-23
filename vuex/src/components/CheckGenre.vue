<template>
  <div v-if="showGenres" id="genresMovies" class="row genre">
    <div class="form-check col-5">
      <input
        type="checkbox"
        class="custom-control-input"
        id="comedy"
        value="Comedy"
        v-model="getMoviesGenres"
        @change="searchMovie"
      />
      <label class="custom-control-label" for="comedy">Comedy</label>
    </div>
    <div class="form-check col-5">
      <input
        type="checkbox"
        class="custom-control-input"
        id="documentary"
        value="Documentary"
        v-model="getMoviesGenres"
        @change="searchMovie"
      />
      <label class="custom-control-label" for="documentary">Documentary</label>
    </div>
    <div class="form-check col-5">
      <input
        type="checkbox"
        class="custom-control-input"
        id="action"
        value="Action"
        v-model="getMoviesGenres"
        @change="searchMovie"
      />
      <label class="custom-control-label" for="action">Action</label>
    </div>
    <div class="form-check col-5">
      <input
        type="checkbox"
        class="custom-control-input"
        id="sci-Fi"
        value="Sci-Fi"
        v-model="getMoviesGenres"
        @change="searchMovie"
      />
      <label class="custom-control-label" for="sci-Fi">Sci-Fi</label>
    </div>
    <div class="form-check col-5">
      <input
        type="checkbox"
        class="custom-control-input"
        id="war"
        value="War"
        v-model="getMoviesGenres"
        @change="searchMovie"
      />
      <label class="custom-control-label" for="war">War</label>
    </div>
    <div class="form-check col-5">
      <input
        type="checkbox"
        class="custom-control-input"
        id="romance"
        value="Romance"
        v-model="getMoviesGenres"
        @change="searchMovie"
      />
      <label class="custom-control-label" for="romance">Romance</label>
    </div>
    <div class="form-check col-5">
      <input
        type="checkbox"
        class="custom-control-input"
        id="drama"
        value="Drama"
        v-model="getMoviesGenres"
        @change="searchMovie"
      />
      <label class="custom-control-label" for="drama">Drama</label>
    </div>
    <div class="form-check col-5">
      <input
        type="checkbox"
        class="custom-control-input"
        id="musical"
        value="Musical"
        v-model="getMoviesGenres"
        @change="searchMovie"
      />
      <label class="custom-control-label" for="musical">Musical</label>
    </div>
    <div class="form-check col-5">
      <input
        type="checkbox"
        class="custom-control-input"
        id="crime"
        value="Crime"
        v-model="getMoviesGenres"
        @change="searchMovie"
      />
      <label class="custom-control-label" for="crime">Crime</label>
    </div>
    <div class="form-check col-5">
      <input
        type="checkbox"
        class="custom-control-input"
        id="horror"
        value="Horror"
        v-model="getMoviesGenres"
        @change="searchMovie"
      />
      <label class="custom-control-label" for="horror">Horror</label>
    </div>
    <div class="form-check col-5">
      <input
        type="checkbox"
        class="custom-control-input"
        id="animation"
        value="Animation"
        v-model="getMoviesGenres"
        @change="searchMovie"
      />
      <label class="custom-control-label" for="animation">Animation</label>
    </div>
    <div class="form-check col-5">
      <input
        type="checkbox"
        class="custom-control-input"
        id="western"
        value="Western"
        v-model="getMoviesGenres"
        @change="searchMovie"
      />
      <label class="custom-control-label" for="western">Western</label>
    </div>
  </div>
</template>

<script src="../Scripts/checkGenre.js"></script>

