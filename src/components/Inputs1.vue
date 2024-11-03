<script setup>
const { inputs } = defineProps(["inputs"]);
</script>

<template>
    <article>
        <div class="ppp">
            <!-- <label v-for="item in inputs" class="nnn">
                <i>{{ item.title }} ({{ item.unit }})</i>
                <input
                    @input="$emit('qwert', item)"
                    type="number"
                    min="0"
                    v-model="item"
                />
                <div>{{ item }}</div>
            </label> -->
        </div>
    </article>
</template>
<style scoped>
.ppp {
    display: flex;
    justify-content: space-around;
}

.nnn {
    margin: 0 1px;
    display: flex;
    flex-direction: column;
    width: 100px;
    justify-content: space-between;
}
</style>
