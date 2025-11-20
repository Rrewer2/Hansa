<script setup>
const { x, y, text, afterText, fs } = defineProps(["x", "y", "text", "afterText", "fs"]);
</script>

<template>
  <text v-if="text" :x="x" :y="y" font-family="Arial" :font-size="fs ? fs : 25" text-anchor="middle"> {{ text }} {{ afterText }} </text>
</template>

<style scoped></style>
