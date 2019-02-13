<template>
  <div class="new-task-popup">
    <h2>Create a new Task;)</h2>
    <form>
      <label for="taskName">Enter task name</label>
      <input type="text" placeholder="Name" id="taskName" v-model="taskInfo.taskName">
      <select v-model="taskInfo.project_id">
        <option disabled value="">ID Project</option>
        <option>Project 1</option>
        <option>Project 2</option>
      </select>
      <input type="date" v-model="taskInfo.creation_date">
      <select v-model="taskInfo.priority_id">
        <option disabled value="">Priority</option>
        <option>high</option>
        <option>medium</option>
        <option>low</option>
      </select>
      <a-button type="primary" @click="createANewTask">Create</a-button>
      <a-button @click="closePopup">Cancel</a-button>
    </form>
  </div>
</template>

<script>
import { TASK_STORE, ADD_NEW_EVENT } from '../store/tasksStore/taskStoreConstants';

export default {

  data() {
    return {
      taskInfo: {
        taskName: '',
        project_id: '',
        creation_date: '',
        priority_id: '',
      },
    };
  },
  methods: {
    closePopup() {
      this.$emit('closePopup');
    },
    createANewTask() {
      const { taskName, project_id, creation_date, priority_id } = this.taskInfo;
      const taskData = {
        taskName,
        project_id,
        creation_date,
        priority_id,
      };
      this.$store.dispatch(TASK_STORE + ADD_NEW_EVENT, taskData);
    },
  },
};
</script>

<style lang="scss" scoped>
.new-task-popup{
  width: 50%;
}
  form{
    display: flex;
    flex-direction: column;
  }
</style>
