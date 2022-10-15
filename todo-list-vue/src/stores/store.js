import { reactive } from "vue";

export const store = reactive({
  items: [],
  addItem(newItem) {
    this.items.push(newItem);
  },
});
