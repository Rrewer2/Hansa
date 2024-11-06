<script setup>
import { ref } from "vue";
import { round, filtrationD } from "../services/functions";
import { standartDiameters } from "../services/data";
import { text } from "../services/text";
const { data, results } = defineProps(["data", "results"]);

const HKSH = ref({
    D: data.D,
    d: data.d,
    L: data.L,
});
const id = ref(data.id);
const title = () => "Siłownik HKSH" + ("000" + HKSH.value.D).slice(-3) + ("000" + HKSH.value.d).slice(-3) + ("000" + HKSH.value.L).slice(-4);
</script>

<template>
    <section class="pl-25 my-2">
        <h4 class="text-left">
            <button @click="() => $emit('delCyl')" class="el">
                X
            </button>
            {{ title() }}
        </h4>
        <div class="flex-row pl-25">
            <div v-for="(_, i) in HKSH" class="flex-col">
                <p class="border border-bottom-no bgc-g h-100">{{ text(i) }}</p>
                <input v-if="i === 'L'" @input="() => $emit('muscleUpdate', { ...HKSH, id })" type="number" min="0"
                    max="3000" v-model="HKSH[i]" class="input" />
                <select v-else v-model="HKSH[i]" @change="() => $emit('muscleUpdate', { ...HKSH, id })">
                    <option v-for="elem in i === 'D' ? standartDiameters : filtrationD(standartDiameters, HKSH.D)"
                        :value="elem">
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

.fs-sm {
    font-size: small;
}

/* .hc {
    display: flex;
    justify-content: space-around;
}

.el {
    width: 12%;
    border: solid 1px;
}

.l {
    border: dashed red;
    padding: 0 10px;
}

.ö {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.p {
    border: solid 1px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: small;
    height: 40px;
} */
</style>
