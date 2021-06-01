<template>
  <span>
    <strong>Assigned To:

    <span v-for="assignee in assignees" :key="assignee.name">
      <!-- example of global component -->
      <BaseIcon :name="assignee.icon">
      
      {{ assignee.name }}</BaseIcon>
    </span>
  </span>
</template>
<script>
export default {
  props: {
    assignees: Array
  }
  // notice BaseIcon is not listed here as a component
  // it has been registered as a global component in main.js
}
</script>
