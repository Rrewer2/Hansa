<script setup>
import Article from "./Article.vue";
const { obj } = defineProps(["obj"]);
</script>

<template>
    <main class="app-main">
        <div v-for="item in obj">
            <Article :data="item" />
        </div>
    </main>
</template>

<style scoped>
.app-main {
    /* background: rgb(0, 0, 0, 0.25); */
    margin-left: 40vw;
    padding: 10px;
}
</style>
