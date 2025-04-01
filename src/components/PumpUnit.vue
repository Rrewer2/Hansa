<script setup>
import Hydrocylinder from "./Hydrocylinder.vue";
import { buckling, pumpCounting, round, getVFU } from "../services/functions";
import { text } from "../services/text";
import { freqData } from "../services/data";
import ResultItem from "./ResultItem.vue";
const { pumpData, btnDisabled } = defineProps(["pumpData", "btnDisabled"]);

const { id, HKSH, ...rest } = pumpData;
</script>

<template>
    <article>
        <div class="flex-row">
            <div>
                <button :disabled="btnDisabled" @click="$emit('delPump')">
                    ✕
                </button>
            </div>
            <ResultItem :data="{ VFU: getVFU(pumpData.Q, pumpData.n) }" />

            <div v-for="(_, ind) in rest" class="flex-col">
                <span class="border border-bottom-no bgc-g fs-sm px-5">
                    {{ text(ind) }}
                </span>

                <input v-if="ind === 'Q' || ind === 'p'" type="number" min="0" v-model="pumpData[ind]" />

                <select v-if="ind === 'DR2type'" v-model="pumpData.DR2type">
                    <option v-for="item in [0, 1, 2, 3]" :value="item">{{ item }}</option>
                </select>

                <select v-if="ind === 'n'" v-model="pumpData[ind]">
                    <option v-for="elem in freqData" :value="elem">{{ elem }}</option>
                </select>
            </div>

            <ResultItem :data="pumpCounting(pumpData)" />
        </div>

        <Hydrocylinder v-for="(_, j) in pumpData.HKSH" :key="pumpData.HKSH[j].id" :HKSH="pumpData.HKSH[j]"
            :pumpData="pumpData" :class="buckling(pumpData.HKSH[j], pumpData.p)" class="my-2 border-no">
            <button @click="() => pumpData.HKSH = pumpData.HKSH.filter(({ id }) => id !== pumpData.HKSH[j].id)"
                class="el">
                ✕
            </button>
        </Hydrocylinder>
        <div class="flex-row flex-left pl-25">
            <button @click="$emit('addCyl')" class="btn-add my-2">
                + HKSH
            </button>
        </div>
    </article>
</template>

<style scoped></style>
