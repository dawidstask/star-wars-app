<template>
  <div class="review-form">
    <p>Did you like the movie?</p>
    <el-input
      type="textarea"
      placeholder="Leave a review..."
      v-model="review"
      :rows="4">
    </el-input>
    <el-button @click="submitReview()">Submit</el-button>
  </div>
</template>

<script>
export default {
  name: 'ReviewForm',
  props: {
    id: Number,
    title: String,
  },
  data() {
    return {
      review: null,
    };
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
        'ADD_REVIEW',
        {
          movieId: this.id,
          movieTitle: this.title,
          value: this.review,
        },
      );
      this.review = '';
    },
  },
};
</script>

<style lang="scss">
  .review-form {
    margin-top: 30px;

    button {
      margin-top: 10px;
    }
  }
</style>
