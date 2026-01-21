<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import InputItem from "./InputItem.vue";
import Text from "./Scheme/Text.vue";
import ArrowDraw from "./Scheme/ArrowDraw.vue";
const data = ref({
  dPilot: 20,
  lPilot: 7,
  fazaPilot: 3,
  dGwint: 24,
  lGwint: 15,
  skokGwint: 1.5,
  kanal: 3,
  dTlok: 25,
  lTlok: 11,
  fazaTlok: 2,
  dHamulec: 30,
  lHamulec: 20,
  fazaHamulec: 1,
  d: 35,
  faza: 3,
  L: 100,
});
const winW = ref(0);
const updateSize = () => {
  winW.value = window.innerWidth;
};
onMounted(() => {
  updateSize();
  window.addEventListener("resize", updateSize);
});
onUnmounted(() => window.removeEventListener("resize", updateSize));
const tan = (deg) => Math.tan((deg * Math.PI) / 180);
const normWithFaza = (d, l, faza, deg = 20) =>
  ` v${-d / 2 + (faza / 2) * tan(deg)} l${-faza / 2} ${(-faza / 2) * tan(deg)} v${d / 2} v${-d / 2} h${-l + faza / 2} v${d / 2} `;
const kanalAfterGwint = (d, faza, kanal, deg = 20) =>
  ` v${-d / 2} l${-faza / 2} ${(faza / 2) * tan(deg)} v${d / 2 - (faza / 2) * tan(deg)} v${-d / 2 + faza * tan(deg) * 0.75} h${-kanal} v${d / 2 - faza * tan(deg) * 0.75}`;
</script>

