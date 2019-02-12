import Vue from 'vue';
import Vuex from 'vuex';
import taskManagerApp from '../../fb/fbConfig';

// const taskStore = firebase.database('tasks');
// let db = app.database();
// let booksRef = db.ref('tasks')


Vue.use(Vuex);

export const state = {
  a:1
};

export const mutations = {

};

export const actions = {

  fetchTask() {
    taskManagerApp.collection('tasks').get()
    .then((data) => {
      console.log(data.docs[0].id)
    })
  }
};

export const getters = {

};


export const taskStore = {
  state,
  mutations,
  actions,
  getters,
};
