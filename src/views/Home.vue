<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <MoviesTable/>
  </div>
</template>

<script>
// @ is an alias to /src
import MoviesTable from '@/components/MoviesTable.vue';

export default {
  name: 'home',
  components: {
    MoviesTable,
  },
};
</script>
