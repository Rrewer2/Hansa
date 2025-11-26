<script setup>
import { ref } from "vue";
import { blockData, xvrnw } from "../../services/data";
import InputItem from "../InputItem.vue";
import SmthSelector from "./SmthSelector.vue";
import { Qmax, pumpCounting } from "../../services/functions";

const { project, meta, order, powerUNIT, i } = defineProps(["project", "meta", "order", "powerUNIT", "i"]);

const sections = ref("");

const filteredBlocks = () => {
  return powerUNIT.unit.map(({ Q, p, DR2type, start: startUnit, HKSH }) =>
    blockData.filter(({ stations, cetop, pressure, DBV, start }) => {
      return (
        (sections.value ? stations === sections.value + +startUnit : stations === HKSH.length + +startUnit) &&
        (!meta.CETOP || cetop === meta.CETOP) &&
        pressure > +p + 20 &&
        ((DR2type === 0 && !DBV) || (DR2type === 1 && DBV && !start) || (DR2type === 2 && DBV && start))
      );
    }),
  );
};
const after = (k) => {
  const { pipeP, pipeT } = pumpCounting(powerUNIT.unit[k]);
  const getXvrP = (thread, pipe) => xvrnw.find((x) => thread === x.thread && pipe === x.pipe);
  const xvrBlockP = getXvrP(order["block" + k]?.blockData?.threadP, pipeP);
  const xvrBlockA = getXvrP(order["block" + k]?.blockData?.threadA, pipeP);
  const xvrBlockB = getXvrP(order["block" + k]?.blockData?.threadB, pipeP);
  const xvrBlockT = getXvrP(order["block" + k]?.blockData?.threadT, pipeT);
  order[`xvrBlockP${k}`] = xvrBlockP ? { title: xvrBlockP.title, xvrBlockPData: xvrBlockP } : {};
  order[`xvrBlockA${k}`] = xvrBlockA
    ? { title: xvrBlockA.title, xvrBlockAData: xvrBlockA, n: order["block" + k]?.blockData?.stations }
    : {};
  order[`xvrBlockB${k}`] = xvrBlockB
    ? { title: xvrBlockB.title, xvrBlockBData: xvrBlockB, n: order["block" + k]?.blockData?.stations }
    : {};
  order[`xvrBlockT${k}`] = xvrBlockT ? { title: xvrBlockT.title, xvrBlockTData: xvrBlockT } : {};
};
const getCetop = () => {
  const res = [""];
  if (Qmax(project) <= 33) res.push(3);
  if (Qmax(project) >= 28 && Qmax(project) <= 65) res.push(5);
  if (Qmax(project) >= 50 && Qmax(project) <= 185) res.push(7);
  if (Qmax(project) >= 100 && Qmax(project) <= 220) res.push(8);
  if (Qmax(project) >= 190) res.push(10);
  return res;
};
</script>

<template>
  <SmthSelector
    v-for="(_, ind) in filteredBlocks()"
    v-bind="{ meta, order }"
    Name="block"
    :index="ind"
    :logic="() => filteredBlocks()[ind]"
    :after="() => after(ind)"
  >
    <InputItem data="DR2type">
      <select v-model="powerUNIT.unit[0].DR2type" class="w-100" id="DR2type">
        <option v-for="item in [0, 1, 2]" :value="item">
          {{ item }}
        </option>
      </select>
    </InputItem>
    <InputItem data="length">
      <select v-model="sections" id="sections">
        <option v-for="i in ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :value="i">
          {{ i }}
        </option>
      </select>
    </InputItem>
    <InputItem data="CETOP">
      <select v-model="meta.CETOP" id="blockCETOP">
        <option v-for="i in getCetop()" :value="i">
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
