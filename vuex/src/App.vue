<template>
  <movies-list></movies-list>

</template>

<script>
import MoviesList from './components/movies/MoviesList'

export default {
  
  name: "App",
  components: {MoviesList},
  // mounted(){
  //   this.$store.state.moviesFiltered = this.$store.state.movies;
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
