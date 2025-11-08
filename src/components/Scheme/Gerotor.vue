<script setup>
import { HKSHTitle } from "../../services/functions";
import Gerotor1 from "./Gerotor1.vue";

const { x, y, sl, sh, data } = defineProps(["x", "y", "sl", "sh", "data"]);
</script>

<template>
  <Gerotor1 v-if="data.z === 1" :x="x" :y="y" :sl="sl" :sh="sh" :data="data" />

  <text :x="x" :y="y - sh * 2" font-family="Arial" :font-size="sl / 12" fill="black" text-anchor="middle">
    {{ HKSHTitle(data) }}
  </text>
</template>

<style scoped></style>
