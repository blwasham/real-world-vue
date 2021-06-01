<template>
  <div>
    <h3>{{ title }} - {{ subTitle }}</h3>
    <TodoCard
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      :blablabla="true"
      :class="'foobar'"
    />
    <template v-if="hasPrevPage">
      <router-link
        :to="{ name: 'todo-list', query: { page: page - 1 } }"
        rel="prev"
        class="prev-btn"
      >
        Prev Page
      </router-link>
    </template>
    <template v-if="hasNextPage">
      <router-link
        :to="{ name: 'todo-list', query: { page: page + 1 } }"
        rel="next"
        class="next-btn"
      >
        Next Page
      </router-link>
    </template>
    <br /><br /><br /><br />
    <footer>
      <a href="#" @click="getInspiration"> Click here for inspiration</a>
    </footer>
  </div>
</template>

<script>
import TodoCard from '@/components/TodoCard.vue'
import { mapState } from 'vuex'
import { sample } from 'lodash'
function getInspiration(event) {
  // below prevents the html elements default action from happening
  event.preventDefault()
  const quotes = [
    'I always wanted to be somebody, but now I realize I should have been more specific',
    'If at first you don’t succeed, then skydiving definitely isn’t for you.',
    'I find television very educational. Every time someone turns it on, I go in the other room and read a book.',
    'All you need in this life is ignorance and confidence, and then success is sure',
    'If you don’t know where you are going, you might wind up someplace else.'
  ]

  alert(sample(quotes))
}

export default {
  components: {
    TodoCard
  },
  // lifecycle hook examples
  created() {
    console.log('created hook running')
    this.perPage = 3
    this.$store.dispatch('fetchTodos', {
      perPage: this.perPage,
      page: this.page
    })
  },
  mounted() {
    console.log('mounted hook running')
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    hasNextPage() {
      return this.todosTotal > this.page * this.perPage
    },
    hasPrevPage() {
      return this.page != 1
    },
    ...mapState(['todos', 'todosTotal'])
  },
  data() {
    return {
      subTitle: '<]:)'
    }
  },
  methods: {
    getInspiration
  },
  props: ['title']
}
</script>

<style scoped>
footer {
  background: #efefef;
  padding: 8px;
}
</style>
