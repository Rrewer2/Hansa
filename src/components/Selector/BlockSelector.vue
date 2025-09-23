<script setup>
import { ref } from "vue";
import { blockData, xvrnw } from "../../services/data";
import InputItem from "../InputItem.vue";
import SmthSelector from "./SmthSelector.vue";
import { pumpCounting } from "../../services/functions";

const { project, meta, order, powerUNIT, i } = defineProps([
  "project",
  "meta",
  "order",
  "powerUNIT",
  "i",
]);

const sections = ref("");

const filteredBlocks = () => {
  return powerUNIT.unit.flatMap(({ Q, p, DR2type, start: startUnit }, i) => blockData.filter(({ stations, cetop, pressure, DBV, start }) => {
    return (
      (sections.value ? stations === sections.value + +startUnit : stations === powerUNIT.unit[i].HKSH.length + +startUnit) &&
      (!Q || (cetop === 5 && Q > 34) || (cetop === 3 && Q < 35)) &&
      (pressure > +p + 20) 
      && ((DR2type === 0 && !DBV) || (DR2type === 1 && DBV && !start) || ((DR2type === 2 && DBV && start)))
    )
  }));
};
const after = () => {
    const { pipeP, pipeT } = pumpCounting(powerUNIT.unit[i]);
    const getXvrP = (thread, pipe) => xvrnw.find(x => thread === x.thread && pipe === x.pipe);
    const xvrBlockP = getXvrP(order['block'+i]?.blockData?.threadP, pipeP);
    const xvrBlockA = getXvrP(order['block'+i]?.blockData?.threadA, pipeP);
    const xvrBlockB = getXvrP(order['block'+i]?.blockData?.threadB, pipeP);
    const xvrBlockT = getXvrP(order['block'+i]?.blockData?.threadT, pipeT);
    order[`xvrBlockP${i}`] = xvrBlockP ? { title: xvrBlockP.title, xvrBlockPData: xvrBlockP} : {};
    order[`xvrBlockA${i}`] = xvrBlockA ? { title: xvrBlockA.title, xvrBlockAData: xvrBlockA} : {};
    order[`xvrBlockB${i}`] = xvrBlockB ? { title: xvrBlockB.title, xvrBlockBData: xvrBlockB} : {};
    order[`xvrBlockT${i}`] = xvrBlockT ? { title: xvrBlockT.title, xvrBlockTData: xvrBlockT} : {};
};
</script>

<template>
  <SmthSelector v-bind="{ project, meta, order }" Name="block" :index="i" :logic="filteredBlocks" :after="after">
    <InputItem data="length">
      <select v-model="sections" id="sections">
        <option v-for="i in ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :value="i">
          {{ i }}
        </option>
      </select>
    </InputItem>
    <!-- <InputItem data="p">
      <input type="number" min="0" v-model="powerUNIT.unit[i].p" id="press" />
    </InputItem> -->
    <!-- <InputItem data="DR2type">
      <select min="0" v-model="powerUNIT.unit[i].DR2type" id="DR2type">
        <option v-for="item in [0, 1, 2]" :value="item">
          {{ item }}
        </option>
      </select>
    </InputItem> -->
  </SmthSelector>
</template>
<style scoped></style>
