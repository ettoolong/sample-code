<script setup>
import { ref } from "vue";
import TabLabel from "./TabLabel.vue";
import TabPanel from "./TabPanel.vue";

defineProps(["tabs"]);
const tabIndex = ref(0);
</script>

<template>
  <div class="tabContainer">
    <div class="tabHeader">
      <TabLabel
        v-for="(tab, index) of tabs"
        :key="tab.name"
        :text="tab.name"
        :selected="index === tabIndex"
        @click="tabIndex = index"
      />
    </div>
    <TabPanel
      v-for="(tab, index) of tabs"
      :key="tab.name"
      :show="tabIndex === index"
      :content="tab.content"
    />
  </div>
</template>

<style scoped lang="scss">
.tabContainer {
  display: flex;
  flex-direction: column;
}

.tabHeader {
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: 1px solid #000;
  transform: translateY(1px);
}
</style>
