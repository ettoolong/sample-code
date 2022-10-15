<script setup>
import { ref } from "vue";
import TabContainer from "./components/TabContainer.vue";

const tabs = ref([
  { name: "tab1", content: "tab 1 content" },
  { name: "tab2", content: "tab 2 content" },
  { name: "tab3", content: "tab 3 content" },
  { name: "tab4", content: "tab 4 content" },
]);
</script>

<template>
  <div class="App">
    <TabContainer :tabs="tabs" />
  </div>
</template>

<style scoped>
.App {
  width: fit-content;
  padding: 20px;
}
</style>
