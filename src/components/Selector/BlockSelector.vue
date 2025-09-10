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
console.log(powerUNIT.unit.p);
console.log(powerUNIT.unit.Q);
console.log(powerUNIT.unit.length);
const filteredBlocks = () => {
  return blockData.filter((item) => {
    console.log(item.stations, powerUNIT.unit.length);
    console.log(powerUNIT.unit.Q);
    console.log(item.pressure, powerUNIT.unit.p);
    return (
      item.stations === powerUNIT.unit.length &&
      (item.cetop === 3 && powerUNIT.unit.Q < 40 || item.cetop === 5 && powerUNIT.unit.Q > 40)
      item.pressure > powerUNIT.unit.p + 20
    );
  });
};
</script>
<template>
  <div>{{ filteredBlocks() }}</div>
</template>
<style scoped></style>
