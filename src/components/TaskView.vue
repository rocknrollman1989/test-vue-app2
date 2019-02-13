<template>
  <div>
    <h1>Tasks Manager</h1>
    <task-info></task-info>
    <a-button type="primary" shape="circle" icon="download" @click="openPopupToCreateTask"/>
    <popup-to-create-new-task v-show="popupToCreateTaskIsOpen" @closePopup="closePopup">
    </popup-to-create-new-task>
  </div>
</template>

<script>
import TaskInfo from './TaskInfo.vue';
import PopupToCreateNewTask from './PopupToCreateNewTask.vue';

export default {
  name: 'task-view',
  components: {
    'task-info': TaskInfo,
    'popup-to-create-new-task': PopupToCreateNewTask,
  },
  data() {
    return {
      popupToCreateTaskIsOpen: false,
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
};

</script>


<style lang="sass" scoped>

</style>
