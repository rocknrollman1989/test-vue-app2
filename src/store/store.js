import Vue from 'vue';
import Vuex from 'vuex';
import { taskStore } from './tasksStore/taskStore';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    taskStore,
  },
});

export default store;
