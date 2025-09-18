<script setup>
import { ref } from "vue";
import { coolerData, coolerVBT, coolerVZ } from "../../services/data";
import { P01, Pv, Qmax } from "../../services/functions";
import InputItem from "../InputItem.vue";
import ResultItem from "../ResultItem.vue";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order, powerUNIT, i } = defineProps([ "project", "meta", "order"]);

const cooler = ref({ η: 70, vBT: 50, vZ: 30 });

const filteredCooler = () => coolerData.filter(({ performance, flow }) => performance.max >= P01(project, cooler.value) && (flow.min + flow.max)/2 >= Qmax(project));
const setCooler = ({ title }) => order.cooler?.title !== title ? order.cooler = { title } : order.cooler = {};
</script>

<template>
  <SmthSelector v-bind="{ project, meta, order }" Name="cooler" index="" :logic="filteredCooler">
    <InputItem data="cooler">
      <select v-model="meta.cooler" class="ml-10" id="cooler"
        @click="meta.cooler === 0 ? setCooler({ title: order.cooler?.title }) : {}">
        <option v-for="(title, c) in ['Bez', 'Przed fitrem', 'Za filtrem']" :value="c">
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

    <ResultItem :data="{
      Qmax: Qmax(project),
      Pv: Pv(project, cooler.η),
      P01: P01(project, cooler),
    }" />
  </SmthSelector>
</template>

<style scoped></style>
