<template>
  <main>
    <NuxtLink to="/">Go to home</NuxtLink>
    <ul>
      <li v-for="todo in todos" :key="todo.text">
        <input :checked="todo.done" @change="toggle(todo)" type="checkbox" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(todo)">Remove</button>
      </li>
      <li>
        <input
          @keyup.enter="addTodo"
          type="text"
          placeholder="Whats is your want to do ?"
        />
      </li>
    </ul>
  </main>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    todos() {
      return this.$store.state.todos.list;
    },
  },
  methods: {
    addTodo(e) {
      this.$store.commit("todos/add", e.target.value);
      e.target.value = "";
    },
    removeTodo(todo) {
      this.$store.commit("todos/remove", { todo });
    },
    ...mapMutations({
      toggle: "todos/toggle",
    }),
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>