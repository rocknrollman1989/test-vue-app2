import Vue from 'vue';
import Vuex from 'vuex';
import taskManagerApp from '../../fb/fbConfig';
import { FETCH_DATA, ADD_NEW_EVENT } from './taskStoreConstants';

const collectionName = 'tasks';

Vue.use(Vuex);

export const state = {
  dayEvents: [],
};

export const mutations = {
  addEventsToStore: (state, payload) => {
    state.dayEvents = [...payload];
  },

};

export const actions = {
// adding needed events
  [FETCH_DATA]: ({ commit }, dateToView) => {
    const dayEventsArray = [];
    taskManagerApp.collection(collectionName).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((data) => {
          if (data.data().creation_date === dateToView) {
            const unicId = data.id;
            const eventToView = {
              ...data.data(),
              unicId,
            };
            dayEventsArray.push(eventToView);
          }
        });
        commit('addEventsToStore', dayEventsArray);
      });
  },
  [ADD_NEW_EVENT]: ({commit}, eventData) => {
    const eventDataToSet = {
      id: new Date().toISOString(),
      name: eventData.taskName,
      creation_date: eventData.creation_date,
      spent_time: '',
      is_completed: false,
      project_id: eventData.project_id,
      priority_id: eventData.priority_id,
    };
    taskManagerApp.collection(collectionName).doc().set({
      ...eventDataToSet,
    });
  },
};

export const getters = {
  getAEvent: (state) => {
    return state.dayEvents.filter((event) => {
      return event.is_completed === false;
    });
  },
};


export const taskStore = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
