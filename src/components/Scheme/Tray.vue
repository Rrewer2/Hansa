<script setup>
const { x, y, L } = defineProps(["x", "y", "L"]);
</script>

<template>
  <path :d="`M${x} ${y} v${100} h${L} v${-100}`" stroke="#000" stroke-width="3" fill="none" />
</template>

<style scoped></style>
