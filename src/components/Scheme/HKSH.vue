<script setup>
import { HKSHTitle } from "../../services/functions";
import HKSH1hor from "./HKSH1hor.vue";
import HKSH1ver from "./HKSH1ver.vue";
import HKSH2hor from "./HKSH2hor.vue";
import HKSH2ver from "./HKSH2ver.vue";
import { text } from "../../services/text";

const { x, y, sl, data } = defineProps(["x", "y", "sl", "data"]);
</script>

<template>
  <HKSH1hor v-if="!data.form || (data.form === 'formHorizontal' && data.z === 1)" :x="x" :y="y + sl + 5" :sl="sl" />
  <HKSH2hor v-if="data.form === 'formHorizontal' && data.z === 2" :x="x" :y="y + sl + 5" :sl="sl" />

  <HKSH1ver v-if="data.form === 'formVertical' && data.z === 1" :x="x" :y="y + sl + 5" :sl="sl" />
  <HKSH2ver v-if="data.form === 'formVertical' && data.z === 2" :x="x" :y="y + sl + 5" :sl="sl" />

  <text :x="x + sl / 2" :y="sl / 5" font-family="Arial" :font-size="sl / 12" fill="black" text-anchor="middle">
    {{ HKSHTitle(data) }}
  </text>
</template>

<style scoped></style>
