<template>
  <div id="app">
    <task-view></task-view>
  </div>
</template>

<script>
import TaskView from './components/TaskView.vue';

export default {
  name: 'app',
  components: {
    'task-view': TaskView,
  },
  created() {
    console.log(this.$store.dispatch('fetchTask'));
    // this.$store.
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
