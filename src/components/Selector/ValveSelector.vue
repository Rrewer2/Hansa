<script setup>
import { spoolData, spoolTypes } from '../../services/data';
import { getSmthFromProject, getTextWithSpace, uniqOrder } from '../../services/functions';
import Valve from '../Scheme/Valve.vue';


const { project, meta, order, open } = defineProps(["project", "meta", "order", "open"]);
const pushToOrder = () => {
  const list = getSmthFromProject(project).map(({ spool }) => spoolData.find(el => el.spool === spool));
  const obj = {};
  list.forEach((elem) => {
    if (!elem) return;
    const { title, ...rest } = elem;
    if (obj[title]) {
      obj[title].count++;
    }
    else {
      obj[title] = { ...rest, count: 1 };
    }
  });
  order.valve = Object.keys(obj).map(key => ({ title: key, valveData: obj[key], count: obj[key].count }));
}
pushToOrder();
// getSmthFromProject(project, 'spool').map(spool => {
//   order.valve.push({ title: spool });
// });
// const filtered = () => spoolData.filter(({ spool }) => spool === meta.spool).sort((a, b) => a.cetop - b.cetop);
const filtered = () => spoolData.filter(({ spool }) => spool === meta.spool);
const set = new Set();
spoolData.forEach(({ spool }) => set.add(spool));
</script>

<template>
  <article>
    <h2 :class="open && 'bgc-g'">Rozdzielacz <span> {{ order.valve?.title }}</span></h2>
    <div class="grid ml-10">
      <svg v-for="spool in set" @click="() => meta.spool = spool" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 90" class="valve">
        <Valve :x="0" :y="10" :data="{ spool: spool }" :sl="200" />
      </svg>
    </div>
    <table>
      <thead>
      </thead>
      <td v-if="filtered().length" v-for="item in Object.keys(spoolData[0])">{{ item }}</td>
      <tbody>
        <tr v-for="{ title, ...rest } in filtered()">
          <td class="tal">
            <!-- <input type="radio" :id="title" :value="{ title, spoolData: rest }" name="valve" v-model="order.valve"
              :checked="title === order.valve?.title" class="mx" /> -->
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

    <!-- 
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
    </table> -->
  </article>
</template>

<style scoped>
.valve {
  margin: 10px;
  cursor: pointer;
}

.valve:hover {
  margin: 8px;
  border: 1px solid green;
  background-color: rgba(81, 158, 60, 0.25);
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
</style>
