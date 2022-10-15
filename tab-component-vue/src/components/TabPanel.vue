<script setup>
import { computed } from "vue";
const props = defineProps(["content", "show"]);

const classes = computed(() => {
  return `tabPanel ${props.show ? "" : "hidden"}`;
});
</script>

<template>
  <div :class="classes">{{ content }}</div>
</template>

<style scoped lang="scss">
.tabPanel {
  min-width: 300px;
  min-height: 200px;
  display: block;
  border: 1px solid #000;
  padding: 8px;
  &.hidden {
    display: none;
  }
}
</style>
