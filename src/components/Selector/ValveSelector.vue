<script setup>
import { spoolData, HKHMP, HKHQ, HKHR, HKM } from "../../services/data";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order, i, powerUNIT, open } = defineProps(["project", "meta", "order", "i", "powerUNIT", "open",]);
  
const filteredValves = () => {
  const cetop = (Q) => Q >= 35 ? 5 : 3;
  return powerUNIT.unit.map(({ HKSH, Q }, i) => 
    HKSH.map(({ throttle, check, directPress, directPressValue, spool }, j) => {
      const CETOP = cetop(Q);
      const hq = throttle ? HKHQ.find(el => el.type === throttle && el.CETOP === CETOP) : {};
      const hr = check ? HKHR.find(el => el.type === check && el.CETOP === CETOP) : {};
      const hmp = directPress ? HKHMP.find(el => el.type === directPress && el.pmax > directPressValue && el.CETOP === CETOP) : {};
      const valve = spoolData.find((el) => el.spool === spool && (!Q || el.CETOP === CETOP));
      const bolt = HKM.find((el) => el.L === (hq.h ?? 0) + (hr.h ?? 0) + (hmp.h ?? 0) + (valve.CETOP === 3 ? 30 : 40) && el.CETOP === CETOP);
      order[`throttle`+ i + j] = { title: hq.title };
      order[`check`+ i + j] = { title: hr.title };
      order[`directPress`+ i + j] = { title: hmp.title };
      order[`valve`+ i + j] = { title: valve?.title, valveData: valve };
      order[`bolt`+ i + j] = { title: bolt?.title };
      return valve
    }));
};

const GA = () => spoolData.find(({ spool }) => spool === "GA");
const valves = () => {
  if (powerUNIT.unit[i].DR2type === 3) {
    const start = GA();
    order['start' + i] = { title: start.title };
    return [[ start ], ...filteredValves() ].flat();
  } else {
    order['start' + i] = {};
    return filteredValves().flat()
  };
};
</script>

<template>
  <article>
    <SmthSelector v-bind="{ project, meta, order }" Name="valve" :index="i" :logic="valves" />
  </article>
</template>

<style scoped></style>
