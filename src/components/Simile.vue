<script setup>
import { ref } from "vue";
import { text } from "../services/text";

const { simile } = defineProps(["simile"]);
const cracked = ref([]);
const margin = ref(50);
const zlo = ref(0);
const getDiffBetween = (orderStr, modelStr) => {
  if (!orderStr.trim().length || !modelStr.trim().length) return ["", ""];
  const order = orderStr.split("\n").map((row) => row.split("\t"));
  const model = modelStr
    .replace(/^.*?Kategoria\s*\n/s, "")
    .split("\n")
    .map((row) => row.split("\t"))
    .map(([a1, a2]) => [a1, a2]);
  const orderObj = {};
  let KIT = 0;
  order.forEach(([nr, title, N]) => {
    if (!title) return;
    if (title.match(/^KIT/i)) return (KIT = N);
    orderObj[title] ? orderObj[title].push({ N: +N.replace(",", "."), nr }) : (orderObj[title] = [{ N: +N.replace(",", "."), nr }]);
  });
  const modelObj = {};
  model.forEach(([title, N]) => {
    if (!title) return;
    if (title.match(/^M\d+[A-Za-z]*/)) return;
    if (title.match(/rura|wąż|imb/gi)) return;
    const trimTitle = title.trim();
    modelObj[trimTitle]
      ? modelObj[trimTitle].push(+N.replace(",", ".") * (KIT || 1))
      : (modelObj[trimTitle] = [+N.replace(",", ".") * (KIT || 1)]);
  });
  const res = [];
  const res1 = [];
  const res2 = [];
  Object.keys(orderObj).forEach((title) => {
    const orderCount = orderObj[title].map(({ N }) => N);
    const orderNumber = orderObj[title].map(({ nr }) => nr);
    if (!modelObj[title]) {
      res1.push([`${orderNumber.join(", ")}`, title, `${orderCount.join(", ")}`].join("\t"));
    } else {
      const modelCount = modelObj[title];
      if (orderCount.reduce((a, b) => +a + +b) !== modelCount.reduce((a, b) => +a + +b)) {
        res1.push([`${orderNumber.join(", ")}`, title, `${orderCount.join(", ")}`, `/ ${modelCount.join(", ")}`].join("\t"));
      }
    }
  });
  // res.push("	");
  Object.keys(modelObj).forEach((title) => {
    if (!orderObj[title]) {
      res2.push([title, `${modelObj[title].join(", ")}`].join("\t"));
    }
  });
  res.push(res1.join("\n"));
  res.push(res2.join("\n"));
  return res;
};
async function loadData() {
  // magic.value = true;
  // loading.value = true;
  try {
    const costs = await import("../services/costsSap.json");
    const availableQuantity = await import("../services/SAP.json");
    const a = costs.default.reduce((acc, { title, ...rest }) => {
      acc[title] = rest;
      return acc;
    }, {});
    const c = availableQuantity.default.reduce((acc, { title, amount, description }) => {
      acc[title] = { amount, description };
      return acc;
    }, {});
    cracked.value = Object.fromEntries(
      simile.zlec
        .split("\n")
        .map((row) => row.split("\t"))
        .map((poz) => [poz[0], { price: a[poz[1]]?.cost || "0,00", count: poz[2] }]),
    );
  } catch (error) {
    alert("Ni chuja!");
    console.error(error);
  }
  // loading.value = false;
}
const totalPrice = () => {
  let res = 0;
  for (let key in cracked.value) {
    res += +cracked.value[key]?.price.replace(/\s/g, "").replace(".", "").replace(",", ".") * cracked.value[key]?.count;
  }
  return res;
};
</script>

<template>
  <section>
    <textarea name="zlec" id="zlec" :placeholder="`${text('inputFromSap')}:100 HKHQ012  1`" v-model="simile.zlec"></textarea>
    <textarea name="lista" id="lista" :placeholder="`${text('inputFromSolid')}: HKHQ012 2`" v-model="simile.lista"></textarea>
  </section>
  <section>
    <textarea
      v-for="(res, i) in getDiffBetween(simile.zlec, simile.lista)"
      :id="'result' + i"
      :placeholder="text('difference' + (i + 1))"
      >{{ res }}</textarea
    >
  </section>
  <label class="final">
    <button @click="loadData" class="magic-btn">Koszty</button>
    {{ new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(totalPrice() || 0) }}
  </label>
  <d class="mt-20 ml-10">Marża <input v-model="margin" type="number" min="0" /></d>
  <d class="final mt-20 ml-10">
    Netto
    {{
      new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(
        zlo + totalPrice() / (totalPrice() / (totalPrice() / (1 - margin / 100) - zlo)) || 0,
      )
    }}
  </d>
</template>

<style scoped>
textarea {
  text-align: left;
  font-size: 1rem;
  height: 40vh;
  width: 40%;
  margin: 20px 10px;
  padding: 10px;
}
</style>
