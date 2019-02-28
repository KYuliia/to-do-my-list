<template>
  <div id="app" >
    <add-todo></add-todo>
    <add-current-todo></add-current-todo >
    <add-completed-todo></add-completed-todo>
  </div>
</template>
<script>
  import GetTodo from './components/GetTodos.vue'
  import TopTodos from './components/TopTodos.vue'
  import CompletedTodos from './components/CompletedTodos.vue'
  export default {
    components: {
      addTodo :GetTodo,
      addCurrentTodo : TopTodos,
      addCompletedTodo:CompletedTodos
    }
  }
</script>
<style>
</style>
