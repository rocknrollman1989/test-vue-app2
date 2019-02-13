<template>
  <div id="app">
  <router-view>
    <task-view></task-view>
  </router-view>
  </div>
</template>

<script>
import TaskView from './components/TaskView.vue';
import { TASK_STORE, FETCH_DATA } from './store/tasksStore/taskStoreConstants';

export default {
  name: 'app',
  components: {
    'task-view': TaskView,
  },
  created() {
    this.$store.dispatch(TASK_STORE + FETCH_DATA);
  },
};

</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
