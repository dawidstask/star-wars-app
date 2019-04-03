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
      <el-input
        type="textarea"
        placeholder="Leave a review..."
        v-model="review"
        :rows="4">
      </el-input>
      <p>
        <el-button @click="submitReview()">Submit</el-button>
      </p>
    </div>
    <p v-if="loading">Loading...</p>
  </div>
</template>

<script>
import { Input, Button, Notification } from 'element-ui';

export default {
  name: 'Movie',
  components: {
    ElInput: Input,
    ElButton: Button,
  },
  data() {
    return {
      film: null,
      loading: false,
      review: null,
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
      if (!this.review) {
        return;
      }

      Notification.success({
        title: 'Success',
        message: 'Thanks for adding a review',
        type: 'success',
      });

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
