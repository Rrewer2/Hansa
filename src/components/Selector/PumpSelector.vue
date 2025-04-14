<script setup>
import { pumpData, freqData } from '../../services/data';
import { getQ, getTextWithSpace, getVFU, round } from "../../services/functions";
import { text } from "../../services/text";
import InputItem from '../InputItem.vue';
import ResultItem from '../ResultItem.vue';

const { project, order, pump, i, meta, k } = defineProps(["project", "order", "pump", "i", "meta", "k"]);
const filteredPumps = () => {
  if (!meta.pumpType) return [];
  const VFU = getVFU(pump.Q, project[i].n);
  const par = meta.pumpType === 'gears' ? 0.2 * VFU : 0.5 * VFU;
  return pumpData[meta.pumpType].filter((el) => {
    const item = Object.values(el)[0].CC - VFU;
    return item >= -par && item <= par
  })
};

const selectedPump = () => {
  pump.Q = getQ(order[`pump${i}-${k}`]?.pumpData?.CC, project[i].n);
};
const getTitle = (item) => Object.keys(item)[0];
</script>

<template>
  <article>
    <h2>Pompa {{ i ? i + 1 : '' }}<span> {{ (order[`pump${i}-${k}`]?.title) }}</span></h2>

    <div class="flex-row flex-center">
      <InputItem :title="text('Q').split(', ')[0]" :unit="text('Q').split(', ')[1]">
        <input type="number" min="0" v-model="pump.Q" :disabled="order[`pump${i}-${k}`]" />
      </InputItem>

      <ResultItem :data="{ VFU: round(getVFU(pump.Q, project[i].n)) }" class="ml-10" />

      <InputItem :title="text('n').split(', ')[0]" :unit="text('n').split(', ')[1]" class="ml-10">
        <select v-model="project[i].n"
          :disabled="order[`pump${i}-${k}`] || Object.keys(order).some(str => str.includes(`motor${i}`))">
          <option v-for="item in freqData" :value="item">{{ item }}</option>
        </select>
      </InputItem>

      <InputItem :title="text('pumpType').split(', ')[0]" :unit="text('pumpType').split(', ')[1]" class="ml-10">
        <select v-model="meta.pumpType">
          <option v-for="item in Object.keys(pumpData)" :value="item">{{ text(item) }}</option>
        </select>
      </InputItem>
    </div>


    <br>
    <table v-if="meta.pumpType && filteredPumps().length">
      <thead>
        <td>
        </td>
        <td><b><i>L/min</i></b></td>
        <td v-for="a in Object.keys(Object.values(filteredPumps()[0])[0])">
          <b><i>{{ a }}</i></b>
        </td>
      </thead>
      <tbody v-for="elem in filteredPumps()" :value="elem">
        <td class="tal">
          <input type="radio" :id="getTitle(elem)" v-model="order[`pump${i}-${k}`]" @change="selectedPump"
            :value="{ title: getTitle(elem), pumpData: { ...elem[getTitle(elem)], n: project[i].n } }" name="pump"
            :checked="getTitle(elem) === (order[`pump${i}-${k}`]?.title)" class="mx" />

          <a :href="`https://shop.hansa-flex.pl/pl_PL/p/${getTitle(elem)}`" target="_blank" rel="noopener noreferrer">
            {{ getTextWithSpace(getTitle(elem)) }}
          </a>
        </td>
        <td>{{ round(getQ(Object.values(elem)[0].CC, project[i].n)) }}</td>
        <td v-for="item in Object.values(elem)[0]">{{ item }}</td>
      </tbody>
    </table>
  </article>
</template>

<style scoped></style>
