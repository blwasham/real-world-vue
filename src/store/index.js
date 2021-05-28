import Vue from 'vue'
import Vuex from 'vuex'
import TodoService from '@/services/TodoService'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Bryan Washam' },
    categories: [
      'Cleaning',
      'Coaching',
      'Financial',
      'Garage',
      'Garden',
      'Inside',
      'Kids',
      'Outside',
      'Projects',
      'School',
      'Work',
      'Yard'
    ],
    todos: [],
    todosTotal: 0
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo)
    },
    SET_TODOS(state, todos) {
      state.todos = todos
    },
    SET_TODOS_TOTAL(state, todosTotal) {
      state.todosTotal = todosTotal
    }
  },
  actions: {
    createTodo({ commit }, todo) {
      return TodoService.postTodo(todo).then(() => {
        //only commit when successful post
        commit('ADD_TODO', todo)
      })
    },
    fetchTodos({ commit }, { perPage, page }) {
      TodoService.getTodos(perPage, page)
        .then(response => {
          commit('SET_TODOS_TOTAL', parseInt(response.headers['x-total-count']))
          commit('SET_TODOS', response.data)
        })
        .catch(error => {
          console.log('Error' + error.response)
        })
    }
  },
  getters: {
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id)
    }
  }
})
