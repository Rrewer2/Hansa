<script setup>
import { ref } from "vue";
import { spoolData } from "../../services/data";
import { getSmthFromProject, getTextWithSpace } from "../../services/functions";
import { links } from "../../services/links";
import { text } from "../../services/text";
import Valve from "../Scheme/Valve.vue";
import CopyText from "./CopyText.vue";

const { project, meta, order, open } = defineProps(["project", "meta", "order", "open"]);
(() => {
  const list = getSmthFromProject(project).map(({ spool }) => spoolData.find((el) => el.spool === spool));
  const obj = {};
  list.forEach((elem) => {
    if (!elem) return;
    const { title, ...rest } = elem;
    if (obj[title]) {
      obj[title].count++;
    } else {
      obj[title] = { ...rest, count: 1 };
    }
  });
})();
// getSmthFromProject(project, 'spool').map(spool => {
//   order.valve.push({ title: spool });
// });
// const filtered = () => spoolData.filter(({ spool }) => spool === meta.spool).sort((a, b) => a.CETOP - b.CETOP);
const filtered = () => spoolData.filter(({ spool }) => spool === meta.spool);
const set = new Set();
spoolData.forEach(({ spool }) => set.add(spool));
const lineType = ref("pressure");
const q = ref([5, 7, 10, 15, 18, 23, 39, 44, 50, 60, 70]);
const sizesMm = [10, 13, 16, 19, 25, 32, 38, 51, 64];
const sizesCale = ["3/8″", "1/2″", "5/8″", "3/4″", "1″", "1 1/4″", "1 1/2″", "2″", "2 1/2″"];
const velocity = (q, d) => q / 60000 / ((Math.PI * (d / 1000) ** 2) / 4);
const velocityClass = (v, type) => {
  if (type === "suction") {
    return v < 0.5 ? "v-suction-low" : v <= 1.5 ? "v-suction-good" : "v-suction-danger";
  }
  if (type === "return") {
    return v < 2 ? "v-return-low" : v <= 4 ? "v-return-good" : "v-return-danger";
  }
  if (type === "pressure") {
    return v < 3 ? "v-pressure-low" : v <= 5 ? "v-pressure-good" : "v-pressure-danger";
  }
  return "";
};
</script>

<template>
  <article>
    <h2 :class="open && 'bgc-g'">{{ text("valve") }}</h2>
    <div class="grid ml-10">
      <svg
        v-for="spool in set"
        @click="() => (meta.spool = spool)"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 90"
        class="valve"
        :class="spool === meta.spool && 'clicked'"
      >
        <Valve :x="() => 0" :y="() => 5" :data="{ spool }" :sl="() => 200" />
      </svg>
    </div>
    <table>
      <thead></thead>
      <td v-if="filtered().length" v-for="item in Object.keys(spoolData[0]).filter((item) => item !== 'addition')">{{ text(item) }}</td>
      <tbody>
        <tr v-for="{ title, ...rest } in filtered()" :id="title">
          <td class="tal hover">
            <a v-if="title.includes('HK')" :href="`${links[meta.lang]}${title}`" target="_blank" rel="noopener noreferrer">
              {{ getTextWithSpace(title) }}
            </a>
            <span v-else>{{ getTextWithSpace(title) }} </span> <CopyText :text="title" />
          </td>
          <td v-for="el in Object.values(rest).filter((el) => !el.valvePlug)">{{ el }}</td>
        </tr>
      </tbody>
    </table>
  </article>
  <article>
    <table>
      <caption>
        <h3>Prędkość przepływu [m/s] dla wybranych rozmiarów przewodu [mm|cale]</h3>
      </caption>
      <tr>
        <th>
          <p>Natężenie przepływu</p>
          <p>[l/min]</p>
        </th>
        <th v-for="(d, i) in sizesMm" :key="d">
          <p>{{ d }} mm<br />{{ sizesCale[i] }}</p>
        </th>
      </tr>
      <tr v-for="(t, i) in q" :key="i">
        <td><input v-model.number="q[i]" type="number" min="0" max="500" /></td>
        <td v-for="d in sizesMm" :key="d" :class="velocityClass(velocity(t, d), lineType)">
          {{ velocity(t, d).toFixed(2) }}
        </td>
      </tr>
    </table>
    <br />
    <div class="line-type">
      <span>Rodzaj przewodu:</span>
      <label>
        <input type="radio" value="pressure" v-model="lineType" />
        Przewód tłoczny
      </label>
      <label>
        <input type="radio" value="return" v-model="lineType" />
        Przewód powrotny
      </label>
      <label>
        <input type="radio" value="suction" v-model="lineType" />
        Przewód ssawny
      </label>
    </div>
    <br />
    <div v-if="lineType === 'suction'">
      <p>Przewód ssawny - <span class="v-suction-good">Zalecana prędkość 0,5 - 1,5 m/s</span></p>
      <p>Przewód ssawny - <span class="v-suction-low">Niezalecana prędkość poniżej 0,5 m/s</span></p>
      <p>Przewód ssawny - <span class="v-suction-danger">Niezalecana prędkość powyżej 1,5 m/s</span></p>
    </div>
    <div v-if="lineType === 'return'">
      <p>Przewód powrotny - <span class="v-return-good">Zalecana prędkość 2 - 4 m/s</span></p>
      <p>Przewód powrotny - <span class="v-return-low">Niezalecana prędkość poniżej 2 m/s</span></p>
      <p>Przewód powrotny - <span class="v-return-danger">Niezalecana prędkość powyżej 4 m/s</span></p>
    </div>
    <div v-if="lineType === 'pressure'">
      <p>Przewód tłoczny - <span class="v-pressure-good">Zalecana prędkość 3 - 5 m/s</span></p>
      <p>Przewód tłoczny - <span class="v-pressure-low">Niezalecana prędkość poniżej 3 m/s</span></p>
      <p>Przewód tłoczny - <span class="v-pressure-danger">Niezalecana prędkość powyżej 5 m/s</span></p>
    </div>
    <br />
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

.v-suction-low {
  color: #8ab4d6;
}

.v-suction-good {
  background: #8ab4d6;
  color: white;
}

.v-suction-high {
  color: red;
}

.v-suction-danger {
  background: red;
  color: white;
}

.v-return-low {
  color: #7bbf7b;
}

.v-return-good {
  background: #7bbf7b;
  color: white;
}

.v-return-high {
  color: #e67e22;
}

.v-return-danger {
  background: red;
  color: white;
}

.v-pressure-low {
  color: #e67e22;
}

.v-pressure-good {
  background: #8ab4d6;
  color: white;
}

.v-pressure-high {
  color: red;
}

.v-pressure-danger {
  background: red;
  color: white;
}

td {
  padding: 0 30px;
}

.line-type {
  display: flex;
  align-items: center;
  gap: 20px;
}

.line-type label {
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  min-width: 30px;
}
</style>
