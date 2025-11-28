<script setup>
import PumpUnit from "./Scheme/PumpUnit.vue";
import ControlUnit from "./Scheme/ControlUnit.vue";
import Cooler from "./Scheme/Cooler.vue";
import Filter from "./Scheme/Filter.vue";
import NTM from "./Scheme/NTM.vue";
import Tank from "./Scheme/Tank.vue";
import FIBL from "./Scheme/FIBL.vue";
import { reducedPower, round } from "../services/functions";
import CoolerUnit from "./Scheme/CoolerUnit.vue";

const { project, meta, order } = defineProps(["project", "meta", "order"]);
const R = () => 60;
const LTank = 1200;
const sectionLength = 350;
const getSL = () => sectionLength - project[0].unit[0].HKSH.length * 12;
const getSh = () => getSL() * 0.35;
const controlElemLength = (project) => {
  const getSL1 = (unit) => getSL(unit) * (0.5 * (!unit.DR2type ? 0.5 : unit.DR2type) + unit.start);
  return project.flatMap((powerUnit) => powerUnit.unit.map((unit) => getSL1(unit) + getSL(unit) * unit.HKSH.length));
};
const xControl = (project) =>
  controlElemLength(project).reduce((acc, curr) => [...acc, (acc.length ? acc[acc.length - 1] : 0) + curr + 400], [300]);
const aboveBlock = () =>
  project[0].unit
    .flatMap(({ HKSH }) => HKSH.map(({ nonReturn, flowControl, balance }) => !!nonReturn + !!flowControl + !!balance))
    .reduce((cur, prev) => Math.max(cur, prev), 0);
const belowBlock = () =>
  project[0].unit
    .flatMap(({ HKSH }) => HKSH.map(({ throttle, check, directPress, counter }) => !!throttle + !!check + !!directPress + !!counter))
    .reduce((cur, prev) => Math.max(cur, prev), 0);
const yTank = () => 1000 + belowBlock() * getSh() + aboveBlock() * getSh();
const screenSizex = () => 1 * (1600 + project.flatMap(({ unit }) => unit).length * R() * 0.8);
const screenSizey = () => 1300 + belowBlock() * getSh() + aboveBlock() * getSh() + project.flatMap(({ unit }) => unit).length * R() * 0.8;
const xTank = screenSizex() / 2 - LTank / 2;
const xControlUnit = (project) => screenSizex() / 2 - xControl(project).at(-1) / 2;
const xFilter = xTank + LTank - 126;
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :viewBox="`0 0 ${screenSizex()} ${screenSizey()}`">
    <ControlUnit
      v-for="(unit, c) in project.flatMap(({ unit, mount }) => unit.map((el) => ({ ...el, mount })))"
      :x="() => xControlUnit(project) + xControl(project)[c]"
      :y="() => aboveBlock() * getSh() + 100"
      v-bind="{ unit, c, order, aboveBlock, belowBlock, R }"
      :xT="xFilter"
      :xM="xTank + 200"
      :yM="yTank() - 1.25 * R() - 100"
    />
    <Tank
      :x="xTank"
      :y="yTank()"
      :L="LTank"
      :H="() => screenSizey() - 100 - yTank()"
      :pumps="project.flatMap(({ unit }) => unit)"
      :order="order"
    >
      {{ order.tank?.tankData?.Size }}
      <tspan v-if="order.tank?.tankData?.Size">L</tspan>
    </Tank>
    <PumpUnit
      v-for="(pumps, i) in project"
      :x="xTank + 200 + 1000 * i"
      :y="yTank() - 1.25 * R()"
      :pumps="pumps.unit"
      :mount="pumps.mount"
      :R="R()"
      :dir="order['pump' + 0]?.pumpData?.out?.startsWith('Bore')"
      :text="order['motor' + i]?.motorData?.power ? order['motor' + i].motorData.power : round(reducedPower(pumps.unit))"
    >
      {{ order["motor" + i]?.motorData?.n || pumps.n }}
    </PumpUnit>
    <FIBL
      :x="xTank + 55"
      :y="yTank()"
      :a="R() * 0.75"
      :text="(+order.ventilation?.title?.match(/(P10|P03)/)?.[0]?.slice(1) || 10) + 'µm'"
    />
    <NTM :x="xTank + LTank - 300" :y="yTank()" :a="R() / 1.5" />
    <template v-if="meta.cooler">
      <CoolerUnit
        v-if="meta.cooler && order.cooler?.title?.startsWith('HKS3E')"
        :x="xTank + LTank - 550"
        :y="yTank() - 50"
        :a="R() / 1.5"
        :join="order.cooler?.coolerData?.join ? order.cooler?.coolerData?.join?.split('″')[0] + '″' : ''"
      />
      <Cooler
        v-else
        :x="xFilter"
        :y="meta.cooler === 2 ? yTank() - 200 : yTank() - 25"
        :a="R() / 1.5"
        :join="order.cooler?.coolerData?.join ? order.cooler?.coolerData?.join?.split('″')[0] + '″' : ''"
      />
    </template>
    <Filter
      :x="xFilter"
      :y="meta.cooler === 1 ? yTank() - 190 : yTank() - 20"
      :a="R()"
      :text="(+order.filter?.filterData?.filterGrade?.slice(1) || 10) + 'µm'"
      :join="order.filter?.filterData?.join ? order.filter?.filterData?.join?.split('″')[0] + '″' : ''"
      :hole="!!order.filter?.filterData?.hole"
    />
  </svg>
</template>

<style scoped></style>
