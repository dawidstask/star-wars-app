<template>
  <div>
    <el-input
      v-if="!loading && filterData"
      v-model="search"
      size="mini"
      placeholder="Type to search"/>

    <el-table
      v-loading="loading"
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
  </div>
</template>

<script>
function checkIfIncludes(value, search) {
  return value.toLowerCase().includes(search.toLowerCase());
}

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
    filterData: ({ films, search }) => {
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
    getMovieId(movieUrl) {
      return Number((/[0-9]/g).exec(movieUrl));
    },
    redirectToMovie(val) {
      this.$router.push({ name: 'movie', params: { id: this.getMovieId(val.url) } });
    },
  },
};
</script>

<style lang="scss">
  .home .hover-row {
    cursor: pointer;
  }
  .home .el-input--mini {
    display: flex;
    width: 300px;
  }
</style>
