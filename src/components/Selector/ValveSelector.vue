<script setup>
import { spoolData, HKHMP, HKHQ, HKHR, HKM } from "../../services/data";
import { getQfromProject } from "../../services/functions";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order, i, powerUNIT, open } = defineProps(["project", "meta", "order", "i", "powerUNIT", "open",]);
const isQFit = (Q, el) => (!order['block' + i]?.blockData?.cetop || order['block' + i]?.blockData?.cetop === el.CETOP) && (!Q || (el.CETOP === 5 && Q > 34) || (el.CETOP === 3 && Q < 35));
const filteredValves = () => powerUNIT.unit.flatMap(({ HKSH, Q }, j) => 
  HKSH.map(({ throttle, check, directPress, directPressValue, spool }, k) => {
    return ({
    ['throttle' + i + j + k]: () => HKHQ.filter(el => el.type === throttle && isQFit(Q, el)),
    ['check' + i + j + k]: () => HKHR.filter(el => el.type === check && isQFit(Q, el)),
    ['directPress' + i + j + k]: () => HKHMP.filter(el => el.type === directPress && isQFit(Q, el) && el.pmax > directPressValue),
    ['valve' + i + j + k]: () => spoolData.filter((el) => el.spool === spool && isQFit(Q, el))
  })}));

const getBolt = () => {
  const Q = getQfromProject(project);
  const keys = filteredValves().map(el => Object.keys(el)).map(([first]) => first.replace(/\D/g, ''));
  const arrayH = filteredValves().map(el => Object.keys(el).map(elem => order[elem]?.[elem.replace(/[^a-zA-Z]+/g, '') + 'Data']?.h ?? 0)).map(row => row.reduce((a,b) => a+b));
  const bolts = arrayH.map(length => HKM.find((el) => el.L === length && isQFit(Q[i], el)));
  bolts.forEach((bolt, i) => order[`bolt` + keys[i]] = { title: bolt?.title });
};

const filteredStart = () => powerUNIT.unit.flatMap(({ startValve, Q }) => 
  spoolData.filter(({ spool, CETOP }) => spool === startValve && (!Q || (CETOP === 5 && Q > 34) || (CETOP === 3 && Q < 35))));

const boltStart = () => {
  const bolt = HKM.find((el) => el.L === order['start' + i]?.startData?.h && el.CETOP === order['start' + i]?.startData?.CETOP);
  order['boltStart' + i] = { title: bolt?.title };
};
</script>

<template>
  <div v-for="item, index in filteredValves()">
    <div v-for="_, key in item">
      <SmthSelector v-bind="{ project, meta, order }" :Name="key.replace(/[^a-zA-Z]+/g, '')"
        :index="key.replace(/\D/g, '')" :logic="() => filteredValves()[index][key]()" :after="() => getBolt(index)" />
    </div>
  </div>
  <div v-if="powerUNIT?.unit[i]?.start">
    <SmthSelector v-bind="{ project, meta, order }" Name="start" :index="i" :logic="filteredStart" :after="boltStart" />
  </div>
</template>

<style scoped>
.valve {
  margin: 10px;
  cursor: pointer;
  transition: all 0.1s ease;
}

.valve:hover {
  margin: 8px;
  border: 1px solid green;
  background-color: rgba(81, 158, 60, 0.25);
}

.clicked {
  background-color: rgba(201, 119, 179, 0.25);
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.hover:hover {
  background-color: #fff;
}
</style>