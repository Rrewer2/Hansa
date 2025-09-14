<script setup>
import { ref } from "vue";
import { coolerData, coolerVBT, coolerVZ } from "../../services/data";
import { P01, Pv, Qmax, getTextWithSpace } from "../../services/functions";
import { text } from "../../services/text";
import InputItem from "../InputItem.vue";
import ResultItem from "../ResultItem.vue";
import CopyText from "./CopyText.vue";
import { links } from "../../services/links";

const { project, meta, order, powerUNIT, i } = defineProps([
  "project",
  "meta",
  "order",
  "powerUNIT",
  "i",
]);

const cooler = ref({ η: 70, vBT: 50, vZ: 30 });
const setCooler = ({ title, ...rest }) => order.cooler?.title !== title ? order.cooler = { title, bellhousingData: { ...rest } } : order.cooler = {};

const filteredCooler = (project, cooler) => {
  return coolerData.filter(({ performance, flow }) => {
    const P = P01(project, cooler);
    const Qm = Qmax(project);
    return performance.max >= P && (flow.min + flow.max)/2 >= Qm;
  })};
</script>

<template>
  <article>
    <h2>{{ text("cooler") }} {{ order.cooler?.title }}</h2>
    <div class="flex-row flex-center">
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
    </div>
    <br />
    <table v-if="filteredCooler(project, cooler).length && meta.cooler">
      <thead>
        <td v-for="a of Object.keys(coolerData[0])">
          <b><i>{{ text(a) }}</i></b>
        </td>
      </thead>
      <tbody>
        <tr v-for="{ title, ...rest } in filteredCooler(project, cooler)">
          <td class="tal">
            <input type="radio" :id="title" @click="setCooler({ title, ...rest })" name="title"
              :checked="order.cooler?.title === title" class="mx" :disabled="!meta.cooler" />
            <a :href="`${links[meta.lang]}${title}`" target="_blank" rel="noopener noreferrer">
              {{ getTextWithSpace(title) }}
            </a>
            <CopyText :text="title" />
          </td>
          <td v-for="item in rest">{{ `${item.min} ÷ ${item.max}` }}</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<style scoped></style>
