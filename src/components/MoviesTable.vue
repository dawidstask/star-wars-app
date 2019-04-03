<template>
  <div>
    <template v-if="films">
      <el-input
        v-model="search"
        size="mini"
        placeholder="Type to search"/>

      <el-table
        :data="filterData"
        highlight-current-row
        @current-change="redirectToMovie">
        <el-table-column
          prop="title"
          label="Title"
          sortable>
        </el-table-column>
        <el-table-column
          prop="director"
          label="Director"
          sortable>
        </el-table-column>
        <el-table-column
          label="Actions">
          Show more info
        </el-table-column>
      </el-table>
    </template>
    <p v-if="loading">Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'MoviesTable',
  data() {
    return {
      films: null,
      loading: false,
      search: '',
    };
  },
  computed: {
    filterData: ({ films, checkIfIncludes, search }) => {
      if (!films) {
        return null;
      }

      return films.filter(data => !search
        || checkIfIncludes(data.title, search)
        || checkIfIncludes(data.director, search));
    },
  },
  mounted() {
    this.loading = true;
    this.$axios.get('https://swapi.co/api/films')
      .then((res) => {
        this.films = res.data.results;
        console.log(this.films);
        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
        this.loading = false;
      });
  },
  methods: {
    getMovieId(movieUrl) {
      return Number((/[0-9]/g).exec(movieUrl));
    },
    redirectToMovie(val) {
      this.$router.push({ name: 'movie', params: { id: this.getMovieId(val.url) } });
    },
    checkIfIncludes(value, search) {
      return value.toLowerCase().includes(search.toLowerCase());
    },
  },
};
</script>

<style scoped lang="scss">
</style>
