<script setup>
import { ref, onMounted } from "vue";

const showBox = ref(true);

// onMounted(() => {
//   setTimeout(() => {
//     showBox.value = false;
//   }, 1500);
// });
</script>

<template>
  <transition name="fade">
    <img v-if="showBox" class="logo" src="/agregat.jpg" />
  </transition>
</template>

<style>
/* Тривалість анімації */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

/* Початок та кінець */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.intro-box {
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 20px;
}
</style>
