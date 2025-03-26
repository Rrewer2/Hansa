<script setup>
import { ref } from "vue";
const zlec = ref(``);
const lista = ref(``);
const getDiffBetween = (str1, str2) => {
  if (!str1.trim().length || !str2.trim().length) return '';
  const a1 = str1.split("\n").map(row => row.split('\t'));
  const a2 = str2.split("\n").map(row => row.split('\t'));
  const obj1 = {};
  a1.forEach(([nr, title, N]) => {
    obj1[title] ? obj1[title].push({ N, nr }) : obj1[title] = [{ N, nr }];
  });
  const obj2 = {};
  a2.forEach(([title, N]) => {
    obj2[title] ? obj2[title].push(N) : obj2[title] = [N];
  });
  const res = [];
  Object.keys(obj1).forEach(key => {
    const z1 = obj1[key].map(({ N }) => N);
    const z3 = obj1[key].map(({ nr }) => nr);
    if (!obj2[key]) {
      res.push([`${z3.join(', ')}`, key, `${z1.join(', ')}`].join('\t'));
    }
    else {
      const z2 = obj2[key];
      if (z1.reduce((a, b) => +a + +b) !== z2.reduce((a, b) => +a + +b)) {
        res.push([`${z3.join(', ')}`, key, `${z1.join(', ')}`, `/ ${z2.join(', ')}`].join('\t'));
      }
    }
  });
  res.push('	');
  Object.keys(obj2).forEach(key => {
    if (!obj1[key]) {
      res.push([key, `${obj2[key].join(', ')}`].join('\t'));
    }
  });
  return res.join('\n');
};
</script>

<template>
  <section>
    <textarea name="zlec" id="zlec" placeholder="Wstaw ze zlecenia" v-model="zlec"></textarea>
    <textarea name="lista" id="lista" placeholder="Wklej z listy czesci" v-model="lista"></textarea>
  </section>
  <textarea>{{ getDiffBetween(zlec, lista) }}</textarea>
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
