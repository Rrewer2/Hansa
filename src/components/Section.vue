<script setup>
import Gerotor from "./Gerotor.vue";
import Hydrocylinder from "./Hydrocylinder.vue";

const { HKSH, pumpData } = defineProps(["HKSH", "pumpData"]);
</script>

<template>
  <Gerotor v-if="HKSH.id.startsWith('g')" v-bind="{ HKSH, pumpData }"><slot></slot></Gerotor>
  <Hydrocylinder v-else v-bind="{ HKSH, pumpData }"><slot></slot></Hydrocylinder>
</template>

<style scoped></style>
