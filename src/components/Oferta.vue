<script setup>
import { ref } from "vue";
const zlec = ref(`100	HKKA1	74
200	HKKA2	69
300	HKKA3	64
400	HKKA4	59
500	HKKA5	54
600	HKKA6	49
700	HKKA5	44
800	HKKA8	39
900	HKKA9	34
1000	HKKA1	29
1100	HKKA11	24
1200	HKKA12	19
1300	HKKA13	14
1400	HKKA13	10`);
const lista = ref(`HKKA1	73
HKKA2	69
HKKA3	64
HKKA4	93
HKKA5	54
HKKA6	21
HKKA5	44
HKKA8	39
HKKA9	34
HKKA7	2
HKKA11	24
HKKA17	2
HKKA17	22`);
const getDiffBetween = (A1, A2) => {
  const a1 = A1.split("\n").map(row => row.split('\t'));
  const a2 = A2.split("\n").map(row => row.split('\t'));
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

div {
  height: 30vh;
}
</style>
