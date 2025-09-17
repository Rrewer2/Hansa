<script setup>
import { ref } from "vue";
import { blockData } from "../../services/data";
import InputItem from "../InputItem.vue";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order, powerUNIT, i } = defineProps([
  "project",
  "meta",
  "order",
  "powerUNIT",
  "i",
]);

const sections = ref("");

const filteredBlocks = () => {
  return powerUNIT.unit.flatMap(({ Q, p, DR2type }, i) => blockData.filter(({ stations, cetop, pressure, DBV, start }) => {
    return (
      (sections.value ? stations === sections.value : stations === powerUNIT.unit[i].HKSH.length + +(DR2type === 3)) &&
      (!Q || (cetop === 5 && Q > 34) || (cetop === 3 && Q < 35)) &&
      (pressure > +p + 20) 
      && ((DR2type === 0 && !DBV) || (DR2type === 1 && DBV && !start) || ((DR2type === 2 && DBV && start)) || DR2type === 3)
    )
  }));
};
</script>

<template>
  <SmthSelector v-bind="{ project, meta, order }" Name="block" :index="i" :logic="filteredBlocks">
    <InputItem data="length">
      <select v-model="sections" id="sections">
        <option v-for="i in ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :value="i">
          {{ i }}
        </option>
      </select>
    </InputItem>
    <InputItem data="p">
      <input type="number" min="0" v-model="powerUNIT.unit[i].p" id="press" />
    </InputItem>
    <InputItem data="DR2type">
      <select min="0" v-model="powerUNIT.unit[i].DR2type" id="DR2type">
        <option v-for="item in [0, 1, 2, 3]" :value="item">
          {{ item }}
        </option>
      </select>
    </InputItem>
  </SmthSelector>
</template>
<style scoped></style>
