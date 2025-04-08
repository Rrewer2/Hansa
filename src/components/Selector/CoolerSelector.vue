<script setup>
import { ref } from 'vue';
import { coolerData, coolerVBT, coolerVZ } from '../../services/data';
import { P01, Pv, Qmax, filteredCooler, getTextWithSpace, round } from '../../services/functions';
import { text } from '../../services/text';

const { project, meta, order, powerUNIT, i } = defineProps(["project", "meta", "order", "powerUNIT", "i"]);

const cooler = ref({ η: 70, vBT: 50, vZ: 30 });
const getTitle = () => order.cooler?.title;
</script>

<template>
  <article v-if="meta.cooler">
    <h2>Chłodnica<span> {{ order.cooler?.title }}</span></h2>

    <div class="inline w-100">
      <h3 class="border border-bottom-no bgc-g fs-sm px-5">
        {{ text("η") }}
      </h3>
      <input type="number" min="0" max="100" v-model="cooler.η" :disabled="order?.cooler" />
    </div>
    <div class="inline w-100">
      <h3 class="border border-bottom-no bgc-g fs-sm px-5">
        {{ text("vBT") }}
      </h3>
      <select v-model="cooler.vBT" :disabled="getTitle()">
        <option v-for="item in coolerVBT" :value="item">{{ item }}</option>
      </select>
    </div>
    <div class="inline w-100">
      <h3 class="border border-bottom-no bgc-g fs-sm px-5">
        {{ text("vZ") }}
      </h3>
      <select v-model="cooler.vZ" :disabled="getTitle()">
        <option v-for="item in coolerVZ" :value="item">{{ item }}</option>
      </select>
    </div>
    <div class="inline w-100">
      <h3>
        {{ text('Qmax') }}
      </h3>
      <h3>{{ round(Qmax(project)) }}</h3>
    </div>
    <div class="inline w-100">
      <h3>
        {{ text('Pv') }}
      </h3>
      <h3>{{ round(Pv(project, cooler.η)) }}</h3>
    </div>
    <div class="inline w-100">
      <h3>
        {{ text('P01') }}
      </h3>
      <h3>{{ round(P01(project, cooler), 1000) }}</h3>
    </div>

    <br>
    <table>
      <thead>
        <td v-for="a of Object.keys(coolerData[0])">
          <b><i>{{ text(a) }}</i></b>
        </td>
      </thead>
      <tbody>
        <tr v-for="{ title, ...elem } in filteredCooler(project, cooler)?.title ?
          [filteredCooler(project, cooler)]
          : coolerData">
          <td class="tal">
            <input type="radio" :id="title" v-model="order.cooler" :value="({ title, coolerData: elem })" name="title"
              :checked="getTitle() === title" class="mx" />
            <a :href="`https://shop.hansa-flex.pl/pl_PL/p/${title}`" target="_blank" rel="noopener noreferrer">
              {{ getTextWithSpace(title) }}
            </a>
          </td>
          <td v-for="item in elem">{{ `${item.min} ÷ ${item.max}` }}</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<style scoped></style>
