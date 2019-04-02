<template>
  <div class="about">
    <h1>This is an about page</h1>
    reviews: {{reviews.length}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      reviews: 'getReviews',
    }),
  },
};
</script>
