import Vue from 'vue';
import Vuex from 'vuex';
import taskManagerApp from '../../fb/fbConfig';
import { FETCH_DATA, ADD_NEW_EVENT, ADD_EVENTS_TO_STORE, FETCH_DATA_PROCESS, FETCH_DATA_PROCESS_IS_DONE, FETCH_ERROR, GET_EVENTS_FROM_STORE } from './taskStoreConstants';

const collectionName = 'tasks';

Vue.use(Vuex);

export const state = {
  dayEvents: [],
  fetchData: false,
  fetchError: false,
};

export const mutations = {
  [ADD_EVENTS_TO_STORE]: (state, payload) => {
    state.dayEvents = [...payload];
  },
  [FETCH_DATA_PROCESS]: (state) => {
    state.fetchData = true;
  },
  [FETCH_DATA_PROCESS_IS_DONE]: () => {
    state.fetchData = false;
  },
  [FETCH_ERROR]: () => {
    state.fetchError = true;
  },
};

export const actions = {
// adding needed events
  [FETCH_DATA]: ({ commit }, dateToView) => {
    commit(FETCH_DATA_PROCESS);
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
        commit(ADD_EVENTS_TO_STORE, dayEventsArray);
        commit(FETCH_DATA_PROCESS_IS_DONE);
      })
      .catch(() => {
        commit(FETCH_ERROR);
      });
  },
  [ADD_NEW_EVENT]: ({ commit }, eventData) => {
    // create an object to set in Firebase
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
  [GET_EVENTS_FROM_STORE]: (state) => {
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
