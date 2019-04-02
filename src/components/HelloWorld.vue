<template>
  <div>
    <table v-if="films">
      <li v-for="film in films" :key="film.episode_id">{{ film.title }}</li>
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
        this.loading = false;
        console.log(this.films);
      })
      .catch((error) => {
        console.error(error);
        this.loading = false;
      });
  },
};
</script>

<style scoped lang="scss">

</style>
