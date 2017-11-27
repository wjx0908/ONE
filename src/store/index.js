import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/home.js';
import read from './modules/read.js';
import music from './modules/music.js';
import movie from './modules/movie.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    read,
    music,
    movie
  },
  
});
