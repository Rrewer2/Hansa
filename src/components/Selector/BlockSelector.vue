<script setup>
import { ref } from "vue";
import { blockData } from "../../services/data";
import { getTextWithSpace } from "../../services/functions";
import { links } from "../../services/links";
import { text } from "../../services/text";
import CopyText from "./CopyText.vue";
import InputItem from "../InputItem.vue";

const { project, meta, order, powerUNIT, i } = defineProps([
  "project",
  "meta",
  "order",
  "powerUNIT",
  "i",
]);
console.log(powerUNIT.unit);
const filteredBlocks = () => {
  if (!meta.pumpType) return [];
  return blockData.filter((item) => {
    return (
      item.stations === powerUNIT.unit.length &&
      (item.cetop === 3 && powerUNIT.unit.Q < 40 || item.cetop === 5 && powerUNIT.unit.Q > 40)
      item.pressure > powerUNIT.unit.p + 20
    );
  });
};
</script>
<template>
  {{ filteredBlocks() }}
</template>
<style scoped></style>
