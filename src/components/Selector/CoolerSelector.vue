<script setup>
import { ref } from "vue";
import { coolerData, coolerVBT, coolerVZ } from "../../services/data";
import {
  P01,
  Pv,
  Qmax,
  filteredCooler,
  getTextWithSpace,
  round,
} from "../../services/functions";
import { text } from "../../services/text";
import InputItem from "../InputItem.vue";
import ResultItem from "../ResultItem.vue";
import CopyText from "./CopyText.vue";

const { project, meta, order, powerUNIT, i } = defineProps([
  "project",
  "meta",
  "order",
  "powerUNIT",
  "i",
]);

const cooler = ref({ η: 70, vBT: 50, vZ: 30 });
const getTitle = () => order.cooler?.title;
</script>

<template>
  <article v-if="meta.cooler">
    <h2>
      {{ text("cooler") }}<span> {{ order.cooler?.title }}</span>
    </h2>
    <div class="flex-row flex-center">
      <InputItem data="η" class="ml-10">
        <!-- <input type="number" min="0" max="100" v-model="cooler.η" :disabled="order?.cooler" id="η" /> -->
        <input type="number" min="0" max="100" v-model="cooler.η" id="η" />
      </InputItem>

      <InputItem data="vBT">
        <!-- <select v-model="cooler.vBT" :disabled="getTitle()" id="vBT"> -->
        <select v-model="cooler.vBT" id="vBT">
          <option v-for="item in coolerVBT" :value="item">{{ item }}</option>
        </select>
      </InputItem>

      <InputItem data="vZ" class="ml-10">
        <!-- <select v-model="cooler.vZ" :disabled="getTitle()" id="vZ"> -->
        <select v-model="cooler.vZ" id="vZ">
          <option v-for="item in coolerVZ" :value="item">{{ item }}</option>
        </select>
      </InputItem>

      <ResultItem :data="{
        Qmax: Qmax(project),
        Pv: Pv(project, cooler.η),
        P01: P01(project, cooler),
      }" class="ml-10" />
    </div>
    <br />
    <table>
      <thead>
        <td v-for="a of Object.keys(coolerData[0])">
          <b><i>{{ text(a) }}</i></b>
        </td>
      </thead>
      <tbody>
        <tr v-for="{ title, ...elem } in filteredCooler(project, cooler)?.title
          ? [filteredCooler(project, cooler)]
          : coolerData">
          <td class="tal">
            <input type="radio" :id="title" v-model="order.cooler" :value="{ title, coolerData: elem }" name="title"
              :checked="getTitle() === title" class="mx" />
            <a :href="`https://shop.hansa-flex.pl/pl_PL/p/${title}`" target="_blank" rel="noopener noreferrer">
              {{ getTextWithSpace(title) }}
            </a>
            <CopyText :text="title" />
          </td>
          <td v-for="item in elem">{{ `${item.min} ÷ ${item.max}` }}</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<style scoped></style>
