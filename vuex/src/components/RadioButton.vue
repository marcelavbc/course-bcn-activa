<template>
  <div class="row">
    <div class="col-12 radio mb-1">
      <div class="custom-control custom-radio">
        <input
          type="radio"
          id="allMovies"
          name="customRadio"
          class="custom-control-input"
          @change="searchMovie"
          checked="checked"
          value="all"
          v-model="inputRadio"
        />
        <label class="custom-control-label" for="allMovies">All movies</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          id="avaliableMovies"
          name="customRadio"
          class="custom-control-input"
          @change="searchMovie"
          value="avaliable"
          v-model="inputRadio"
        />
        <label class="custom-control-label" for="avaliableMovies"
          >Avaliable Movies</label
        >
      </div>
    </div>
  </div>
</template>

<script src="../Scripts/radioButton.js"></script>
