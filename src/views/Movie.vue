<template>
  <div class="movie">
    <h1>This is a movie page</h1>
    <div v-if="film">
      <p>title: {{ film.title }}</p>
      <p>director: {{ film.director }}</p>
      <p>producer: {{ film.producer }}</p>
      <p>release date: {{ film.release_date }}</p>
      <p>opening crawl: {{ film.opening_crawl }}</p>
    </div>
    <p v-if="loading">Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  data() {
    return {
      film: null,
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    this.$axios.get(`https://swapi.co/api/films/${this.$route.params.id}`)
      .then((res) => {
        this.film = res.data;
        console.log(this.film);
        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
        this.loading = false;
      });
  },
};
</script>
