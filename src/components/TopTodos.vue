<template>
  <div id="current-todos" class="container">
    <ul class="list-group">
      <br>
      <li class="list-group-item list-group-item-action list-group-item-info " v-for="todo in todos">
        {{todo.body}}
        <div class="form-check "  @click="check_todo">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
        </div>
        <div class="btn-group float-right clearfix">
          <button type="button" @click="remove(todo)" class="btn btn-danger btn-sm  ">
            <span class="glyphicon glyphicon-remove-circle"></span> Remove
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    methods: {
      remove(todo) {
        this.$store.dispatch('removeTodo', todo),
          this.$store.dispatch('clearTodo')
      },
      check_todo: function (event) {
        if (event) {
          alert("Great you did it ! My Congratulations");
        }

      }

    },
    computed: {
      todos() {
        return this.$store.getters.todos
      }
    }

  }
</script>

<style>


</style>
