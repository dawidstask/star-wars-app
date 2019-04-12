import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reviews: [],
  },
  getters: {
    REVIEWS: state => state.reviews,
  },
  mutations: {
    ADD_REVIEW(state, review) {
      state.reviews.push(review);
      console.log(this.state.reviews);
    },
  },
  actions: {

  },
});
