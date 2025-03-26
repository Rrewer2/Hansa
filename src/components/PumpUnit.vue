<script setup>
import { ref } from "vue";
import Hydrocylinder from "./Hydrocylinder.vue";
import { buckling, hkshCounting, pumpCounting, round } from "../services/functions";
import { text } from "../services/text";
import { freqData } from "../services/data";
const { pumpData } = defineProps(["pumpData"]);

const data = ref({
    Q: pumpData.Q,
    p: pumpData.p,
    n: pumpData.n,
    DR2type: pumpData.DR2type
});
const hkshData = ref(pumpData.HKSH);
</script>

<template>
    <article>
        <div class="flex-row">
            <div>
                <slot></slot>
            </div>
            <div v-for="(_, ind) in data" class="flex-row">
                <div class="flex-col">
                    <span class="border border-bottom-no bgc-g fs-sm px-5">
                        {{ text(ind) }}
                    </span>
                    <input v-if="ind === 'Q' || ind === 'p'"
                        @input="() => $emit('pumpUpdate', { ...pumpData, ...data, HKSH: hkshData })" type="number"
                        min="0" v-model="data[ind]" />
                    <select v-if="ind === 'DR2type'" v-model="data.DR2type"
                        @change="$emit('pumpUpdate', { ...pumpData, ...data, HKSH: hkshData })">
                        <option v-for="item in [0, 1, 2, 3]" :value="item">{{ item }}</option>
                    </select>
                    <select v-if="ind === 'n'" v-model="data[ind]"
                        @change="() => $emit('pumpUpdate', { ...pumpData, ...data, HKSH: hkshData })">
                        <option v-for="elem in freqData" :value="elem">
                            {{ elem }}
                        </option>
                    </select>
                </div>
            </div>
            <div v-for="(el, title) in pumpCounting(pumpData)" class="flex-col fs-sm">
                <span class="border border-bottom-no bgc-g h-100 px-5">{{ text(title) }}</span>
                <span class="border bgc-w">{{ round(el) }}</span>
            </div>
        </div>
        <Hydrocylinder v-for="(muscle, j) in pumpData.HKSH" :key="muscle.id" :data="muscle"
            :results="hkshCounting(muscle, pumpData.Q, pumpData.p)" @muscleUpdate="(a) => {
                hkshData[j] = a;
                $emit('pumpUpdate', { ...pumpData, ...data, HKSH: hkshData });
            }" @delCyl="() => {
                hkshData = hkshData.filter(({ id }) => id !== muscle.id);
                $emit('pumpUpdate', { ...pumpData, ...data, HKSH: hkshData });
            }" :class="buckling(muscle, pumpData.p)" class="my-2 border-no" />
        <div class="flex-row flex-left pl-25">
            <button @click="() => $emit('addCyl')" class="btn-add my-2">
                + HKSH
            </button>
        </div>
    </article>
</template>

<style scoped></style>
