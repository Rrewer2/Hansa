<script setup>
import { ref } from "vue";
import { akuData, akuSafetyData } from "../../services/data";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order } = defineProps(["project", "meta", "order", "powerUNIT", "i"]);

const filteredAku = () => {
  return akuData.filter(({ title, pmax, q, threadA, threadC }) => 
      pmax > project[0]?.unit[0]?.p * 1.3
    );
};
const after = () => {
  //300 barolitrow max!
  //order[`xvrBlockT${k}`] = xvrBlockT ? { title: xvrBlockT.title, xvrBlockTData: xvrBlockT } : {};
};
</script>

<template>akuData {{ akuData }}
  </br>
  filteredAku {{ filteredAku() }}
  <SmthSelector
    v-if="true"
    v-bind="{ meta, order }"
    Name="aku"
    :index="ind"
    :logic="() => filteredAku"
    :after="() => after()"
  >
  </SmthSelector>
</template>
<style scoped></style>
