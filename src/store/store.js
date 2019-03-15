import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [

]},
mutations: {
  GET_TODO(state, todo){
    state.newTodo = todo
  },
  ADD_TODO(state){
    state.todos.push({
      body: state.newTodo,
      completed: false
    })
  },
  REMOVE_TODO(state, todo){
    var todos = state.todos;
    todos.splice(todos.indexOf(todo), 1)
  },
  COMPLETE_TODO(state, todo){
    todo.completed = !todo.completed
  },
  CLEAR_TODO(state){
    state.newTodo = ''
  }
},
  getters: {
    newTodo: state => state.newTodo,
    todos: state => state.todos.filter((todo) =>
    {return !todo.completed}),
},
actions: {
  getTodo({commit}, todo) {
    commit('GET_TODO', todo)
  },
  addTodo({commit}) {
    commit('ADD_TODO')
  },
  removeTodo({commit}, todo) {
    commit('REMOVE_TODO', todo)
  },
  completeTodo({commit}, todo){
    commit('COMPLETE_TODO', todo)
  },
  clearTodo({commit}) {
    commit('CLEAR_TODO')
  }
}
});

