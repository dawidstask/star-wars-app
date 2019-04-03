<template>
  <div class="reviews">
    <h1>My reviews</h1>
    <p>Currently you have {{ reviews.length }} reviews</p>
    <table v-if="reviews.length">
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Review</th>
      </tr>
      <tr v-for="(review, index) in reviews" :key="index">
        <td>{{ review.movieId }}</td>
        <td>{{ review.movieTitle }}</td>
        <td>{{ review.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Reviews',
  computed: {
    ...mapGetters({
      reviews: 'getReviews',
    }),
  },
};
</script>
