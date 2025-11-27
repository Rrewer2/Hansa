<script setup>
import { ref } from "vue";
import { coolerData, coolerVBT, coolerVZ, pipesData, xvrnw } from "../../services/data";
import { P01, Pv, Qmax, pumpCounting } from "../../services/functions";
import InputItem from "../InputItem.vue";
import ResultItem from "../ResultItem.vue";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order } = defineProps(["project", "meta", "order"]);

const cooler = ref({ η: 70, vBT: 50, vZ: 30 });

const filteredCooler = () =>
  coolerData.filter(({ performance, flow }) => performance.max >= P01(project, cooler.value) && (!flow.min || (flow.min + flow.max) / 2 >= Qmax(project)));
const getXvrT = () => {
  const Qback = project[0].unit.reduce((acc, unit) => acc + pumpCounting(unit).Qback, 0);
  const pipeT = () =>
    Object.entries(pipesData)
      .filter((el) => el[0] !== "L12-1.5")
      .find(([_, { Q }]) => Q > Qback);
  const getXvrP = (thread, pipe) => xvrnw.find((x) => thread === x.thread && pipe === x.pipe);
  const xvrCoolerT = getXvrP(order["cooler"]?.coolerData?.join, pipeT()[0]);
  order[`xvrCoolerIn`] = xvrCoolerT ? { title: xvrCoolerT.title, xvrCoolerInData: xvrCoolerT } : {};
  order[`xvrCoolerOut`] = xvrCoolerT ? { title: xvrCoolerT.title, xvrCoolerOutData: xvrCoolerT } : {};
};
const afterCoolerSelected = () => {
  if (order.cooler?.title) meta.cooler = 2;
  if (!order.cooler?.title) meta.cooler = 0;
  getXvrT();
};
</script>

<template>
  <SmthSelector v-bind="{ meta, order }" Name="cooler" index="" :logic="filteredCooler" :after="afterCoolerSelected">
    <InputItem data="cooler">
      <select v-model="meta.cooler" class="ml-10" id="cooler">
        <option v-for="(title, c) in ['Bez', 'Za filtrem', 'Przed fitrem']" :value="c">
          {{ title }}
        </option>
      </select>
    </InputItem>

    <InputItem data="η">
      <input type="number" min="0" max="100" v-model="cooler.η" id="η" />
    </InputItem>

    <InputItem data="vBT">
      <select v-model="cooler.vBT" id="vBT">
        <option v-for="item in coolerVBT" :value="item">{{ item }}</option>
      </select>
    </InputItem>

    <InputItem data="vZ">
      <select v-model="cooler.vZ" id="vZ">
        <option v-for="item in coolerVZ" :value="item">{{ item }}</option>
      </select>
    </InputItem>

    <ResultItem
      :data="{
        Qmax: Qmax(project),
        Pv: Pv(project, cooler.η),
        P01: P01(project, cooler),
      }"
    />
  </SmthSelector>
</template>

<style scoped></style>
