<template>
  <div>
    <el-card class="box-card" v-if="!loading">
      <div slot="header" class="clearfix">
        <span>This is a movie page</span>
      </div>
      <div v-if="film">
        <p>Title: <i>{{ film.title }}</i></p>
        <p>Director: <i>{{ film.director }}</i></p>
        <p>Producer: <i>{{ film.producer }}</i></p>
        <p>Release date: <i>{{ film.release_date }}</i></p>
        <p>Opening crawl: <i>{{ film.opening_crawl }}</i></p>
      </div>
    </el-card>

    <template v-if="film">
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
    </template>

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
      review: null,
      movieId: this.$route.params.id,
    };
  },
  mounted() {
    this.loading = true;
    // TODO: reduce calling api by taking it from store
    this.$axios.get(`https://swapi.co/api/films/${this.movieId}`)
      .then((res) => {
        this.film = res.data;
        this.loading = false;
      })
      .catch((error) => {
        this.$notify.error({
          title: 'Error',
          message: error,
          type: 'error',
        });
        this.loading = false;
      });
  },
  methods: {
    submitReview() {
      if (!this.review) {
        return;
      }

      this.$notify.success({
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
<style lang="scss">
  .box-card p {
    text-align: left;
  }
</style>
