<script lang="js" setup>
import { ref, provide } from "vue";
import PumpUnit from "./components/PumpUnit.vue";
import { getId } from "./services/functions";
import Navbar from "./components/Navbar.vue";
import Title from "./components/Title.vue";
import Scheme from "./components/Scheme.vue";
import Order from "./components/Order.vue";
import Selector from "./components/Selector.vue";
import PumpUnitTitle from "./components/PumpUnitTitle.vue";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
import Simile from "./components/Simile.vue";
import { text } from "./services/text";

const simile = ref({ zlec: "", lista: "" });

const cylInit = {
  D: 100,
  d: 60,
  L: 500,
  mountA: "2",
  mountB: "2",
  z: 1,
  form: "formHorizontal",
  spool: "G",
  throttle: "",
  check: "",
  directPress: "",
};
const pumpInit = { Q: "", p: "", DR2type: 1, DBD: "" };
const getNewPump = () => ({
  ...pumpInit,
  id: getId("p"),
  HKSH: [{ ...cylInit, id: getId("c") }],
});
const project = ref([]);
const meta = ref({ tank: "RA", cooler: 1, pumpType: "gears", spool: "G", lang: 'pl' });
provide('meta', meta);
const order = ref({});
const getNewPowerUnit = () =>
  project.value.push({
    id: getId("u"),
    unit: [getNewPump()],
    mount: "",
    n: 1500,
  });
getNewPowerUnit();
const addCyl = (k, i) =>
  project.value[k].unit[i].HKSH.push(
    project.value[k].unit[i].HKSH.length
      ? {
          ...project.value[k].unit[i].HKSH.at(-1),
          id: getId("c"),
        }
      : { ...cylInit, id: getId("c") },
  );

const addPump = (k) => project.value[k].unit.push(getNewPump());
const addPumpSame = (k) =>
  project.value[k].unit.push({
    ...getNewPump(),
    HKSH: project.value[k].unit.at(-1).HKSH,
    same: true,
  });
const delPump = (k, x) =>
  (project.value[k].unit = project.value[k].unit.filter(({ id }) => id !== x));
const delUnit = (k) =>
  (project.value = project.value.filter((_, i) => i !== k));
const navPage = ref([false, false, true, false, false]);
</script>

<template>
  <main class="app">
    <article v-if="navPage[0]">
      <Title v-bind="{ project, meta, order }" />

      <section v-for="({ id, unit }, k) in project" class="border px-5 my-2">
        <div :key="id">
          <PumpUnitTitle v-bind="{ project, k, order }" :btnDisabled="project.length < 2" @delUnit="delUnit" />
          <div v-for="(_, i) in unit" class="border-l pl-25 my-2">
            <PumpUnit :key="unit[i].id" :pumpData="unit[i]" v-bind="{ project, order, i, k }"
              @addCyl="() => addCyl(k, i)" :btnDisabled="unit.length < 2" @delPump="() => delPump(k, unit[i].id)" />
          </div>
          <div class="flex-row flex-left pl-25">
            <button @click="() => addPump(k)" class="btn-add my-2">
              + {{ text("separatePump", meta) }}
            </button>
            <button @click="() => addPumpSame(k)" class="btn-add my-2">
              + {{ text("samePump", meta) }}
            </button>
          </div>
        </div>
      </section>

      <div class="flex-row flex-left my-2">
        <button @click="getNewPowerUnit" class="btn-add">
          + {{ text("pumpUnit", meta) }}
        </button>
      </div>
      <Scheme class="schemeMin" v-bind="{ project, meta, order }" />
    </article>
    <Scheme class="scheme" v-if="navPage[1]" v-bind="{ project, meta, order }" />

    <Selector v-if="navPage[2]" v-bind="{ project, meta, order }" />

    <Order v-if="navPage[3]" v-bind="{ order }" />
    <Simile v-if="navPage[4]" v-bind="{ simile }" />
  </main>
  <Navbar @nav="(ind) => (navPage = navPage.map((_, k) => ind === k))" :navPage="navPage" />
  <LanguageSwitcher :meta="meta" />
  <!-- <div>project {{ project }}</div>
    <div>order {{ order }}</div>
    <div>meta {{ meta }}</div> -->
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
}

.app {
  background-color: rgba(14, 44, 14, 0.25);
  min-height: 100vh;
  padding: 5px;
}

article,
section {
  font-size: 20px;
  padding: 5px;
}

svg {
  display: block;
  /* width: 100%; */
  /* position: absolute; */
  /* border: #ffc67a solid 2px; */
}

input[type="number"],
select {
  border: none;
  border-radius: 4px;
  min-height: 2.5vh;
  font-size: 2vh;
  max-width: 140px;
  min-width: 85px;
  width: 95px;
}

select {
  width: auto;
}

button {
  margin: 5px;
  padding: 5px;
  min-width: 30px;
  min-height: 30px;
  border-radius: 5px;
  background-color: #d25959;
  border: 1px solid;
  color: aliceblue;
  cursor: pointer;
}

button.btn-add {
  background-color: #356c2b;
  color: aliceblue;
  transition: 0.2s;
}

button:hover {
  background-color: #ef1c1c;
  color: aliceblue;
  transition: 0.2s;
}

button:hover.btn-add {
  background-color: #44d82a;
  color: aliceblue;
  transition: 0.2s;
}

button:disabled,
button:disabled:hover {
  cursor: default;
  background-color: #a58282;
}

input[type="radio"] {
  margin-right: 10px;
}

/* h2,
h3 {
    padding-top: 20px;
} */

table {
  margin: 0 20 0 20;
  padding-top: 20px;
}

/* span {
    margin-left: 20px;
} */

td {
  border: 0.5px solid grey;
  /* width: 15%; */
  padding: 0 10px;
}

.btn-add {
  padding: 0 10px;
}

.flex-row {
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
  align-items: center;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-left {
  justify-content: left;
}

.flex-center {
  justify-content: center;
}

.flex-between {
  justify-content: space-between;
}

.border {
  border: 1px solid;
}

.border-no {
  border: 1px solid rgba(0, 0, 0, 0);
}

.border-bottom-no {
  border-bottom: none;
}

.bgc-w {
  background-color: #fef6c6;
}

.bgc-g {
  background-color: #c7ecf354;
}

.pl-25 {
  padding-left: 25px;
}

.px-5 {
  padding: 0 5px;
}

.border-l {
  border: solid 0.5px;
}

.text-left {
  text-align: left;
}

.error {
  border: solid 1px red;
}

.yellow {
  border: solid 1px yellow;
}

.my-2 {
  margin: 3px 0;
}

.ml-5 {
  margin-left: 5px;
}

.ml-10 {
  margin-left: 10px;
}

.mr-100 {
  margin-right: 100px;
}

.invisible {
  display: none;
}

.scheme {
  height: 95vh;
  width: 95vw;
  /* background-color: #969696; */
}

.schemeMin {
  height: 60vh;
  width: 80vw;
  /* position: fixed;
    background-color: rgb(255, 255, 255, 0.7);
    top: 40px;
    right: 0;
    height: 50vh;
    width: 30vw; */
}

.h-100 {
  height: 100%;
}

.inline {
  display: inline-block;
  /* padding-top: 20px;
    padding-left: 80px; */
}

.w-75 {
  min-width: 75px;
}

.w-100 {
  width: 100%;
}

.tal {
  text-align: left;
}

.mx {
  padding: 10;
}
</style>
