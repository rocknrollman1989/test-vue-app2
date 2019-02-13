<template>
  <div>
    <h1>Tasks Manager</h1>
    <input type="date" v-model="dateToView">
    <a-button type="primary" shape="circle" loading v-show="isFetching" />
    <p v-show="fetchError">{{errorFetch}}</p>
    <task-info></task-info>
    <a-button type="primary" shape="circle" icon="download" @click="openPopupToCreateTask"/>
    <popup-to-create-new-task v-show="popupToCreateTaskIsOpen" @closePopup="closePopup">
    </popup-to-create-new-task>
    {{tasksToView}}
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import TaskInfo from './TaskInfo.vue';
import PopupToCreateNewTask from './PopupToCreateNewTask.vue';
import { TASK_STORE, FETCH_DATA, GET_EVENTS_FROM_STORE } from '../store/tasksStore/taskStoreConstants';

export default {
  name: 'task-view',
  components: {
    'task-info': TaskInfo,
    'popup-to-create-new-task': PopupToCreateNewTask,
  },
  data() {
    return {
      popupToCreateTaskIsOpen: false,
      dateToView: '',
      errorFetch: 'Sorry, we can"t load Tasks:(',
    };
  },
  methods: {
    openPopupToCreateTask() {
      this.popupToCreateTaskIsOpen = true;
    },
    closePopup() {
      this.popupToCreateTaskIsOpen = false;
    },
  },
  created() {
    this.dateToView = new Date().toISOString().slice(0, 10);
  },
  computed: {
    ...mapGetters({
      tasksToView: TASK_STORE + GET_EVENTS_FROM_STORE,
    }),
    ...mapState(TASK_STORE, {
      isFetching: state => state.fetchData,
      fetchError: state => state.fetchError,
    }),
  },
  watch: {
    dateToView() {
      const { dateToView } = this;
      this.$store.dispatch(TASK_STORE + FETCH_DATA, dateToView);
    },
  },
};

</script>


<style lang="sass" scoped>

</style>
