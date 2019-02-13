<template>
  <div>
    <h1>Tasks Manager</h1>
    <input type="date" v-model="dateToView">
    <task-info></task-info>
    <a-button type="primary" shape="circle" icon="download" @click="openPopupToCreateTask"/>
    <popup-to-create-new-task v-show="popupToCreateTaskIsOpen" @closePopup="closePopup">
    </popup-to-create-new-task>
    {{tasksToView}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TaskInfo from './TaskInfo.vue';
import PopupToCreateNewTask from './PopupToCreateNewTask.vue';
import { TASK_STORE, FETCH_DATA } from '../store/tasksStore/taskStoreConstants';

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
      // tasksToView: null,
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
  computed: {
    ...mapGetters({
      tasksToView: 'taskStore/getAEvent',
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
