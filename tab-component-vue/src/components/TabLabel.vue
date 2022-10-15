<script setup>
defineProps({
  selected: { type: Boolean, required: true },
  text: { type: String, required: true },
});
const emit = defineEmits(["onClick"]);

const click = () => {
  emit("onClick");
};
</script>

<template>
  <div :class="`tabLabel ${selected ? 'selected' : ''}`" @click="click">
    {{ text }}
  </div>
</template>

<style scoped lang="scss">
.tabLabel {
  position: relative;
  border: 1px solid #000;
  border-radius: 6px 6px 0px 0px;
  border-bottom: 0px;
  padding: 8px;
  cursor: pointer;
  &.selected::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: white;
    bottom: -1px;
    left: 0px;
  }
}
</style>
