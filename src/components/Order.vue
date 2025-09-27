<script setup>
import { ref } from "vue";
import { getPriority } from "../services/data";
import { KITtitle } from "../services/functions";
import { text } from "../services/text";
import Description from "./Description.vue";

const { order, project } = defineProps(["order", "project"]);
const cracked = ref({});
const normalize = () => {
  const KIT = { KIT: { title: 'KIT', count: 1, JM: 'szt', opis: KITtitle(project, order) } };
  Object.keys(order).forEach((key) => {
    const { title, n } = order[key];
    if (title) {
      if (KIT[title]?.title) {
        KIT[title].count = n ? KIT[title].count + n : KIT[title].count + 1;
      } 
      else {
        KIT[title] = { title, count: n ? n : 1, JM: 'szt', opis: /^x/i.test(key) ? 'Złączka' : /^vhr/i.test(key) ? 'Korek' : key.replace(/\d+$/, "") };
      }
    }
  });
  return getPriority(KIT);
};
const SAP = ref(null);
const magic = ref(false);
const margin = ref(50);
const zlo = ref(499,99);
async function loadData() {
  magic.value = true;
  try {
    const costs = await import('../services/costsSap.json');
    const availableQuantity = await import('../services/SAP.json');
    const a = costs.default.reduce((acc, { title, ...rest }) => {
        acc[title] = rest;
        return acc;
      }, {});
    const c = availableQuantity.default.reduce((acc, { title, amount }) => {
        acc[title] = amount;
        return acc;
      }, {});
      console.log('c :>> ', c);
    cracked.value = Object.fromEntries(Object.entries(normalize()).map(poz => [poz[0], { ...poz[1], price: a[poz[0]]?.cost || '0,00', amount: c[poz[0]]}]));
  } catch (error) {
    alert('Ni chuja!')
    console.error(error);
  }
};
const totalPrice = () => {
  let res = 0;
  for (let key in cracked.value) {
    res += +cracked.value[key]?.price.replace(/\s/g,"").replace(',',".") * cracked.value[key]?.count;
  }
  return res;
};
</script>

<template>
  <article class="mt-20">
    <table>
      <thead class="noCopy">
        <td v-for="a in ['Nr', 'title', 'count', 'JM', 'Description']">
          <b><i>{{ text(a) }}</i></b>
        </td>
      </thead>

      <tbody>
        <tr v-for="({ title, count, JM, opis }, _, i) of normalize()">
          <td class="noCopy">{{ (i + 1) * 100 }}</td>
          <td class="tal">
            {{ title }}
          </td>
          <td class="">
            {{ count }}
          </td>
          <td class="noCopy">
            {{ JM }}
          </td>
          <td v-if="!i" class="tal">
            {{ opis }}
          </td>
          <td v-else class="tal noCopy">
            {{ text(opis) }}
          </td>
        </tr>
      </tbody>
    </table>
  </article>
  <Description v-if="order['pump' + 0]?.title && order['motor' + 0]?.title" v-bind="{ order, project }" />
  <button @click="loadData">
    Zrobić magię
  </button>
  <article v-if="magic" class="mt-20">
    <table>
      <thead class="noCopy">
        <td v-for="a in ['Nr', 'title', 'count', 'Description', 'Ilosc ATP', 'Cena']">
          <b><i>{{ text(a) }}</i></b>
        </td>
      </thead>
      <tbody>
        <tr v-for="({ title, count, opis, price, amount }, _, i) of cracked"
          :class="price === '0,00' || amount === 0 ? 'red' : ''">
          <td class="tal">
            {{ (i + 1) * 100 }}
          </td>
          <td class="tal">
            {{ title }}
          </td>
          <td class="">
            {{ count }}
          </td>
          <td class="tal">
            {{ text(opis) }}
          </td>
          <td class="">
            {{ amount }}
          </td>
          <td class="tar">
            {{ price.replace(' ', '') }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class=""></td>
          <td class=""></td>
          <td></td>
          <td>
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
    <h2 class="tar">Koszt {{ new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(totalPrice())
    }}</h2>
    <div class="flex-row flex-evenly">
      <span class="tar">ZLO1 <input v-model="zlo" type="number" min="0" /></span>
      <span class="tar">Marża <input v-model="margin" type="number" min="0" /></span>
    </div>
    <h2>
      NETTO {{ new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(totalPrice() * (1 + margin
        / 100) + zlo) }}
    </h2>
  </article>
</template>
<style scoped>
.noCopy {
  user-select: none;
}

.tar {
  text-align: right;
}

.red {
  background-color: rgb(255, 190, 190);
}
</style>
