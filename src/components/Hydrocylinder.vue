<script setup>
import { ref } from "vue";
import { round, filtrationD, HKSHTitle } from "../services/functions";
import { standartDiameters } from "../services/data";
import { text } from "../services/text";
const { data, results } = defineProps(["data", "results"]);

const HKSH = ref({
    D: data.D,
    d: data.d,
    L: data.L,
    z: data.z,
    spool: data.spool,
    type: data.type,
    form: data.form
});
const getValue = {
    D: standartDiameters,
    d: filtrationD(standartDiameters, HKSH.value.D),
    z: [1, 2],
    spool: ['G', 'E', 'J', 'H', 'L', 'M', 'U', 'W', 'F', 'P', 'A', 'B', 'C', 'D', 'D1', 'Y', 'Y1'],
    type: ['22', '11', '30', '03', '20', '02'],
    form: ['ver', 'hor']
}
</script>

<template>
    <section class="pl-25 my-2">
        <h4 class="text-left">
            <button @click="() => $emit('delCyl')" class="el">
                ✕
            </button>
            {{ HKSHTitle(HKSH.D, HKSH.d, HKSH.L, HKSH.type) }}
        </h4>
        <div class="flex-row pl-25">
            <div v-for="(_, i) in HKSH" class="flex-col">
                <p class="border border-bottom-no bgc-g h-100">{{ text(i) }}</p>
                <input v-if="i === 'L'" @input="() => $emit('muscleUpdate', { ...data, ...HKSH })" type="number" min="0"
                    max="3000" v-model="HKSH[i]" class="input" />
                <select v-else v-model="HKSH[i]" @change="() => $emit('muscleUpdate', { ...data, ...HKSH })">
                    <option v-for="elem in getValue[i]" :value="elem">
                        {{ elem }}
                    </option>
                </select>
            </div>
            <div v-for="(el, name) in results" class="flex-col fs-sm">
                <span class="border bgc-g border-bottom-no h-100">{{ text(name) }}</span>
                <span class="border bgc-w">{{ round(el) }}</span>
            </div>
        </div>
    </section>
</template>

<style scoped>
.h-100 {
    height: 100%;
}
</style>
