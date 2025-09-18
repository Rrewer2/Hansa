<script setup>
import { ref } from "vue";
import { pumpData, freqData, flanges, flangesPP } from "../../services/data";
import { getQ, getVFU, round } from "../../services/functions";
import { text } from "../../services/text";
import InputItem from "../InputItem.vue";
import ResultItem from "../ResultItem.vue";
import SmthSelector from "./SmthSelector.vue";

const group = ref("");
const { project, meta, order, powerUNIT, i } = defineProps([
  "project",
  "meta",
  "order",
  "powerUNIT",
  "i",
]);
const filteredPumps = () => {
  if (!meta.pumpType) return [];
  if (powerUNIT.unit.length === 1) {
    const VFU = getVFU(powerUNIT.unit[0].Q, powerUNIT.n);
    const par = meta.pumpType === "gears" ? 0.2 * VFU : 0.5 * VFU;
    if (order[`pump${i}`]?.title) flangeSelector();
    return pumpData[meta.pumpType].filter((item) => {
      const pump = Object.values(item)[0];
      const CC = pump.CC - VFU;
      return (
        CC >= -par &&
        CC <= par &&
        pump.pmax > powerUNIT.unit[0].p &&
        (group.value === '' ||
          meta.pumpType !== "gears" ||
          group.value === pump.group)
      );
    }).map(el => {
      const { title, CC, ...rest } = Object.values(el)[0];
      return { title, CC, Q: round(getQ(CC, powerUNIT.n)), ...rest };
    });
  }
  
  if (powerUNIT.unit.length > 1) return [];// TODO: create a functionality for multiple pump
};

const flangeSelector = () => {
  const flangesData = order[`pump${i}`]?.pumpData?.out?.startsWith('Bore') ? flangesPP : flanges;
  const flangeIn = flangesData.find(({ LK }) => LK === order[`pump${i}`]?.pumpData?.in);
  order[`flangeIn${i}`] = flangeIn ? { title: flangeIn.title, flangeData: flangeIn } : {};

  if (!order[`pump${i}`]?.pumpData.out.startsWith('Bore')) {
    const flangeOut = flanges.find(({ pressure, LK }) => LK === order[`pump${i}`]?.pumpData?.out && pressure > (powerUNIT.unit[0].p > 180 ? powerUNIT.unit[0].p : 180));
    order[`flangeOut${i}`] = flangeOut ? { title: flangeOut.title, flangeData : flangeOut } : {};
  } else order[`flangeOut${i}`] = {};
};

const selectedPump = () => {
  const currentQ = round(getQ(order[`pump${i}`]?.pumpData?.CC, powerUNIT.n));
  if(!currentQ === "-") powerUNIT.unit[0].Q = currentQ;
  //group.value = order[`pump${i}`]?.pumpData?.group;
  flangeSelector();
};
</script>

<template>{{order}}
  <SmthSelector v-bind="{ project, meta, order }" Name="pump" :index="i" :logic="filteredPumps" :after="selectedPump">
    <span v-for="pump in powerUNIT.unit" class="flex-row flex-center">
      <InputItem data="Q">
        <input type="number" min="0" v-model="pump.Q" id="Q" />
      </InputItem>
      <ResultItem :data="{ VFU: round(getVFU(pump.Q, powerUNIT.n)) }" />
      <InputItem data="p">
        <input type="number" min="0" v-model="pump.p" id="pp" />
      </InputItem>
    </span>

    <InputItem data="n">
      <select v-model="powerUNIT.n" id="n">
        <option v-for="item in freqData" :value="item">{{ item }}</option>
      </select>
    </InputItem>

    <InputItem data="pumpType">
      <select v-model="meta.pumpType" id="pumpType">
        <option v-for="item in Object.keys(pumpData)" :value="item">
          {{ text(item) }}
        </option>
      </select>
    </InputItem>

    <InputItem v-if="meta.pumpType === 'gears'" data="group">
      <select v-model="group" id="group">
        <option v-for="item in ['', 0, 1, 2, 3]" :value="item">
          {{ item }}
        </option>
      </select>
    </InputItem>
  </SmthSelector>
</template>

<style scoped></style>
