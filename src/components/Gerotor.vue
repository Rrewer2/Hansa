<script setup>
import { GerotorTitle, HKSHTitle, gerotorCounting } from "../services/functions";
import { spoolTypes } from "../services/data";
import ResultItem from "./ResultItem.vue";
import InputItem from "./InputItem.vue";
import { text } from "../services/text";

const { HKSH, pumpData } = defineProps(["HKSH", "pumpData"]);

const getValue = {
  CC: [""],
  z: [1, 2, 3],
  spool: spoolTypes,
  // form: ["⇑", "⇓", "⇐", "⇒"],
  throttle: ["", "012", "013", "014", "022", "023", "024"],
  check: ["", "011", "012", "013", "014", "016"],
  directPress: ["", "011", "012", "013", "014", "015"],
  counter: ["", "AB", "A", "B"],
  nonReturn: ["", "AB", "A", "B"],
  flowControl: ["", "⟯|⟮AB", "⟯|⟮A", "⟯|⟮B", "⇑AB", "⇑A", "⇑B", "⇓AB", "⇓A", "⇓B"],
  balance: ["", "AB", "A", "B"],
};
const {
  id,
  spool,
  throttle,
  check,
  directPress,
  directPressValue,
  directPressValueB,
  form,
  counter,
  nonReturn,
  flowControl,
  balance,
  ...rest
} = HKSH;
</script>

<template>
  <section class="pl-25 my-2">
    <div class="flex-row">
      <h2 class="text-left mr-30">
        <slot></slot>
        <!-- {{ HKSHTitle(HKSH) }} -->
        {{ GerotorTitle(HKSH) }}
      </h2>
      <div
        v-for="(_, i) in {
          // form,
          spool,
          throttle,
          check,
          directPress,
          // directPressValue,
          counter,
          nonReturn,
          flowControl,
          balance,
        }"
        class="flex-col ml-5"
      >
        <InputItem :data="i">
          <select v-model="HKSH[i]" :id="id + i" class="w-75" :disabled="pumpData.same">
            <option v-for="elem in getValue[i]" :value="elem">
              {{ elem }}
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
          <select v-if="i === 'z'" v-model="HKSH[i]" :id="id + i" class="w-75" :disabled="pumpData.same">
            <option v-if="i === 'd'" v-for="elem in filtrationD(standartDiameters, HKSH)" :value="elem">
              {{ elem }}
            </option>
            <option v-else v-for="elem in getValue[i]" :value="elem">
              {{ elem }}
            </option>
          </select>
          <input v-else type="number" min="0" max="3000" v-model="HKSH[i]" :id="id + i" class="input w-75" :disabled="pumpData.same" />
        </InputItem>
      </div>

      <ResultItem :data="gerotorCounting(HKSH, pumpData)" />
    </div>
  </section>
</template>

<style scoped>
.w-55 {
  min-width: 55px;
  width: 55px;
}
</style>
