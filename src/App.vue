<template>
  <div id="app" >
    <add-todo></add-todo>
    <add-current-todo></add-current-todo >
  </div>
</template>
<script>
  import GetTodos from './components/GetTodos.vue'
  import TopTodos from './components/TopTodos.vue'
  export default {
    components: {
      addTodo :GetTodos,
      addCurrentTodo : TopTodos,
    }
  }
</script>
<style>
</style>
