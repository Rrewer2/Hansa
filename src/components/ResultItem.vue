<script setup>
import { round } from "../services/functions";
import { text } from "../services/text";
const { data } = defineProps(["data"]);
</script>

<template>
    <div v-for="(el, name) in data" class="flex-col fs-sm">
        <span class="border border-bottom-no bgc-g h-100 px-5">
            {{ text(name) }}
        </span>
        <span class="border bgc-w">
            {{ round(el) }}
        </span>
    </div>
</template>

<style scoped></style>
