<template>
  <div>
    <table v-if="films">
      <li v-for="film in films" :key="film.episode_id">
        {{ film.title }}
        <router-link :to="{ name: 'movie', params: { id: getMovieId(film.url) }}">
          Movie
        </router-link>
      </li>
    </table>
    <p v-if="loading">Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      films: null,
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    this.$axios.get('https://swapi.co/api/films')
      .then((res) => {
        this.films = res.data.results;
        console.log(this.films);
        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
        this.loading = false;
      });
  },
  methods: {
    getMovieId(movieUrl) {
      return Number((/[0-9]/g).exec(movieUrl));
    },
  },
};
</script>

<style scoped lang="scss">
</style>
