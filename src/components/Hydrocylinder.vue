<script setup>
import { filtrationD, HKSHTitle, hkshCounting } from "../services/functions";
import { HKSHMount, spoolTypes, standartDiameters } from "../services/data";
import { text } from "../services/text";
import ResultItem from "./ResultItem.vue";
const { HKSH, pumpData } = defineProps(["HKSH", "pumpData"]);

const getValue = {
    D: standartDiameters,
    d: filtrationD(standartDiameters, HKSH.D),
    z: [1, 2],
    spool: spoolTypes,
    mountA: HKSHMount,
    mountB: HKSHMount,
    form: ['ver', 'hor']
};
const { id, ...rest } = HKSH;
</script>

<template>
    <section class="pl-25 my-2">
        <h2 class="text-left">
            <slot></slot>
            {{ HKSHTitle(HKSH) }}
        </h2>

        <div class="flex-row pl-25">
            <div v-for="(_, i) in rest" class="flex-col ml-10">
                <p class="border border-bottom-no bgc-g h-100">
                    {{ text(i) }}
                </p>

                <input v-if="i === 'L'" type="number" min="0" max="3000" v-model="HKSH[i]" class="input" />

                <select v-else-if="i === 'mountA' || i === 'mountB'" v-model="HKSH[i]">
                    <option v-for="elem, j in getValue[i]" :value="j" class="tal">
                        <span v-if="i === 'mountA' || i === 'mountB'">{{ j }}</span> {{ elem }}
                    </option>
                </select>

                <select v-else v-model="HKSH[i]">
                    <option v-for="elem in getValue[i]" :value="elem">
                        {{ elem }}
                    </option>
                </select>
            </div>

            <ResultItem :data="hkshCounting(HKSH, pumpData.Q, pumpData.p)" />
        </div>
    </section>
</template>

<style scoped>
.tal {
    text-align: left;
}
</style>
