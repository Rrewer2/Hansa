<script setup>
import { KITtitle, agregatTitle } from "../services/functions";
// import { tankData } from "../services/data";
import { text } from "../services/text";
const { project, meta, order } = defineProps(["project", "meta", "order"]);
const images = ["/tray.png", "/tank.png", "/lid.png", "/unit.png", "/blok.png", "/cooler.png"];
</script>

<template>
  <div class="image-stack">
    <img v-for="(image, i) in images" :src="image" class="img" :alt="image" :style="{ position: 'absolute', zIndex: i }" />

    <!-- <img src="/bakra.png" class="img img-2" alt="bakra" />
    <img src="/cooler.png" class="img img-3" alt="bakra" />
    <img src="/unit.png" class="img img-4" alt="bakra" /> -->
  </div>
</template>

<style scoped>
.image-stack {
  position: relative;
  width: 600px; /* твій розмір */
  height: 450px; /* твій розмір */
}

.img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* однаковий розмір */
  height: 100%;
  object-fit: cover; /* або contain — як хочеш */
}
</style>
