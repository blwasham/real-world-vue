import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '../views/TodoList.vue'
import TodoShow from '../views/TodoShow.vue'
import TodoCreate from '../views/TodoCreate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todo-list',
    component: TodoList,
    props: { title: 'Todo List' }
  },
  //dynamic named route example
  {
    path: '/todo/:id',
    name: 'todo-show',
    component: TodoShow,
    props: true
  },
  {
    path: '/todo/create',
    name: 'todo-create',
    component: TodoCreate
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
