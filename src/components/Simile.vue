<script setup>
const { simile } = defineProps(["simile"]);
const getDiffBetween = (orderStr, modelStr) => {
  if (!orderStr.trim().length || !modelStr.trim().length) return "";
  const order = orderStr.split("\n").map((row) => row.split("\t"));
  const model = modelStr.split("\n").map((row) => row.split("\t"));
  const orderObj = {};
  let KIT = 0;
  order.forEach(([nr, title, N]) => {
    if (!title) return;
    if (title.match(/^KIT/i)) return (KIT = N);
    orderObj[title]
      ? orderObj[title].push({ N: +N, nr })
      : (orderObj[title] = [{ N: +N, nr }]);
  });
  const modelObj = {};
  model.forEach(([title, N]) => {
    if (!title) return;
    if (title.match(/^M\d+[A-Za-z]*/)) return;
    if (title.match(/^rura|wąż|imb/gi)) return;
    const trimTitle = title.trim();
    modelObj[trimTitle]
      ? modelObj[trimTitle].push(N * (KIT || 1))
      : (modelObj[trimTitle] = [N * (KIT || 1)]);
  });
  const res = [];
  Object.keys(orderObj).forEach(title => {
    const orderCount = orderObj[title].map(({ N }) => N);
    const orderNumber = orderObj[title].map(({ nr }) => nr);
    if (!modelObj[title]) {
      res.push([`${orderNumber.join(", ")}`, title, `${orderCount.join(", ")}`].join("\t"));
    } else {
      const modelCount = modelObj[title];
      if (
        orderCount.reduce((a, b) => +a + +b) !==
        modelCount.reduce((a, b) => +a + +b)
      ) {
        res.push([`${orderNumber.join(", ")}`, title, `${orderCount.join(", ")}`, `/ ${modelCount.join(", ")}`].join("\t"));
      }
    }
  });
  res.push("	");
  Object.keys(modelObj).forEach((title) => {
    if (!orderObj[title]) {
      res.push([title, `${modelObj[title].join(", ")}`].join("\t"));
    }
  }); 
  return res.join("\n");
  // const res = [];
  // Object.keys(orderObj).forEach((title) => {
  //   const orderCount = orderObj[title].map(({ N }) => N);
  //   const orderNumber = orderObj[title].map(({ nr }) => nr);
  //   if (!modelObj[title]) {
  //     res.push([orderNumber, title, orderCount]);
  //   } else {
  //     const modelCount = modelObj[title];
  //     if (
  //       orderCount.reduce((a, b) => +a + +b) !==
  //       modelCount.reduce((a, b) => +a + +b)
  //     ) {
  //       res.push([orderNumber, title, orderCount, modelCount]);
  //     }
  //   }
  // });
  // const res2 = [];
  // Object.keys(modelObj).forEach((title) => {
  //   if (!orderObj[title]) {
  //     res2.push([title, modelObj[title]]);
  //   }
  // });
  // return [res, res2];
};
</script>

<template>
  <section>
    <textarea name="zlec" id="zlec" placeholder="Wstaw ze zlecenia:
100 HKHQ012  1" v-model="simile.zlec"></textarea>
    <textarea name="lista" id="lista" placeholder="Wklej z listy cześci:
HKHQ012 2" v-model="simile.lista"></textarea>
  </section>
  <textarea id="result"
    placeholder="Różnica między zleceniem a listą części">{{ getDiffBetween(simile.zlec, simile.lista) }}</textarea>
</template>

<style scoped>
textarea {
  text-align: left;
  font-size: xx-large;
  height: 50vh;
  width: 40%;
  margin: 20px 10px;
  padding: 10px;
}
</style>
