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
    form: ['pionowo', 'poziomo'],
    throttle: ['', '012', '013', '014', '022', '023', '024'],
    check: ['', '011', '012', '013', '014', '016'],
    directPress: ['', '011', '012', '013', '014', '015'],
};
const { id, mountA, mountB, spool, throttle, check, directPress, form, ...rest } = HKSH;
</script>

<template>
    <section class="pl-25 my-2">
        <div class="flex-row">
            <h2 class="text-left mr-100">
                <slot></slot>
                {{ HKSHTitle(HKSH) }}
            </h2>
            <div v-for="(_, i) in { mountA, mountB, form, spool, throttle, check, directPress }" class="flex-col ml-5">
                <InputItem :title="text(i)">
                    <select v-if="i === 'mountA' || i === 'mountB'" v-model="HKSH[i]" class="w-75"
                        :disabled="pumpData.same">
                        <option v-for="elem, j in getValue[i]" :value="j" class="tal">
                            <span>{{ j }} {{ elem }}</span>
                        </option>
                    </select>

                    <select v-else v-model="HKSH[i]" :disabled="pumpData.same" class="w-75">
                        <option v-for="elem in getValue[i]" :value="elem">
                            {{ elem }}
                        </option>
                    </select>
                </InputItem>
            </div>
        </div>
        <div class="flex-row">
            <div v-for="(_, i) in rest" class="flex-col ml-5 my-2">
                <InputItem :title="text(i)">

                    <input v-if="i === 'L'" type="number" min="0" max="3000" v-model="HKSH[i]" class="input w-75"
                        :disabled="pumpData.same" />

                    <select v-else-if="i === 'mountA' || i === 'mountB'" v-model="HKSH[i]" class="w-75"
                        :disabled="pumpData.same">
                        <option v-for="elem, j in getValue[i]" :value="j" class="tal">
                            <span>{{ j }} {{ elem }}</span>
                        </option>
                    </select>

                    <select v-else v-model="HKSH[i]" class="w-75" :disabled="pumpData.same">
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
