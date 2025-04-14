<script setup>
const { title, unit } = defineProps(["title", "unit"]);
// console.log('title,unit :>> ', title, unit);
</script>

<template>
    <div class="inline w-75">
        <h4 class="border border-bottom-no bgc-g fs-sm px-5">
            <i>{{ title }}</i>
        </h4>
        <div class="input-group">
            <slot></slot>
            <i v-if="unit" class="unit px-5">{{ unit }}</i>
        </div>
    </div>
</template>

<style scoped>
.input-group {
    position: relative;
    display: inline-block;
    background-color: #e5e5e5;
    border: 0.5px solid;
    width: 100%;
}

.unit {
    /* position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #555;
    pointer-events: none; */
}
</style>
