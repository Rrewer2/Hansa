<script setup>
const { x, y, L, width } = defineProps(["x", "y", "L", "width"]);
</script>

<template>
  <path :d="`M${x} ${y} h${L}`" stroke="black" :stroke-width="width || 2" />
</template>

<style scoped></style>
