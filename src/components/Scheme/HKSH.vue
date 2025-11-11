<script setup>
import { GerotorTitle, HKSHTitle } from "../../services/functions";
import Gerotor from "./Gerotor.vue";
import HKSH1 from "./HKSH1.vue";
import HKSH2 from "./HKSH2.vue";
import HKSH3 from "./HKSH3.vue";

const { x, y, sl, sh, data } = defineProps(["x", "y", "sl", "sh", "data"]);
</script>

<template>
  <Gerotor v-if="data.CC" v-bind="{ x, y, sl, sh, data }" />
  <HKSH1 v-else-if="data.z === 1" v-bind="{ x, y, sl, sh, data }" />
  <HKSH2 v-else-if="data.z === 2" v-bind="{ x, y, sl, sh, data }" />
  <HKSH3 v-else-if="data.z > 2" v-bind="{ x, y, sl, sh, data }" />

  <text :x="x" :y="y - sh * 1.25" font-family="Arial" :font-size="sl / 12" fill="black" text-anchor="middle">
    {{ data.CC ? GerotorTitle(data) : HKSHTitle(data) }}
  </text>
</template>

<style scoped></style>
