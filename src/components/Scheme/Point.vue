<script setup>
const { x, y } = defineProps(["x", "y"]);
</script>

<template>
  <circle :cx="x" :cy="y" r="3" stroke="black" stroke-width="4" fill="black" />
</template>

<style scoped></style>
