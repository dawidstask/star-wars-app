<template>
  <div class="reviews">
    <h1>Reviews</h1>
    <p>Currently you have <b>{{ reviews.length }}</b> reviews</p>

    <el-table v-if="reviews.length" :data="reviews">
      <el-table-column
        prop="movieTitle"
        label="Title">
      </el-table-column>
      <el-table-column
        prop="value"
        label="Review">
      </el-table-column>
    </el-table>
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
