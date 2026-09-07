<script setup>
import { ref } from "vue";
import PumpSelector from "./Selector/PumpSelector.vue";
import TankSelector from "./Selector/TankSelector.vue";
import MotorSelector from "./Selector/MotorSelector.vue";
import CoolerSelector from "./Selector/CoolerSelector.vue";
import ValveSelector from "./Selector/ValveSelector.vue";
import BellhousingSelector from "./Selector/BellhousingSelector.vue";
import OldValveSelector from "./Selector/OldValveSelector.vue";
import BlockSelector from "./Selector/BlockSelector.vue";
import VibroSelector from "./Selector/VibroSelector.vue";
import Order from "../components/Order.vue";
import FilterSelector from "./Selector/FilterSelector.vue";
import GaugeSelector from "./Selector/GaugeSelector.vue";
import AkuSelector from "./Selector/AkuSelector.vue";
import LidSelector from "./Selector/LidSelector.vue";
import ExtraSelector from "./Selector/ExtraSelector.vue";
import Title from "./Title.vue";
import Description from "./Description.vue";
import NonCETOPValveSelector from "./Selector/NonCETOPValveSelector.vue";
import DBDSelector from "./Selector/DBDSelector.vue";
import SelectorTree from "./SelectorTree.vue";

const { project, meta, order, selector, isBtn } = defineProps(["project", "meta", "order", "selector", "isBtn"]);
const emits = defineEmits(["pumpSelected", "projectUpdated", "reload"]);
const powerUnitComponents = [PumpSelector, MotorSelector, BellhousingSelector, VibroSelector];
const blockComponents = [BlockSelector, ValveSelector, NonCETOPValveSelector];
const pumpUnitComponents = [...powerUnitComponents, ...blockComponents];
const otherComponents = [
  TankSelector,
  LidSelector,
  FilterSelector,
  GaugeSelector,
  AkuSelector,
  DBDSelector,
  CoolerSelector,
  ExtraSelector,
  OldValveSelector,
  // HKSHSelector,
];
const powerUnit = () => Object.values(powerUnitComponents).map(({ __name }) => __name);
const block = () => Object.values(blockComponents).map(({ __name }) => __name);
const other = () => Object.values(otherComponents).map(({ __name }) => __name);
const items = () => [...project.flatMap((_, i) => [...powerUnit(), ...block()].map((p) => [p, i])), ...other().map((o, j) => [o, j])];
const activeIndex = ref(items()[0]);
const setActive = ([name, index]) => {
  activeIndex.value = [name, index];
};
if (!selector.length) {
  selector.push(
    {
      name: "powerUnitSelector",
      open: false,
      children: powerUnit().map((name) => ({ name, selected: true })),
    },
    {
      name: "blockUnitSelector",
      open: false,
      children: block().map((name) => ({ name, selected: true })),
    },
    {
      name: "otherUnitsSelector",
      open: false,
      children: other().map((name) => ({ name, selected: true })),
    },
  );
}
const reload = () => emits("reload");
</script>

<template>
  <main>
    <button @click="reload">{{ isBtn ? "Wybrać elementy" : "Wrócić do wyboru elementów" }}</button>
    <SelectorTree v-bind="{ selector }" v-if="isBtn" />
    <div v-else>
      <Title v-bind="{ project, meta, order }" />
      <article class="grid">
        <article class="accordion">
          <div v-for="(powerUNIT, i) in project" :key="i">
            <div
              v-for="sel in pumpUnitComponents"
              class="accordion-item"
              :key="sel.__name"
              @click="() => setActive([sel.__name, i])"
              :class="i === activeIndex[1] && sel.__name === activeIndex[0] && 'active'"
            >
              <component
                v-if="selector.flatMap((item) => item.children).find((child) => child.name === sel.__name)?.selected"
                :is="sel"
                v-bind="{ project, meta, order, i, powerUNIT }"
              />
            </div>
          </div>
          <div
            v-for="(sel, index) in otherComponents"
            :key="sel.__name"
            class="accordion-item"
            @click="() => setActive([sel.__name, index])"
            :class="index === activeIndex[1] && sel.__name === activeIndex[0] && 'active'"
          >
            <component
              v-if="selector.flatMap((item) => item.children).find((child) => child.name === sel.__name)?.selected"
              :is="sel"
              v-bind="{ project, meta, order }"
            />
          </div>
        </article>
        <div class="right mx-auto">
          <Order v-bind="{ project, order }" />
          <Description v-if="order['pump' + 0]?.title && order['motor' + 0]?.title" v-bind="{ order, project }" />
        </div>
      </article>
    </div>
    <!-- <SelectNavbar @nav="(ind) => navPage = navPage.map((_, k) => ind === k)" :navPage="navPage" /> -->
  </main>
</template>

<style scoped>
.grid {
  padding-left: 20px;
  display: grid;
  grid-template-columns: 60% 37%;
  column-gap: 3%;
}

main {
  margin-top: 2px;
}

/* .left {
  width: 75%;
} */

.right {
  /* width: 100%; */
  position: sticky;
  top: 4vh;
  /* left: 65vw; */
  max-height: calc(98vh);
  overflow-y: auto;
  /* background-color: rgba(255, 255, 255, 0.3); */
}

/* .accordion {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.accordion-item {
  border-bottom: 3px solid #ccc;
  overflow: hidden;
  height: 38px;
  font-size: 10px;
  transition: height 0.3s ease-in-out;
  cursor: pointer;
}

.accordion-item.active {
  background-color: #93a199;
  flex: 1;
  font-size: 25px;
  height: inherit;
}

.accordion-header {
  background: #e0e0e0;
  font-weight: bold;
  padding: 1rem;
}

.accordion-content {
  padding: 1rem;
} */
</style>
