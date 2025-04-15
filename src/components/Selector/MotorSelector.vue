<script setup>
import { engineMountData, enginesData, freqData } from '../../services/data';
import { getTextWithSpace, reducedPower, round } from '../../services/functions';
import { text } from '../../services/text';
import InputItem from '../InputItem.vue';
import ResultItem from '../ResultItem.vue';

const { project, meta, order, powerUNIT, i } = defineProps(["project", "meta", "order", "powerUNIT", "i"]);

const filteredMotors = () => enginesData.filter(({ power, mount }) => power * 1.25 >=
  reducedPower(powerUNIT.unit) && power * 0.75 <= reducedPower(powerUNIT.unit) && mount === powerUNIT.mount);

const getTitle = () => order[`motor${i}`]?.title;
</script>

<template>
  <article>

    <h2>Silnik {{ i ? i + 1 : '' }}<span> {{ getTitle() }}</span></h2>
    <div class="flex-row flex-center">
      <InputItem :title="text('n').split(', ')[0]" :unit="text('n').split(', ')[1]" class="ml-10">
        <select v-model="powerUNIT.n"
          :disabled="getTitle() || Object.keys(order).some(str => str.includes(`pump${i}`))">
          <option v-for="elem in freqData" :value="elem">{{ elem }}</option>
        </select>
      </InputItem>

      <InputItem :title="text('mount').split(', ')[0]" class="ml-10">
        <select v-model="powerUNIT.mount" :disabled="getTitle()">
          <option v-for="item in engineMountData" :value="item">{{ item }}</option>
        </select>
      </InputItem>

      <ResultItem :data="{ P: round(reducedPower(powerUNIT.unit)) }" />
    </div>
    <br>
    <table v-if="filteredMotors().length">
      <thead>
        <td v-for="a in Object.keys(filteredMotors()[0])">
          <b><i>{{ text(a) }}</i></b>
        </td>
      </thead>

      <tbody v-for="{ title, ...elem } in filteredMotors()">
        <td class="tal">
          <input type="radio" :id="title" v-model="order[`motor${i}`]" :value="({ title, motorData: elem })"
            name="title" :checked="getTitle() === title" class="mx" />
          <a v-if="title.includes('HK')" :href="`https://shop.hansa-flex.pl/pl_PL/p/${title}`" target="_blank"
            rel="noopener noreferrer">
            {{ getTextWithSpace(title) }}
          </a>
          <span v-else>{{ title }}</span>
        </td>
        <td v-for="item in elem">{{ item }}</td>
      </tbody>
    </table>
  </article>
</template>

<style scoped></style>
