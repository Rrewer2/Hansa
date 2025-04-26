<script setup>
import { pumpData, freqData } from '../../services/data';
import { getQ, getTextWithSpace, getVFU, round } from "../../services/functions";
import { text } from "../../services/text";
import InputItem from '../InputItem.vue';
import ResultItem from '../ResultItem.vue';
import CopyText from './CopyText.vue';

const { project, meta, order, powerUNIT, i } = defineProps(["project", "meta", "order", "powerUNIT", "i"]);
const filteredPumps = () => {
  if (!meta.pumpType) return [];
  if (powerUNIT.unit.length === 1) {
    const VFU = getVFU(powerUNIT.unit[0].Q, powerUNIT.n);
    const par = meta.pumpType === 'gears' ? 0.2 * VFU : 0.5 * VFU;
    return pumpData[meta.pumpType].filter((el) => {
      const item = Object.values(el)[0].CC - VFU;
      return item >= -par && item <= par
    })
  }
  if (powerUNIT.unit.length > 1) return []
};

const selectedPump = () => {
  pump.Q = round(getQ(order[`pump${i}`]?.pumpData?.CC, powerUNIT.n));
};
const getTitle = (item) => Object.keys(item)[0];
</script>

<template>
  <article>
    <h2>Pompa {{ i ? i + 1 : '' }}<span> {{ (order[`pump${i}`]?.title) }}</span></h2>

    <div class="flex-row flex-center">
      <span v-for="pump in powerUNIT.unit" class="flex-row flex-center">
        <InputItem data="Q">
          <input type="number" min="0" v-model="pump.Q" :disabled="order[`pump${i}`]" />
        </InputItem>

        <ResultItem :data="{ VFU: round(getVFU(pump.Q, powerUNIT.n)) }" />
      </span>

      <InputItem data=n class="ml-10">
        <select v-model="powerUNIT.n"
          :disabled="order[`pump${i}`] || Object.keys(order).some(str => str.includes(`motor${i}`))">
          <option v-for="item in freqData" :value="item">{{ item }}</option>
        </select>
      </InputItem>

      <InputItem data="pumpType" class="ml-10">
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
        <td v-for="a in Object.keys(Object.values(filteredPumps().at(-1))[0])">
          <b><i>{{ a }}</i></b>
        </td>
      </thead>
      <tbody v-for="elem in filteredPumps()" :value="elem">
        <td class="tal">
          <input type="radio" :id="getTitle(elem)" v-model="order[`pump${i}`]" @change="selectedPump"
            :value="{ title: getTitle(elem), pumpData: { ...elem[getTitle(elem)], n: powerUNIT.n } }" name="pump"
            :checked="getTitle(elem) === (order[`pump${i}`]?.title)" class="mx" />

          <a v-if="Object.values(elem)[0].maker !== 'WPH'"
            :href="`https://shop.hansa-flex.pl/pl_PL/p/${getTitle(elem)}`" target="_blank" rel="noopener noreferrer">
            {{ getTextWithSpace(getTitle(elem)) }}
          </a>
          <span v-else>{{ getTextWithSpace(getTitle(elem)) }}</span>
          <CopyText :text="getTitle(elem)" />
        </td>
        <td>{{ round(getQ(Object.values(elem)[0].CC, powerUNIT.n)) }}</td>
        <td v-for="item in Object.values(elem)[0]">{{ item }}</td>
      </tbody>
    </table>
  </article>
</template>

<style scoped></style>
