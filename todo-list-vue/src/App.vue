<script setup>
import Header from "./components/AppHeader.vue";
import TodoList from "./components/TodoList.vue";
</script>

<template>
  <div class="app">
    <Header />
    <TodoList />
  </div>
</template>

<style scoped>
.app {
  position: absolute;
  left: calc((100vw - 200px) / 2);
  top: calc((100vh - 300px) / 2);
  width: 200px;
  height: 300px;
  display: block;
  border: 1px solid #000;
  border-radius: 4px;
}
</style>
