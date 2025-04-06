<script setup>
import { engineMountData, enginesData, freqData } from '../../services/data';
import { getTextWithSpace, reducedPower, round } from '../../services/functions';
import { text } from '../../services/text';

const { project, meta, order, powerUNIT, i } = defineProps(["project", "meta", "order", "powerUNIT", "i"]);

const filteredMotors = () => enginesData.filter(({ power, mount }) => power * 1.25 >=
  reducedPower(powerUNIT.unit) && power * 0.75 <= reducedPower(powerUNIT.unit) && mount === powerUNIT.mount);

const getTitle = () => order[`motor${i}`]?.title;
</script>

<template>
  <article>

    <h2>Silnik<span> {{ getTitle() }}</span></h2>
    <div class="inline w-100">
      <h3 class="border border-bottom-no bgc-g fs-sm px-5">
        {{ text('n') }}
      </h3>
      <select v-model="powerUNIT.n" :disabled="getTitle() || Object.keys(order).some(str => str.includes(`pump${i}`))">
        <option v-for="elem in freqData" :value="elem">{{ elem }}</option>
      </select>
    </div>
    <div class="inline w-100">
      <h3 class="border border-bottom-no bgc-g fs-sm px-5">
        {{ text('mount') }}
      </h3>
      <select v-model="powerUNIT.mount" :disabled="getTitle()">
        <option v-for="item in engineMountData" :value="item">{{ item }}</option>
      </select>
    </div>
    <div class="inline w-100">
      <h3>
        {{ text('P') }}
      </h3>
      <h3>{{ round(reducedPower(powerUNIT.unit)) }}</h3>
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
