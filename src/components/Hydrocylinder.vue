<script setup>
import { filtrationD, HKSHTitle, hkshCounting } from "../services/functions";
import { HKSHMountD, HKSHMountd, spoolTypes, standartDiameters } from "../services/data";
import { text } from "../services/text";
import ResultItem from "./ResultItem.vue";
import InputItem from "./InputItem.vue";
const { HKSH, pumpData } = defineProps(["HKSH", "pumpData"]);

const getValue = {
    D: standartDiameters,
    d: filtrationD(standartDiameters, HKSH.D),
    z: [1, 2],
    spool: spoolTypes,
    mountA: HKSHMountD,
    mountB: HKSHMountd,
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

        <div class="flex-row">
            <div v-for="(_, i) in rest" class="flex-col ml-5">
                <InputItem :title="text(i)">

                    <input v-if="i === 'L'" type="number" min="0" max="3000" v-model="HKSH[i]" class="input w-75" />

                    <select v-else-if="i === 'mountA' || i === 'mountB'" v-model="HKSH[i]" class="w-75">
                        <option v-for="elem, j in getValue[i]" :value="j" class="tal">
                            <span>{{ j }} {{ elem }}</span>
                        </option>
                    </select>

                    <select v-else v-model="HKSH[i]" class="w-75">
                        <option v-for="elem in getValue[i]" :value="elem">
                            {{ elem }}
                        </option>
                    </select>
                </InputItem>
            </div>

            <ResultItem :data="hkshCounting(HKSH, pumpData.Q, pumpData.p)" />
        </div>
    </section>
</template>

<style scoped></style>
