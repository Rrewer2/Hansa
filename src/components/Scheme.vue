<script setup>
import PumpUnit from "./Scheme/PumpUnit.vue";
import ControlUnit from "./Scheme/ControlUnit.vue";
import Cooler from "./Scheme/Cooler.vue";
import Filter from "./Scheme/Filter.vue";
import NTM from "./Scheme/NTM.vue";
import Tank from "./Scheme/Tank.vue";
import FIBL from "./Scheme/FIBL.vue";
import { getQfromProject, getStandartTank, getT } from "../services/functions";

const { project, meta, order } = defineProps(["project", "meta", "order"]);
const R = () => 60;
const yTank = () => 1300;
const LTank = 1100;
const controlElemLength = (project) => {
  const sectionLength = 320;
  const getSL = (unit) => sectionLength - unit.HKSH.length * 12;
  const getSL1 = (unit) =>
    getSL(unit) * 0.5 * (!unit.DR2type ? 0.5 : unit.DR2type);
  return project.flatMap((powerUnit) =>
    powerUnit.unit.map((unit) => getSL1(unit) + getSL(unit) * unit.HKSH.length),
  );
};
const xControl = (project) =>
  controlElemLength(project).reduce(
    (acc, curr) => [
      ...acc,
      (acc.length ? acc[acc.length - 1] : 0) + curr + 300,
    ],
    [300],
  );
const screenSize =
  1650 + project.flatMap(({ unit }) => unit).length * R() * 0.8;
const tankGap = screenSize - LTank / 2;
const controlGap = (project) => screenSize - xControl(project).at(-1) / 2;
const xFilter = tankGap + LTank - 150;
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :viewBox="`0 0 ${screenSize * 2} ${screenSize}`">
    <ControlUnit v-for="(unit, c) in project.flatMap(({ unit, mount }) =>
      unit.map((el) => ({ ...el, mount })),
    )" :x="(c) => controlGap(project) + xControl(project)[c]" :y="100" v-bind="{ unit, c }" :R="R()" :xT="xFilter"
      :xM="tankGap + 200" :yM="yTank() - 1.25 * R() - 100" />
    <Tank :x="tankGap" :y="yTank()" :L="LTank" :H="() => screenSize - 150 - yTank()"
      :pumps="project.flatMap(({ unit }) => unit)">
      {{
        order.tank?.tankData?.Size ||
        getStandartTank(meta, getT(getQfromProject(project)))?.Size ||
        "___"
      }}L
    </Tank>
    <PumpUnit v-for="(pumps, i) in project" :x="tankGap + 200 + 1000 * i" :y="yTank() - 1.25 * R()" :pumps="pumps.unit"
      :mount="pumps.mount" :R="R()">
      {{ pumps.n }}
    </PumpUnit>
    <FIBL :x="tankGap + LTank - 400" :y="yTank()" :a="R() / 1.5" />
    <NTM :x="tankGap + LTank - 300" :y="yTank()" :a="R() / 1.5" />
    <Cooler v-if="meta.cooler" :x="xFilter" :y="meta.cooler === 2 ? yTank() - 180 : yTank() - 50" :a="R() / 1.5" />
    <Filter :x="xFilter" :y="meta.cooler === 1 ? yTank() - 180 : yTank()" :a="R()" />
  </svg>
</template>

<style scoped></style>
