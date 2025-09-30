<script setup>
import { ref } from "vue";
import { getPriority } from "../services/data";
import { KITtitle } from "../services/functions";
import { text } from "../services/text";
import Description from "./Description.vue";
import Table from "./Table.vue";
import TableSAP from "./TableSAP.vue";

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
        KIT[title] = { title, count: n ? n : 1, JM: 'szt', 
        opis: /^x/i.test(key) ? 'Złączka' : /^vhr/i.test(key) ? 'Korek' : key.replace(/\d+$/, ""),
        // opis: key
       };
      }
    }
  });
  return getPriority(KIT);
};
const magic = ref(false);
const margin = ref(50);
const zlo = ref(0);
async function loadData() {
  magic.value = true;
  try {
    const costs = await import('../services/costsSap.json');
    const availableQuantity = await import('../services/SAP.json');
    const a = costs.default.reduce((acc, { title, ...rest }) => {
        acc[title] = rest;
        return acc;
      }, {});
    const c = availableQuantity.default.reduce((acc, { title, amount, description }) => {
        acc[title] = {amount,description};
        return acc;
      }, {});
    cracked.value = Object.fromEntries(Object.entries(normalize()).map(poz => [poz[0], { ...poz[1], price: a[poz[0]]?.cost || '0,00', ...c[poz[0]]}]));
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
const netto = () => {
  // `m'/100 = 1 - c / (c / (1 - margin/100) - zlo)`
  // const c = totalPrice();
  // const m1 = 1 - totalPrice()/(totalPrice()/(1-margin.value/100)-zlo.value);
  // console.log('m1 :>> ', m1);
  // console.log('totalPrice()/(1-margin.value/100) :>> ', totalPrice()/(1-margin.value/100));
  // console.log('totalPrice()/(totalPrice()/(1-margin.value/100)-zlo.value) :>> ', totalPrice()/(totalPrice()/(1-margin.value/100)-zlo.value));
  return (zlo.value + totalPrice() / (totalPrice()/(totalPrice()/(1-margin.value/100)-zlo.value)));
};
</script>

<template>
  <Table v-if="!magic" class="mx-auto" :keys="['Nr', 'title', 'count', 'JM', 'Description']" :data="normalize" />

  <TableSAP v-if="magic" class="magic-article" :keys="['Nr', 'title', 'count', 'Description', 'Ilosc ATP', 'Cena']"
    :data="cracked" />
  <button v-if="!magic" @click="loadData" class="magic-btn">
    Zrobić magię
  </button>
  <button v-if="magic" @click="() => magic = false" class="magic-btn">
    Wróćić
  </button>
  <div v-if="magic" class="final">
    <h2 class="final mt-20">
      Koszty {{ new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(totalPrice()) }}
    </h2>
    <!-- <div class="final mt-20">ZLO1 <input v-model="zlo" type="number" min="0" /></div> -->
    <div class="mt-20">Marża <input v-model="margin" type="number" min="0" /></div>
    <h2 class="final mt-20">
      Netto {{ new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(zlo + totalPrice() /
        (totalPrice() / (totalPrice() / (1 - margin / 100) - zlo)) || 0) }}
    </h2>
  </div>
</template>
<style scoped>
.tar {
  text-align: right;
}

.magic-btn {
  background-color: rgba(255, 0, 0, 0.01);
}

.magic-btn:hover {
  background-color: rgba(255, 0, 0, 0.9);
}

.magic-article {
  background-color: #1D2A35;
  margin: 20px auto
}

.table {
  padding-top: 0;
  background-color: #2C3E50;
  color: #FFFFFF;
  border: #3A4B57;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.final {
  color: black;
  text-align: center;
}
</style>
