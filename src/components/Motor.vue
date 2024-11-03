<script setup>
import { motorData } from "../services/data";
const { Power } = defineProps(["Power"]);

const motorCalculation = () => motorData.find(N => N >= Power());
</script>

<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" fill="000" />
            <circle cx="50" cy="50" r="29" fill="white" />
            <line x1="79" y1="48" x2="96" y2="48" stroke="black" />
            <line x1="79" y1="52" x2="96" y2="52" stroke="black" />
            <line x1="96" y1="42" x2="96" y2="58" stroke="black" />
            <text x="50" y="60" font-family="Arial" font-size="30" fill="black" text-anchor="middle">
                M
            </text>
        </svg>
        <p>{{ Power() }} / {{ motorCalculation() }}</p>
    </div>
</template>

<style scoped>
label,
div {
    position: absolute;
    width: 10vw;
    height: 10vw;
    z-index: 500;
}

svg {
    position: relative;
    /* background-color: #ffc400; */
    width: 100%;
}

p {
    position: relative;
    /* left: 0vw; */
    top: -10vw;
}
</style>
