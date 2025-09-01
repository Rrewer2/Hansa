<script setup>
import { ref } from "vue";
import PumpSelector from "./Selector/PumpSelector.vue";
import TankSelector from "./Selector/TankSelector.vue";
import MotorSelector from "./Selector/MotorSelector.vue";
import CoolerSelector from "./Selector/CoolerSelector.vue";
import ValveSelector from "./Selector/ValveSelector.vue";
import BellhousingSelector from "./Selector/BellhousingSelector.vue";
import CouplingSelector from "./Selector/CouplingSelector.vue";
import BlockSelector from "./Selector/BlockSelector.vue";
import VibroSelector from "./Selector/VibroSelector.vue";

const { project, meta, order } = defineProps(["project", "meta", "order"]);
const selectorNav = ref([true, false, false]);
const emits = defineEmits(["pumpSelected", "projectUpdated"]);
// const selectData = ['Pompa', 'Silnik', 'Kielich / sprzęgło', 'Zbiornik', 'Rozdzielacz', 'Chłodnica', 'Filtr'];
</script>

<template>
  <main>
    <div v-for="(powerUNIT, i) in project">
      <PumpSelector v-bind="{ project, meta, order, i, powerUNIT }" />
      <MotorSelector v-bind="{ project, meta, order, i, powerUNIT }" />
      <BellhousingSelector v-bind="{ project, meta, order, i, powerUNIT }" />
      <CouplingSelector v-bind="{ project, meta, order, i, powerUNIT }" />
      <VibroSelector v-bind="{ project, meta, order, i, powerUNIT }" />
    </div>
    <TankSelector v-bind="{ project, meta, order }" />
    <CoolerSelector v-bind="{ project, meta, order }" />
    <ValveSelector v-bind="{ project, meta, order }" />
    <BlockSelector v-bind="{ project, meta, order }" />

    <!-- <SelectNavbar @nav="(ind) => navPage = navPage.map((_, k) => ind === k)" :navPage="navPage" /> -->
  </main>
</template>

<style scoped></style>
