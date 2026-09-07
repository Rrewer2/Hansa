<script setup>
import { text } from "../services/text";
import SelectorTree from "./SelectorTree.vue";

const { selector } = defineProps(["selector"]);

const setSelected = (item, value) => {
  if (!item.children?.length) {
    item.selected = value;
    return;
  }

  item.children.forEach((child) => setSelected(child, value));
};

const areAllSelected = (item) => {
  if (!item.children?.length) {
    return !!item.selected;
  }

  return item.children.every((child) => areAllSelected(child));
};

const toggleSelected = (item) => {
  const newValue = !areAllSelected(item);
  setSelected(item, newValue);
};
</script>

<template>
  <div class="tree mt-20" v-for="item in selector" :key="item.name">
    <div class="tree-item">
      <div class="tree-row">
        <input
          type="checkbox"
          v-if="item.children?.length"
          class="tree-toggle"
          :checked="areAllSelected(item)"
          @click="toggleSelected(item)"
          :title="areAllSelected(item) ? 'Odznacz wszystko' : 'Zaznacz wszystko'"
        />

        <span v-else class="tree-spacer"></span>
        <input v-if="!item.children?.length" v-model="item.selected" type="checkbox" />

        <span
          v-if="item.children?.length"
          class="tree-name"
          :title="item.open ? 'Kliknij, aby zwinąć menu' : 'Kliknij, aby rozwinąć menu'"
          @click="item.open = !item.open"
        >
          {{ text(item.name) }}
        </span>

        <span v-else>
          {{ text(item.name) }}
        </span>
      </div>

      <div v-if="item.open && item.children?.length" class="tree-children">
        <SelectorTree v-for="child in item.children" :key="child.name" :selector="[child]" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.tree {
  font-family: Arial, sans-serif;
  font-size: 14px;
}

.tree-row {
  display: flex;
  align-items: center;
  height: 26px;
}

.tree-toggle {
  width: 18px;
  height: 18px;
  padding: 0;
  margin-right: 4px;
  line-height: 14px;
  font-size: 14px;
}

.tree-spacer {
  width: 22px;
  border-top: 2px dotted #000000;
}

.tree-row input {
  margin: 0 10px 0 0;
}

.tree-name {
  cursor: pointer;
}

.tree-name:hover {
  text-decoration: underline;
}

.tree-children {
  margin-left: 20px;
  border-left: 2px dotted #000000;
  padding-left: 2px;
}
</style>
