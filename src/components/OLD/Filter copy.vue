<script setup>
const { x, y } = defineProps(['x', 'y']);
</script>

<template>
    <div :style="{ transform: `rotate(${angle}deg)` }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
            <path :d="'M' + `${550 + x} ${525 + y}` + 'l25+25 -25 +25-25 -25z'" stroke="black" stroke-width="1"
                fill="white" />
            <path :d="'M' + `${530 + x} ${550 + y}` + 'h40'" stroke="black" stroke-dasharray="5 2" stroke-width="1" />
            <circle :cx="584 + x" :cy="550 + y" r="8" stroke="black" stroke-width="1" fill="white" />
            <path :d="'M' + `${580 + x} ${546 + y}` + 'l8+8'" stroke="black" stroke-width="1" fill="white" />
            <path :d="'M' + `${580 + x} ${554 + y}` + 'l8-8'" stroke="black" stroke-width="1" fill="white" />
            <!-- </svg> -->
    </div>
</template>

<style scoped></style>
