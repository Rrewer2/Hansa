<script setup>
import { bellhousingData, couplingData } from '../../services/data';
import { getTextWithSpace, reducedPower, round } from '../../services/functions';
import { text } from '../../services/text';
import InputItem from '../InputItem.vue';
import ResultItem from '../ResultItem.vue';

const { project, meta, order, powerUNIT, i } = defineProps(["project", "meta", "order", "powerUNIT", "i"]);

const filteredCoupling = () => couplingData.filter(({ group, size, shaft }) =>
  (shaft === order[`pump${i}-${0}`]?.pumpData.shaft && group === order[`pump${i}-${0}`]?.pumpData.group
    || (order[`pump${i}-${0}`]?.title.startsWith('HKPBA') && title.includes('PBA')))
  && size === order[`motor${i}`]?.motorData.size
);
</script>

<template>
  <article>
    <h2>Sprzęgło {{ i ? i + 1 : '' }}<span> {{ filteredCoupling().at(-1)?.title }}</span></h2>

    <br>

    <table v-if="filteredCoupling().length">
      <thead>
        <td v-for="a in Object.keys(couplingData[0])">
          <b><i>{{ a }}</i></b>
        </td>
      </thead>
      <tbody v-for="{ title, ...rest } in filteredCoupling()">
        <td class="tal">
          <!-- <input type="radio" :id="getTitle(elem)" v-model="order[`pump${i}-${k}`]" @change="selectedPump"
            :value="{ title: getTitle(elem), pumpData: { ...elem[getTitle(elem)], n: project[i].n } }" name="pump"
            :checked="getTitle(elem) === (order[`pump${i}-${k}`]?.title)" class="mx" /> -->

          <a :href="`https://shop.hansa-flex.pl/pl_PL/p/${title}`" target="_blank" rel="noopener noreferrer">
            {{ getTextWithSpace(title) }}
          </a>
        </td>
        <td v-for="item in Object.values(rest)">{{ item }}</td>
      </tbody>
    </table>
  </article>
</template>

<style scoped></style>