<template>
  <br />
  <br />
  <br />
  <InputItem v-for="(_, b) in data" :data="b">
    <input type="number" v-model="data[b]" min="0" />
  </InputItem>
  <svg xmlns="http://www.w3.org/2000/svg" :viewBox="`0 0 ${winW} ${winW * 0.69}`">
    <template v-if="data.lPilot * 10 && data.dPilot * 10">
      <path
        :d="`M${winW / 2 + (data.L * 10) / 2} ${450} ${normWithFaza(data.dPilot * 10, data.lPilot * 10, data.fazaPilot * 10, 20)}`"
        stroke="#000"
        stroke-width="2"
        fill="none"
      />
      <ArrowDraw :x="winW / 2 + (data.L * 10) / 2 - (data.lPilot * 10) / 2" :y="450 - (data.dPilot * 10) / 2" :l="120" :deg="0" />
      <Text
        :x="winW / 2 + (data.L * 10) / 2 - (data.lPilot * 10) / 2 - 2"
        :y="450 - (data.dPilot * 10) / 2 + 70"
        :text="data.dPilot"
        beforeText="ø"
        :transform="`rotate(${-90} ${winW / 2 + (data.L * 10) / 2 - (data.lPilot * 10) / 2 - 2} ${450 - (data.dPilot * 10) / 2 + 70})`"
        fs="16"
      />
    </template>
    <template v-if="data.lGwint * 10 && data.dGwint * 10 && data.skokGwint * 10">
      <path
        :d="`M${winW / 2 + (data.L * 10) / 2 - data.lPilot * 10} ${450} ${normWithFaza(data.dGwint * 10, data.lGwint * 10 - data.kanal * 10 - (data.skokGwint * 10) / 2, data.skokGwint * 10, 45)}`"
        stroke="#000"
        stroke-width="2"
        fill="none"
      />
      <path
        :d="`M${winW / 2 + (data.L * 10) / 2 - data.lPilot * 10} ${450 - (data.dGwint * 10) / 2 + (data.skokGwint * 10) / 2} h${-data.lGwint * 10 + data.kanal * 10}`"
        stroke="black"
        stroke-width="0.5"
        fill="none"
      />
      <path
        :d="`M${winW / 2 + (data.L * 10) / 2 - data.lPilot * 10 - data.lGwint * 10 + data.kanal * 10 + (data.skokGwint * 10) / 2} ${450} ${kanalAfterGwint(data.dGwint * 10, data.skokGwint * 10, data.kanal * 10, 45)}`"
        stroke="#000"
        stroke-width="2"
        fill="none"
      />
      <ArrowDraw
        :x="winW / 2 + (data.L * 10) / 2 - data.lPilot * 10 - (data.lGwint * 10) / 2 + data.kanal * 10"
        :y="450 - (data.dGwint * 10) / 2"
        :l="120"
        :deg="0"
      />
      <Text
        :x="winW / 2 + (data.L * 10) / 2 - data.lPilot * 10 - (data.lGwint * 10) / 2 - 2"
        :y="450 - (data.dGwint * 10) / 2 + 70"
        :text="data.dGwint"
        beforeText="M"
        :transform="`rotate(${-90} ${winW / 2 + (data.L * 10) / 2 - data.lPilot * 10 - (data.lGwint * 10) / 2 + data.kanal * 10 - 2} ${450 - (data.dGwint * 10) / 2 + 70})`"
        :afterText="`X${data.skokGwint}`"
        fs="16"
      />
    </template>
    <template v-if="data.lTlok * 10 && data.dTlok * 10">
      <path
        :d="`M${winW / 2 + (data.L * 10) / 2 - data.lPilot * 10 - data.lGwint * 10} ${450} ${normWithFaza(data.dTlok * 10, data.lTlok * 10, data.fazaTlok * 10, 20)}`"
        stroke="#000"
        stroke-width="2"
        fill="none"
      />
      <ArrowDraw
        :x="winW / 2 + (data.L * 10) / 2 - data.lPilot * 10 - data.lGwint * 10 - (data.lTlok * 10) / 2"
        :y="450 - (data.dTlok * 10) / 2"
        :l="120"
        :deg="0"
      />
      <Text
        :x="winW / 2 + (data.L * 10) / 2 - data.lPilot * 10 - data.lGwint * 10 - (data.lTlok * 10) / 2 - 2"
        :y="450 - (data.dTlok * 10) / 2 + 70"
        :text="data.dTlok"
        beforeText="ø"
        :transform="`rotate(${-90} ${winW / 2 + (data.L * 10) / 2 - data.lPilot * 10 - data.lGwint * 10 - (data.lTlok * 10) / 2 - 2} ${450 - (data.dTlok * 10) / 2 + 70})`"
        fs="16"
      />
    </template>
    <template v-if="data.lHamulec * 10 && data.dHamulec * 10">
      <path
        :d="`M${winW / 2 + (data.L * 10) / 2 - data.lPilot * 10 - data.lGwint * 10 - data.lTlok * 10} ${450} ${normWithFaza(data.dHamulec * 10, data.lHamulec * 10, data.fazaHamulec * 10, 20)}`"
        stroke="#000"
        stroke-width="2"
        fill="none"
      />
      <ArrowDraw
        :x="winW / 2 + (data.L * 10) / 2 - data.lPilot * 10 - data.lGwint * 10 - data.lTlok * 10 - (data.lHamulec * 10) / 2"
        :y="450 - (data.dHamulec * 10) / 2"
        :l="120"
        :deg="0"
      />
      <Text
        :x="winW / 2 + (data.L * 10) / 2 - data.lPilot * 10 - data.lGwint * 10 - data.lTlok * 10 - (data.lHamulec * 10) / 2 - 2"
        :y="450 - (data.dHamulec * 10) / 2 + 70"
        :text="data.dHamulec"
        beforeText="ø"
        :transform="`rotate(${-90} ${winW / 2 + (data.L * 10) / 2 - data.lPilot * 10 - data.lGwint * 10 - data.lTlok * 10 - (data.lHamulec * 10) / 2 - 2} ${450 - (data.dHamulec * 10) / 2 + 70})`"
        fs="16"
      />
    </template>
    <template v-if="true">
      <path
        :d="`M${winW / 2 + (data.L * 10) / 2 - data.lPilot * 10 - data.lGwint * 10 - data.lTlok * 10 - data.lHamulec * 10} ${450} v${(-data.d * 10) / 2 + ((data.faza * 10) / 2) * tan(20)} l${-data.faza * 10} ${-((data.faza * 10) / 2) * tan(20)} v${(data.d * 10) / 2} v${(-data.d * 10) / 2} h${(-data.d * 10) / 10}`"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <ArrowDraw
        :x="
          winW / 2 +
          (data.L * 10) / 2 -
          data.lPilot * 10 -
          data.lGwint * 10 -
          data.lTlok * 10 -
          data.lHamulec * 10 -
          data.faza * 10 -
          (data.d * 10) / 40
        "
        :y="450 - (data.d * 10) / 2"
        :l="120"
        :deg="0"
      />
      <Text
        :x="
          winW / 2 +
          (data.L * 10) / 2 -
          data.lPilot * 10 -
          data.lGwint * 10 -
          data.lTlok * 10 -
          data.lHamulec * 10 -
          data.faza * 10 -
          (data.d * 10) / 40 -
          2
        "
        :y="450 - (data.d * 10) / 2 + 70"
        :text="data.d"
        beforeText="ø"
        :transform="`rotate(${-90} ${winW / 2 + (data.L * 10) / 2 - data.lPilot * 10 - data.lGwint * 10 - data.lTlok * 10 - data.lHamulec * 10 - data.faza * 10 - (data.d * 10) / 40 - 2} ${450 - (data.d * 10) / 2 + 70})`"
        fs="16"
      />
    </template>
    <path
      :d="`M${winW / 2 + (data.L * 10) / 2 - data.lPilot * 10 - data.lGwint * 10 - data.lTlok * 10 - data.lHamulec * 10 - data.faza * 10 - (data.d * 10) / 10} ${450 - (data.d * 10) / 2 - (data.d * 10) / 20} v${(data.d * 10) / 2 + (data.d * 10) / 10}`"
      stroke="black"
      stroke-width="1"
      :stroke-dasharray="`${(data.L * 10) / 12} ${(data.L * 10) / 80} ${(data.L * 10) / 180} ${(data.L * 10) / 80}`"
      stroke-linecap="round"
      fill="none"
    />
    <path
      :d="`M${winW / 2 + (data.L * 10) / 2 - data.lPilot * 10 - data.lGwint * 10 - data.lTlok * 10 - data.lHamulec * 10 - data.faza * 10 - (data.d * 10) / 5} ${450 - (data.d * 10) / 2 - (data.d * 10) / 20} v${(data.d * 10) / 2 + (data.d * 10) / 10}`"
      stroke="black"
      stroke-width="1"
      :stroke-dasharray="`${(data.L * 10) / 12} ${(data.L * 10) / 80} ${(data.L * 10) / 180} ${(data.L * 10) / 80}`"
      stroke-linecap="round"
      fill="none"
    />

    <path
      :d="`M${winW / 2 + (data.L * 10 * 1.2) / 2} ${450} h${-data.L * 10 * 1.2}`"
      stroke="blue"
      stroke-width="0.3"
      :stroke-dasharray="`${(data.L * 10) / 12} ${(data.L * 10) / 40} ${(data.L * 10) / 180} ${(data.L * 10) / 40}`"
      stroke-linecap="round"
      fill="none"
    />
  </svg>
</template>

<style scoped></style>
