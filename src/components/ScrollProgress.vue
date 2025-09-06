<template>
  <div class="scroll-progress" :style="{ width: progressWidth }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const progressWidth = ref("0%");

function getScrollProgress() {
  const pageHeight = document.body.scrollHeight - window.innerHeight;
  const percentProgress = (window.scrollY / pageHeight) * 100;
  progressWidth.value = percentProgress + "%";
}

onMounted(() => {
  window.addEventListener("scroll", getScrollProgress);
});

onUnmounted(() => {
  window.removeEventListener("scroll", getScrollProgress);
});

window.onscroll = getScrollProgress;
</script>
