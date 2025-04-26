<script setup>
import Hydrocylinder from "./Hydrocylinder.vue";
import { buckling, pumpCounting, getVFU, round } from "../services/functions";
import ResultItem from "./ResultItem.vue";
import InputItem from "./InputItem.vue";

const { pumpData, btnDisabled, project, k, i, order } = defineProps(["pumpData", "btnDisabled", "project", "k", "i", "order"]);

const { id, HKSH, same, ...rest } = pumpData;
</script>

<template>
    <article>
        <div class="flex-row">
            <div>
                <button :disabled="btnDisabled" @click="$emit('delPump')">
                    ✕
                </button>
            </div>
            <ResultItem :data="{ VFU: round(getVFU(pumpData.Q, project[k].n)) }" />

            <div v-for="(_, ind) in rest" class="ml-10">
                <InputItem :data="ind">
                    <input v-if="ind === 'Q'" type="number" min="0" v-model="pumpData[ind]"
                        :disabled="order[`pump${i}-${k}`]?.title" :id="ind" />
                    <input v-if="ind === 'p'" type="number" min="0" v-model="pumpData[ind]" :id="ind" />

                    <select v-if="ind === 'DR2type'" v-model="pumpData.DR2type" class="w-100" :disabled="same"
                        :id="ind">
                        <option v-for="item in [0, 1, 2, 3]" :value="item">{{ item }}</option>
                    </select>
                </InputItem>
            </div>

            <ResultItem :data="pumpCounting(pumpData)" />
        </div>

        <Hydrocylinder v-for="(_, j) in pumpData.HKSH" :key="pumpData.HKSH[j].id" :HKSH="pumpData.HKSH[j]"
            :pumpData="{ ...pumpData, same }" :class="buckling(pumpData.HKSH[j], pumpData.p)" class="my-2 border">
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
