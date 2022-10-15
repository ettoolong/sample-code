<script setup>
import { store } from "@/stores/store.js";
</script>

<template>
  <div className="todoList">
    <div v-for="(item, index) of store.items" :key="`${item}.${index}`">
      {{ item }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.todoList {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
}
</style>
