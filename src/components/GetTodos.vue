<template>
  <div id="get-todo" class="container">
    <br>
    <input class="list-group-item list-group-item-action list-group-item-warning"
           :value="newTodo"
           @change="getTodo"
           placeholder="To Do ...">
    <br>
    <button type="button" class="btn btn-info" @click="addTodo">Add Todo</button>
  </div>
</template>
<script>
  export default{
    methods: {
      getTodo(el){
        this.$store.dispatch('getTodo', el.target.value)
      },
      addTodo(){
        this.$store.dispatch('addTodo')
        this.$store.dispatch('clearTodo')
      }
    },
    computed: {
      newTodo(){
        return this.$store.getters.newTodo
      }
    }
  }
</script>

