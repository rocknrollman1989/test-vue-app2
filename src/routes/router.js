import Vue from 'vue';
import Router from 'vue-router';
import TaskView from '../components/TaskView.vue';
import NoPageFound from '../components/NoPageFound.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'task-view',
      component: TaskView,
    },
    {
      path: '/*',
      name: 'no-page-found',
      component: NoPageFound,
    },
  ],
});
