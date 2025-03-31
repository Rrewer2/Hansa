<script setup>
import { ref } from 'vue';
import PumpSelector from './Selector/PumpSelector.vue';
import TankSelector from './Selector/TankSelector.vue';

const { project, meta, order } = defineProps(["project", "meta", "order"]);
const selectorNav = ref([true, false, false]);
// const selectData = ['Pompa', 'Silnik', 'Kielich / sprzęgło', 'Zbiornik', 'Rozdzielacz', 'Chłodnica', 'Filtr'];
</script>

<template>
  <TankSelector :project="project" :meta="meta" @tankSelected="(tank) => order.tank = tank"
    :open="selectorNav[0] || order.tank" />
  <PumpSelector :project="project" />
  <h2>Silnik</h2>
  <h2>Kielich / sprzęgło</h2>
  <!-- <SelectNavbar @nav="(ind) => navPage = navPage.map((_, k) => ind === k)" :navPage="navPage" /> -->
</template>

<style scoped></style>
