<script setup>
import { spoolData, HKHMP } from "../../services/data";
import { getSmthFromProject, getTextWithSpace } from "../../services/functions";
import { links } from "../../services/links";
import { text } from "../../services/text";
import Valve from "../Scheme/Valve.vue";
import CopyText from "./CopyText.vue";

const { project, meta, order, i, powerUNIT, open } = defineProps(["project", "meta", "order", "i", "powerUNIT", "open",]);
  
const filteredValves = () => {
  powerUNIT.unit.map(({ HKSH, p }) => 
    HKSH.map(({ throttle, check, directPress }) => {
      order.throttle = throttle ? { title: text('throttle') + throttle} : undefined;
      order.check = check ? { title: text('check') + check} : undefined;
      order.directPress = directPress ? { title: HKHMP.find(el => el.type === directPress && el.pmax > p)?.title } : undefined; //TODO: change p to directPress pressure
    }));
  return powerUNIT.unit.map(({ Q, HKSH }, i) => 
    HKSH.map(({ spool }) => 
      spoolData.find(valve => 
        (!Q || (valve.CETOP === 5 && Q >= 35) || (valve.CETOP === 3 && Q < 35)) && valve.spool === spool)));
};

const GA = () => spoolData.find(({ spool }) => spool === "GA");
const valves = () => powerUNIT.unit[i].DR2type === 3 ? [[ GA() ], ...filteredValves() ] : filteredValves();
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
