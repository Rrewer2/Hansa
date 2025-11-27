<script setup>
import { KITtitle, agregatTitle } from "../services/functions";
// import { tankData } from "../services/data";
import { text } from "../services/text";
const { project, meta, order } = defineProps(["project", "meta", "order"]);
</script>

<template>
  <div class="image-stack">
    <img src="/tray.png" class="img img-1" alt="tray" />
    <img src="/bakra.png" class="img img-2" alt="bakra" />
    <img src="/cooler.png" class="img img-3" alt="bakra" />
    <img src="/unit.png" class="img img-4" alt="bakra" />
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

/* Порядок */
.img-1 {
  z-index: 1;
}
.img-2 {
  z-index: 2;
}
.img-3 {
  z-index: 3;
}
.img-4 {
  z-index: 4;
}
</style>
