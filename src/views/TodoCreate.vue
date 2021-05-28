<template>
  <div>
    <h1>Create a Todo, {{ user.name }}</h1>
    <form @submit.prevent="createTodo">
      <label>Select a category</label>
      <select v-model="todo.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
      <h3>Name & describe your todo</h3>
      <div class="field">
        <label>Title</label>
        <input
          v-model="todo.title"
          type="text"
          placeholder="Add a todo title"
        />
      </div>
      <div class="field">
        <label>Description</label>
        <input
          v-model="todo.description"
          type="text"
          placeholder="Add a description"
        />
      </div>
      <h3>Where is your todo?</h3>
      <div class="field">
        <label>Location</label>
        <input
          v-model="todo.location"
          type="text"
          placeholder="Add a location"
        />
      </div>
      <h3>When is your todo?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="todo.date" placeholder="Select a date" />
      </div>
      <div class="field">
        <label>Select a time</label>
        <select v-model="todo.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Datepicker from 'vuejs-datepicker'

function createTodo() {
  console.log('this.todo', this.todo)
  this.$store
    .dispatch('createTodo', this.todo)
    .then(() => {
      this.$router.push({
        name: 'todo-show',
        params: { id: this.todo.id }
      })
      //only clear event when create successful
      this.todo = this.createFreshTodoObject()
    })
    .catch(err => {
      console.log('There was a problem creating your todo', err)
    })
}

function createFreshTodoObject() {
  const user = this.$store.state.user
  const id = Math.floor(Math.random() * 10000000)

  return {
    id: id,
    user: user,
    category: '',
    organizer: user,
    title: '',
    description: '',
    date: '',
    time: '',
    assignees: []
  }
}

export default {
  computed: {
    ...mapGetters(['getTodoById']),
    ...mapState(['user', 'categories'])
  },
  data() {
    // create array of times values for use in component
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      times,
      todo: this.createFreshTodoObject()
    }
  },
  components: {
    Datepicker
  },
  methods: {
    createFreshTodoObject,
    createTodo
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
