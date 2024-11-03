<script setup>
import { parenthesis } from "../services/functions";
const inputs = defineProps(["inputs"]);
</script>

<template>
    <label v-for="input in inputs" class="nnn">
        <i>{{ input.title }} {{ parenthesis(input.unit) }}</i>
        <select v-model="input.value">
            <option v-for="elem in input.array" :value="elem" :selected="elem === input.value">
                {{ elem }}
            </option>
        </select>
    </label>
</template>
