<script setup>
const { simile } = defineProps(["simile"]);
const getDiffBetween = (orderStr, modelStr) => {
 if (!orderStr.trim().length || !modelStr.trim().length) return '';
 const order = orderStr.split("\n").map(row => row.split('\t'));
 const model = modelStr.split("\n").map(row => row.split('\t'));
 const orderObj = {};
 let KIT = 0;
 order.forEach(([nr, title, N]) => {
 if (!title) return;
 if (title.match(/^KIT/i)) return KIT = N;
 orderObj[title] ? orderObj[title].push({ N: +N, nr }) : orderObj[title] = [{ N: +N, nr }];
 });
 const modelObj = {};
 model.forEach(([title, N]) => {
 if (!title) return;
 if (title.match(/^M\d+[A-Za-z]*/)) return;
 if (title.match(/^rura|wąż/gi)) return;
 const trimTitle = title.trim();
 modelObj[trimTitle] ? modelObj[trimTitle].push(N * (KIT || 1)) : modelObj[trimTitle] = [N * (KIT || 1)];
 }
 );
 // const res = [];
 // Object.keys(orderObj).forEach(title => {
 // const orderCount = orderObj[title].map(({ N }) => N);
 // const orderNumber = orderObj[title].map(({ nr }) => nr);
 // if (!modelObj[title]) {
 // res.push([`${orderNumber.join(', ')}`, title, `${orderCount.join(', ')}`].join('\t'));
 // }
 // else {
 // const modelCount = modelObj[title];
 // if (orderCount.reduce((a, b) => +a + +b) !== modelCount.reduce((a, b) => +a + +b)) {
 // res.push([`${orderNumber.join(', ')}`, title, `${orderCount.join(', ')}`, `/ ${modelCount.join(', ')}`].join('\t'));
 // }
 // }
 // });
 // res.push('	');
 // Object.keys(modelObj).forEach(title => {
 // if (!orderObj[title]) {
 // res.push([title, `${modelObj[title].join(', ')}`].join('\t'));
 // }
 // });
 // return res.join('\n');
 const res = [];
 const orderFixed = Object.keys(orderObj).forEach(title => {
 const orderCount = orderObj[title].map(({ N }) => N);
 const orderNumber = orderObj[title].map(({ nr }) => nr);
 if (!modelObj[title]) {
 res.push([orderNumber, title, orderCount]);
 }
 else {
 const modelCount = modelObj[title];
 if (orderCount.reduce((a, b) => +a + +b) !== modelCount.reduce((a, b) => +a + +b)) {
 res.push([orderNumber, title, orderCount, modelCount]);
 }
 }
 });
 const res2 = [];
 const modelFixed = Object.keys(modelObj).forEach(title => {
 if (!orderObj[title]) {
 res2.push([title, modelObj[title]]);
 }
 });
 return [res, res2];
};
</script>

<template>
  <section>
    <textarea name="zlec" id="zlec" placeholder="Wstaw ze zlecenia:
100 HKHQ012 1" v-model="simile.zlec"></textarea>
    <textarea name="lista" id="lista" placeholder="Wklej z listy cześci:
HKHQ012 2" v-model="simile.lista"></textarea>
  </section>
  <article id="result" class="flex flex-row flex-between container">
    <h1 v-if="!simile.zlec || !simile.lista">Różnica między zleceniem a listą części</h1>
    <div v-for="res, i in getDiffBetween(simile.zlec, simile.lista)">
      <table v-if="!i" v-for="item in res" style="width: 100%; table-layout: fixed;">
        <tbody>
          <tr>
            <td class="text-left" style="width: 20%;">
              {{ Array.isArray(item[0]) ? item[0].join(' , ') : item[0] }}
            </td>
            <td class="text-left" style="width: 40%;">
              {{ item[1] }}
            </td>
            <td style="width: 20%; color: red; -color: black" v-if="item[2]">
              {{ item[2].join(' , ') }}
            </td>
            <td style="width: 20%; color: green">
              {{ item[3] ? item[3].join(' , ') : '' }}
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table" v-else v-for="item in res" style="width: 100%; table-layout: fixed;">
        <tbody>
          <tr>
            <td class="text-left" style="width: 60%;">{{ Array.isArray(item[0]) ? item[0].join(', ') : item[0] }}</td>
            <td style="width: 40%; color: green">{{ item[1].join(' , ') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>

<style scoped>
textarea {
  text-align: left;
  font-size: xx-large;
  height: 40vh;
  width: 40%;
  margin: 20px 10px;
  padding: 10px;
}

.container {
  padding: 0 20vh;
}

.table {
  margin-left: 55px;
}

table {
  width: 40%;
}
</style>
