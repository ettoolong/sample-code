<script setup>
import { ref } from "vue";
import { store } from "@/stores/store.js";

const input = ref(null);

const onAdd = () => {
  store.addItem(input.value.value);
  input.value.value = "";
};
</script>

<template>
  <div class="header">
    <input ref="input" />
    <button class="button" @click="onAdd">+</button>
  </div>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #000;
  .button {
    width: 20px;
  }
}
</style>
