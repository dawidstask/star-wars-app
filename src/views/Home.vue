<template>
  <div class="home">
    <img alt="Star Wars logo" src="../assets/star-wars-logo.png">
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
