<template>
  <div class="movie">
    <h1>This is a movie page</h1>
    <div v-if="film">
      <p>title: {{ film.title }}</p>
      <p>director: {{ film.director }}</p>
      <p>producer: {{ film.producer }}</p>
      <p>release date: {{ film.release_date }}</p>
      <p>opening crawl: {{ film.opening_crawl }}</p>

      <br>
      <p>Did you like the movie?</p>
      <textarea v-model="review" placeholder="Leave a review..." rows="4" cols="50"></textarea>
      <p>
        <button @click="submitReview()">Submit</button>
      </p>
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
      review: '',
      movieId: this.$route.params.id,
    };
  },
  mounted() {
    this.loading = true;
    this.$axios.get(`https://swapi.co/api/films/${this.movieId}`)
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
  methods: {
    submitReview() {
      this.$store.commit(
        'addReview',
        {
          movieId: this.movieId,
          movieTitle: this.film.title,
          value: this.review,
        },
      );
      this.review = '';
    },
  },
};
</script>
