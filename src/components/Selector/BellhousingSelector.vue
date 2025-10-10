<script setup>
import { bellhousingData, manifoldData, couplingData, couplingsKitData } from "../../services/data";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order, powerUNIT, i } = defineProps(["project", "meta", "order", "powerUNIT", "i"]);

const filteredBellhousing = () => {
  const data = order[`motor${i}`]?.motorData?.mount.at(-1) === "4" ? manifoldData : bellhousingData;
  return data.filter(({ group, size, holePattern, pump, shaft }) => {
    return (
      holePattern === order[`pump${i}`]?.pumpData?.holePattern &&
      size === order[`motor${i}`]?.motorData?.size &&
      (!group || group === order[`pump${i}`]?.pumpData?.group) &&
      (!shaft || shaft === order[`pump${i}`]?.pumpData?.shaft) &&
      (!pump || pump.split(",").some((p) => order[`pump${i}`]?.title?.startsWith(p)))
    );
  });
};

const pattern = () => {
  const obj = {};
  [...bellhousingData, ...manifoldData].forEach(({ holePattern, group }) => {
    if (meta.pumpType === "piston" && group === undefined && !obj[holePattern]) obj[holePattern] = "";
    if (meta.pumpType === "gears" && group !== undefined && !obj[holePattern]) obj[holePattern] = "";
  });
  return ["", ...Object.keys(obj)];
};
const filteredCoupling = () => {
  const data = order[`motor${i}`]?.motorData?.mount.at(-1) === "4" ? couplingsKitData : couplingData;
  return data.filter(({ group, size, shaft, pump }) => {
    return (
      size === order[`motor${i}`]?.motorData?.size &&
      (!shaft || shaft === order[`pump${i}`]?.pumpData?.shaft) &&
      (!group || group === order[`pump${i}`]?.pumpData?.group) &&
      (!pump || order[`pump${i}`]?.title?.startsWith(pump))
    );
  });
};
</script>

<template>
  <SmthSelector v-bind="{ meta, order }" Name="bellhousing" :index="i" :logic="filteredBellhousing" />
  <SmthSelector v-bind="{ meta, order }" Name="coupling" :index="i" :logic="filteredCoupling" />
</template>

<style scoped></style>
