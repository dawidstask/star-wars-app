import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reviews: [],
  },
  getters: {
    getReviews: state => state.reviews,
  },
  mutations: {
    addReview(state, review) {
      Vue.set(state, 'reviews', review);
      console.log(this.state.reviews);
    },
  },
  actions: {

  },
});
