<script setup>
import { filtrationD, HKSHTitle, hkshCounting } from "../services/functions";
import { HKSHMountD, HKSHMountd, spoolTypes, standartDiameters } from "../services/data";
import ResultItem from "./ResultItem.vue";
import InputItem from "./InputItem.vue";
import { text } from "../services/text";

const { HKSH, pumpData } = defineProps(["HKSH", "pumpData"]);

const getValue = {
  D: standartDiameters,
  d: "",
  z: [1, 2, 3, 4, 5, 6, 7, 8],
  spool: spoolTypes,
  mountA: HKSHMountD,
  mountB: HKSHMountd,
  form: ["⇑", "⇓", "⇐", "⇒"],
  throttle: ["", "012", "013", "014", "022", "023", "024"],
  check: ["", "011", "012", "013", "014", "016"],
  directPress: ["", "011", "012", "013", "014", "015"],
  nonReturn: ["", "AB", "A", "B"],
  flowControl: ["", "⨘AB", "⨘A", "⨘B", "⇑AB", "⇑A", "⇑B", "⇓AB", "⇓A", "⇓B"],
};
const {
  id,
  mountA,
  mountB,
  spool,
  throttle,
  check,
  directPress,
  directPressValue,
  directPressValueB,
  form,
  nonReturn,
  flowControl,
  ...rest
} = HKSH;
</script>

<template>
  <section class="pl-25 my-2">
    <div class="flex-row">
      <h2 class="text-left mr-100">
        <slot></slot>
        {{ HKSHTitle(HKSH) }}
      </h2>
      <div
        v-for="(_, i) in {
          mountA,
          mountB,
          form,
          spool,
          throttle,
          check,
          directPress,
          // directPressValue
          nonReturn,
          flowControl,
        }"
        class="flex-col ml-5"
      >
        <InputItem :data="i">
          <select v-model="HKSH[i]" :id="id + i" class="w-75" :disabled="pumpData.same">
            <option v-if="i === 'mountA' || i === 'mountB'" v-for="(elem, j) in getValue[i]" :value="j" class="tal">
              {{ j }} {{ text(elem) }}
            </option>
            <option v-else v-for="elem in getValue[i]" :value="elem">
              {{ i === "form" ? text(elem) : elem }}
            </option>
          </select>
          <label v-if="i === 'directPress' && HKSH.directPress">
            <input type="number" min="0" max="300" v-model="HKSH.directPressValue" id="directPressValue" class="input w-55" /> bar
          </label>
          <span v-if="i === 'directPress' && HKSH.directPress && (HKSH.directPress === '012' || HKSH.directPress === '015')">
            <input type="number" min="0" max="300" v-model="HKSH.directPressValueB" id="directPressValueB" class="input w-55" /> bar
          </span>
        </InputItem>
      </div>
    </div>
    <div class="flex-row">
      <div v-for="(_, i) in rest" class="flex-col ml-5 my-2">
        <InputItem :data="i">
          <input
            v-if="i === 'L'"
            type="number"
            min="0"
            max="3000"
            v-model="HKSH[i]"
            :id="id + i"
            class="input w-75"
            :disabled="pumpData.same"
          />
          <select v-else v-model="HKSH[i]" :id="id + i" class="w-75" :disabled="pumpData.same">
            <option v-if="i === 'd'" v-for="elem in filtrationD(standartDiameters, HKSH)" :value="elem">
              {{ elem }}
            </option>
            <option v-else v-for="elem in getValue[i]" :value="elem">
              {{ elem }}
            </option>
          </select>
        </InputItem>
      </div>

      <ResultItem :data="hkshCounting(HKSH, pumpData)" />
    </div>
  </section>
</template>

<style scoped>
.w-55 {
  min-width: 55px;
  width: 55px;
}
</style>
