<template>
  <router-link
    class="event-link"
    :to="{
      name: 'todo-show',
      params: { id: todo.id }
    }"
    ><pre>TEST {{ $attrs }}</pre>
    <div class="event-card -shadow">
      <span class="timestamp-text"> @{{ todo.time }} on {{ todo.date }} </span>
      <h4 class="title">{{ todo.title }}</h4>
      <p>{{ todo.description }}</p>

      <!-- <span>
        Assigned To:

        <span v-for="assignee in todo.assignees" :key="assignee.name">
          <BaseIcon :name="assignee.icon">{{ assignee.name }}</BaseIcon>
        </span>
      </span> -->

      <TodoAssignees :assignees="todo.assignees" />
    </div>
  </router-link>
</template>

<script>
// allows component to be imported into other location
import TodoAssignees from '@/components/TodoAssignees.vue'
export default {
  props: {
    todo: Object
  },
  components: {
    TodoAssignees
  }
}
</script>

<!-- scoped means its only for this component -->
<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
