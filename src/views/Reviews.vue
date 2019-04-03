<template>
  <div class="reviews">
    <h1>My reviews</h1>
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
import { Table, TableColumn } from 'element-ui';

export default {
  name: 'Reviews',
  components: {
    ElTable: Table,
    ElTableColumn: TableColumn,
  },
  computed: {
    ...mapGetters({
      reviews: 'getReviews',
    }),
  },
};
</script>
