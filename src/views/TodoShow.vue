<template>
  <div>
    <div class="event-header">
      <span class="timestamp-text">@{{ todo.time }} on {{ todo.date }}</span>
      <h3 class="title">{{ todo.title }}</h3>
      <b>Organized by: {{ todo.organizer ? todo.organizer.name : '' }}</b>
      <br />
      <b>Category: {{ todo.category }}</b>
      <br />
      <b>Location: {{ todo.location }}</b>
    </div>
    <h5>Event details</h5>
    <p>{{ todo.description }}</p>

    <span>
      Assigned To:
      <span v-for="assignee in todo.assignees" :key="assignee.name">
        <BaseIcon :name="assignee.icon">{{ assignee.name }}</BaseIcon>
      </span>
    </span>

    <!--<TodoAssignees :assignees="todo.assignees" />-->
  </div>
</template>

<script>
import TodoService from '@/services/TodoService.js'
// import TodoAssignees from '@/components/TodoAssignees.vue'
export default {
  props: ['id'],
  data() {
    return {
      todo: {}
    }
  },
  created() {
    TodoService.getTodo(this.id)
      .then(response => {
        this.todo = response.data
      })
      .catch(error => {
        console.log('Error: ', error.response)
      })
  }
  // components: {
  //   TodoAssignees
  // }
}
</script>
<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
