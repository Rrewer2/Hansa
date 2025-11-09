<script setup>
import { HKSHTitle } from "../../services/functions";
import HKSH1 from "./HKSH1.vue";
import HKSH2 from "./HKSH2.vue";
import HKSH3 from "./HKSH3.vue";

const { x, y, sl, sh, data } = defineProps(["x", "y", "sl", "sh", "data"]);
</script>

<template>
  <HKSH1 v-if="data.z === 1" :x="x" :y="y" :sl="sl" :sh="sh" :data="data" />
  <HKSH2 v-if="data.z === 2" :x="x" :y="y" :sl="sl" :sh="sh" :data="data" />
  <HKSH3 v-if="data.z > 2" :x="x" :y="y" :sl="sl" :sh="sh" :data="data" />

  <text :x="x" :y="y - sh * 1.25" font-family="Arial" :font-size="sl / 12" fill="black" text-anchor="middle">
    {{ HKSHTitle(data) }}
  </text>
</template>

<style scoped></style>
