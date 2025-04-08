<script setup>
import { spoolData, spoolTypes } from '../../services/data';
import { getTextWithSpace } from '../../services/functions';
import Valve from '../Scheme/Valve.vue';


const { project, meta, order, open } = defineProps(["project", "meta", "order", "open"]);
const filtered = () => spoolData.filter(({ spool }) => spool === meta.spool).sort((a, b) => a.cetop - b.cetop);
</script>

<template>
  <article>
    <h2 :class="open && 'bgc-g'">Rozdzielacz<span> {{ order.valve?.title }}</span></h2>

    <div class="inline w-100">
      <h3 class="border border-bottom-no bgc-g fs-sm px-5">Typ zaworu</h3>
      <select v-model="meta.spool">
        <option v-for="title in spoolTypes" :value="title">
          {{ title }}
        </option>
      </select>
    </div>
    <div class="inline valve ml-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 90" class="">
        <Valve :x="0" :y="10" :data="{ spool: meta.spool }" :sl="200" />
      </svg>
    </div>
    <table>
      <thead>
      </thead>
      <td v-if="filtered().length" v-for="item in Object.keys(filtered()[0])">{{ item }}</td>
      <tbody>
        <tr v-for="{ title, ...rest } in filtered()">
          <td class="tal">
            <input type="radio" :id="title" :value="{ title, spoolData: rest }" name="valve" v-model="order.spool"
              :checked="title === order.spool?.title" class="mx" />
            <a v-if="title.includes('HK')" :href="`https://shop.hansa-flex.pl/pl_PL/p/${title}`" target="_blank"
              rel="noopener noreferrer">
              {{ title }}
            </a>

            <span v-else>{{ title }}</span>
          </td>
          <td v-for="el in Object.values(rest)">{{ el }}</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<style scoped>
.valve {
  width: 200px;
  margin-left: 100px;
}
</style>
