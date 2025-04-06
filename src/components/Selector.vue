<script setup>
import { ref } from 'vue';
import PumpSelector from './Selector/PumpSelector.vue';
import TankSelector from './Selector/TankSelector.vue';
import MotorSelector from './Selector/MotorSelector.vue';
import CoolerSelector from './Selector/CoolerSelector.vue';

const { project, meta, order } = defineProps(["project", "meta", "order"]);
const selectorNav = ref([true, false, false]);
const emits = defineEmits(["pumpSelected", "projectUpdated"]);
// const selectData = ['Pompa', 'Silnik', 'Kielich / sprzęgło', 'Zbiornik', 'Rozdzielacz', 'Chłodnica', 'Filtr'];
</script>

<template>
  <main>
    <div v-for="powerUNIT, i in project">
      <PumpSelector v-for="pump, k in powerUNIT.unit" :project="project" :order="order" :pump="pump" :i="i" :k="k"
        :meta="meta" />
      <MotorSelector :project="project" :meta="meta" :order="order" :powerUNIT="powerUNIT" :i="i" />
    </div>
    <TankSelector :project="project" :meta="meta" :order="order" />
    <CoolerSelector :project="project" :meta="meta" :order="order" />

    <!-- <SelectNavbar @nav="(ind) => navPage = navPage.map((_, k) => ind === k)" :navPage="navPage" /> -->
    {{ order }}
  </main>
</template>

<style scoped></style>
