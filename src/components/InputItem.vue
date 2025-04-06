<script setup>
import { text } from "../services/text";
const { data, disabled, min, max } = defineProps(["data", "disabled", "min", "max"]);
console.log('data :>> ', data);
</script>

<template>
    <div class="inline w-100">
        <h3 class="border border-bottom-no bgc-g fs-sm px-5">
            {{ (data) }}
        </h3>
        <!-- <input type="number" :min="min" :max="max" v-model="data" :disabled="disabled" /> -->
    </div>
</template>

<style scoped></style>
