<script setup>
import { extra } from "../../services/data";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order } = defineProps(["project", "meta", "order"]);
</script>

<template>
  <SmthSelector v-for="(item, i) in extra" v-bind="{ meta, order }" :Name="i" index="" :logic="() => item" />
</template>

<style scoped></style>
