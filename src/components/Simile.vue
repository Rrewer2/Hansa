<script setup>
import { text } from "../services/text";

const { simile } = defineProps(["simile"]);
const getDiffBetween = (orderStr, modelStr) => {
  if (!orderStr.trim().length || !modelStr.trim().length) return ["", ""];
  const order = orderStr.split("\n").map((row) => row.split("\t"));
  const model = modelStr.split("\n").map((row) => row.split("\t"));
  const orderObj = {};
  let KIT = 0;
  order.forEach(([nr, title, N]) => {
    if (!title) return;
    if (title.match(/^KIT/i)) return (KIT = N);
    orderObj[title] ? orderObj[title].push({ N: +N, nr }) : (orderObj[title] = [{ N: +N, nr }]);
  });
  const modelObj = {};
  model.forEach(([title, N]) => {
    if (!title) return;
    if (title.match(/^M\d+[A-Za-z]*/)) return;
    if (title.match(/^rura|wąż|imb/gi)) return;
    const trimTitle = title.trim();
    modelObj[trimTitle] ? modelObj[trimTitle].push(N * (KIT || 1)) : (modelObj[trimTitle] = [N * (KIT || 1)]);
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
