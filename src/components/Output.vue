<script setup>
const { item } = defineProps(["item"]);
</script>

<template>
    <div>
        {{ item.title }}
        {{ item.value }}
        {{ item.unit }}
    </div>
    <br />
</template>
