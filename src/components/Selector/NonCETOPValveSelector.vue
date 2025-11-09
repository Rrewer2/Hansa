<script setup>
import { HKV1, HKV2, HKVCounterBalance } from "../../services/data";
import { Qback } from "../../services/functions";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order, i, powerUNIT, open } = defineProps(["project", "meta", "order", "i", "powerUNIT", "open"]);

const filteredValves = () =>
  powerUNIT.unit.flatMap(({ Q, p, HKSH }, j) =>
    HKSH.map(({ nonReturn, flowControl, balance }, k) => {
      return {
        ["nonReturn" + i + j + k]: () => HKV1.filter((el) => nonReturn === el.type && el.flowMax > Q && el.pmax > p),
        ["flowControl" + i + j + k]: () => HKV2.filter((el) => flowControl.startsWith(el.type) && el.flowMax > Q && el.pmax > p),
        ["balance" + i + j + k]: () => HKVCounterBalance.filter((el) => balance === el.type && el.flowMax > Q && el.pmax > p),
      };
    }),
  );
</script>

<template>
  <div v-for="(item, index) in filteredValves()">
    <div v-for="(_, key) in item">
      <SmthSelector
        v-bind="{ meta, order }"
        :Name="key.replace(/[^a-zA-Z]+/g, '')"
        :index="key.replace(/\D/g, '')"
        :logic="() => filteredValves()[index][key]()"
      />
    </div>
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
