<script setup>
import { spoolData, HKHMP, HKHQ, HKHR, HKM } from "../../services/data";
import { getTextWithSpace } from "../../services/functions";
import { links } from "../../services/links";
import { text } from "../../services/text";
import Valve from "../Scheme/Valve.vue";
import CopyText from "./CopyText.vue";

const { project, meta, order, i, powerUNIT, open } = defineProps(["project", "meta", "order", "i", "powerUNIT", "open",]);
  
const filteredValves = () => {
  const cetop = (Q) => Q >= 35 ? 5 : 3;
  return powerUNIT.unit.map(({ HKSH, p, Q }, i) => 
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
    return [[ start ], ...filteredValves() ];
  } else {
    order['start' + i] = {};
    return filteredValves()
  };
};
</script>

<template>
  <article>
    <h2 :class="open && 'bgc-g'">
      {{ text("valve") }} <span> {{ order.valve?.title }}</span>
    </h2>
    <table v-if="valves()[0].length">
      <thead>
        <td v-for="item in Object.keys(valves()[0][0])">
          <b><i>{{ text(item) }}</i></b>
        </td>
      </thead>
      <tbody v-for="unit in valves()">
        <tr v-for="{ title, ...rest } in unit">
          <td class="tal">
            <input type="radio" :id="title" @click="order.valve = { title, valveData: { ...rest } }" class="mx" />
            <a v-if="title.includes('HK')" :href="`${links[meta.lang]}${title}`" target="_blank"
              rel="noopener noreferrer">
              {{ getTextWithSpace(title) }}
            </a>
            <span v-else>{{ title }}</span>
            <CopyText :text="title" />
          </td>
          <td v-for="item in Object.values(rest)">{{ item }}</td>
        </tr>
      </tbody>
    </table>
  </article>
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


<!-- <script setup>
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
      order[`valve`+ i + j] = { title: valve?.title, valveData: valve };//TODO: do smth with valve00 and valve0
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
    return filteredValves().flat();
  };
};
</script>

<template>
  <article>
    <SmthSelector v-bind="{ project, meta, order }" Name="valve" :index="i" :logic="valves" />
  </article>
</template>

<style scoped></style> -->
