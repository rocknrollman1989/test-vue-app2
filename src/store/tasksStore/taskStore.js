import Vue from 'vue';
import Vuex from 'vuex';
import taskManagerApp from '../../fb/fbConfig';
import { FETCH_DATA, ADD_NEW_EVENT } from './taskStoreConstants';


Vue.use(Vuex);

export const state = {

};

export const mutations = {

};

export const actions = {

  [FETCH_DATA]: () => {
    taskManagerApp.collection('tasks').get()
      .then((data) => {
        console.log(data.docs);
      });
  },
  [ADD_NEW_EVENT]: ({commit}, eventData) => {
    console.log(eventData);
  },
};

export const getters = {

};


export const taskStore = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

// {
//   "id": 12,
//   "name": "12",
//   "creation_date": "",
//   "spent_time": "",
//   "is_completed": false,
//   "project_id": "",
//   "priority_id": 0
// }
