<script setup>
import { ref } from "vue";
const { item } = defineProps(["item"]);
const data = ref(item);
</script>

<template>
    <input @input="() => $emit('inputUpdate', data.value)" type="number" min="0" v-model="data" />
</template>

<style scoped></style>
