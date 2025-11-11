<script setup>
import { lidData } from "../../services/data";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order, open } = defineProps(["project", "meta", "order", "open"]);
const filteredLid = () => {
  const res = lidData.filter(
    (lid) =>
      lid.tank === order["tank"]?.tankData?.Size &&
      (lid.type === order["tank"]?.tankData?.type || lid.type === order["tank"]?.tankData?.[meta?.tank]) &&
      (!order["motor0"]?.motorData?.size || lid.motor === order["motor0"]?.motorData?.size) &&
      (!lid.blockType || order["block0"]?.title?.startsWith(lid.blockType)),
  );
  return res.length ? res : lidData.filter((lid) => lid.tank === order["tank"]?.tankData?.Size);
};
</script>

<template>
  <SmthSelector v-bind="{ meta, order }" Name="lid" index="" :logic="filteredLid" />
</template>

<style scoped></style>
