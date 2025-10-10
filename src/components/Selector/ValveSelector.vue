<script setup>
import { spoolData, HKHMP, HKHQ, HKHR, HKM, spoolTypes } from "../../services/data";
import InputItem from "../InputItem.vue";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order, i, powerUNIT, open } = defineProps(["project", "meta", "order", "i", "powerUNIT", "open"]);
const isQFit = (el) =>
  (!order["block" + i]?.blockData?.cetop || order["block" + i]?.blockData?.cetop === el.CETOP) && (!meta.CETOP || el.CETOP === meta.CETOP);
const filteredValves = () =>
  powerUNIT.unit.flatMap(({ HKSH }, j) =>
    HKSH.map(({ throttle, check, directPress, directPressValue, spool }, k) => {
      return {
        ["throttle" + i + j + k]: () => HKHQ.filter((el) => el.type === throttle && isQFit(el)),
        ["check" + i + j + k]: () => HKHR.filter((el) => el.type === check && isQFit(el)),
        ["directPress" + i + j + k]: () => HKHMP.filter((el) => el.type === directPress && isQFit(el) && el.pmax > directPressValue),
        ["valve" + i + j + k]: () => spoolData.filter((el) => el.spool === spool && isQFit(el)),
      };
    }),
  );

const getBolt = () => {
  const keys = filteredValves()
    .map((el) => Object.keys(el))
    .map(([first]) => first.replace(/\D/g, ""));
  const arrayH = filteredValves()
    .map((el) => Object.keys(el).map((elem) => order[elem]?.[elem.replace(/[^a-zA-Z]+/g, "") + "Data"]?.h ?? 0))
    .map((row) => row.reduce((a, b) => a + b));
  const bolts = arrayH.map((length) => HKM.find((el) => el.L === length && isQFit(el)));
  bolts.forEach((bolt, i) => (order[`bolt` + keys[i]] = { title: bolt?.title }));
};

const filteredStart = () =>
  powerUNIT.unit.flatMap(({ startValve }) =>
    spoolData.filter(({ spool, CETOP }) => spool === startValve && (!meta.CETOP || CETOP === meta.CETOP)),
  );

const boltStart = () => {
  const bolt = HKM.find((el) => el.L === order["start" + i]?.startData?.h && el.CETOP === order["start" + i]?.startData?.CETOP);
  order["boltStart" + i] = { title: bolt?.title };
};
</script>

<template>
  <div v-for="(item, index) in filteredValves()">
    <!-- <InputItem data="throttle">
      <select v-model="powerUNIT.unit[i].HKSH[index].throttle" :id="'throttle' + i + index">
        <option v-for="i in ['', '012', '013', '014', '022', '023', '024']" :value="i">
          {{ i }}
        </option>
      </select>
    </InputItem>
    <InputItem data="check">
      <select v-model="powerUNIT.unit[i].HKSH[index].check" :id="'check' + i + index">
        <option v-for="i in ['', '011', '012', '013', '014', '016']" :value="i">
          {{ i }}
        </option>
      </select>
    </InputItem>
    <InputItem data="directPress">
      <select v-model="powerUNIT.unit[i].HKSH[index].directPress" :id="'directPress' + i + index">
        <option v-for="i in ['', '011', '012', '013', '014', '015']" :value="i">
          {{ i }}
        </option>
      </select>
    </InputItem>
    <label v-if="powerUNIT.unit[i].HKSH[index].directPress">
      <input type="number" min="0" max="300" v-model="powerUNIT.unit[i].HKSH[index].directPressValue"
        id="directPressValue" class="input w-55" />bar
    </label>
    <InputItem data="valve">
      <select v-model="powerUNIT.unit[i].HKSH[index].spool" :id="'valve' + i + index">
        <option v-for="i in spoolTypes" :value="i">
          {{ i }}
        </option>
      </select>
    </InputItem> TODO: fix error in multiple pumps -->

    <div v-for="(_, key) in item">
      <SmthSelector
        v-bind="{ meta, order }"
        :Name="key.replace(/[^a-zA-Z]+/g, '')"
        :index="key.replace(/\D/g, '')"
        :logic="() => filteredValves()[index][key]()"
        :after="() => getBolt(index)"
      />
    </div>
  </div>
  <div v-if="powerUNIT?.unit[i]?.start">
    <SmthSelector v-bind="{ meta, order }" Name="start" :index="i" :logic="filteredStart" :after="boltStart" />
  </div>
</template>

<style scoped>
.valve {
  margin: 10px;
  cursor: pointer;
  transition: all 0.1s ease;
}

.valve:hover {
  margin: 8px;
  border: 1px solid green;
  background-color: rgba(81, 158, 60, 0.25);
}

.clicked {
  background-color: rgba(201, 119, 179, 0.25);
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.hover:hover {
  background-color: #fff;
}
</style>
