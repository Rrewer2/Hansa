<script setup>
import { ref } from "vue";
import Hydrocylinder from "./Hydrocylinder.vue";
import { buckling, hkshCounting, pumpCounting, round } from "../services/functions";
import { text } from "../services/text";
const { pumpData } = defineProps(["pumpData"]);

const data = ref({
    Q: pumpData.Q,
    p: pumpData.p,
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
                    <span class="border fs-sm px-5">
                        {{ text(ind) }}
                    </span>
                    <input @input="() => $emit('pumpUpdate', { ...data, HKSH: hkshData, id: pumpData.id })"
                        type="number" min="0" v-model="data[ind]" />
                </div>
            </div>
            <div v-for="(el, title) in pumpCounting(pumpData)" class="flex-col fs-sm">
                <span class="border bgc-g h-100  px-5">{{ text(title) }}</span>
                <span class="border bgc-w">{{ round(el) }}</span>
            </div>
        </div>
        <Hydrocylinder v-for="(muscle, j) in pumpData.HKSH" :key="muscle.id" :data="muscle"
            :results="hkshCounting(muscle, pumpData.Q, pumpData.p)" @muscleUpdate="(a) => {
                hkshData[j] = a;
                $emit('pumpUpdate', { ...data, HKSH: hkshData, id: pumpData.id });
            }" @delCyl="() => {
                hkshData = hkshData.filter(({ id }) => id !== muscle.id);
                $emit('pumpUpdate', { ...data, HKSH: hkshData, id: pumpData.id });
            }" :class="buckling(muscle, pumpData.p)" />
        <div class="flex-row flex-left pl-25">
            <button @click="() => $emit('addCyl')" class="btn-add my-2">
                + HKSH
            </button>
        </div>
    </article>
</template>

<style scoped></style>
