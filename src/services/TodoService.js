import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTodos(perPage, page) {
    return apiClient.get('/todos?_limit=' + perPage + '&_page=' + page)
  },
  getTodo(id) {
    return apiClient.get('todos/' + id)
  },
  postTodo(todo) {
    return apiClient.post('/todos', todo)
  }
}
