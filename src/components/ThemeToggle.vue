<script setup>
import { onMounted, ref } from "vue";

const darkMode = ref(false);

onMounted(() => {
  const currentTheme = document.documentElement.getAttribute("data-bs-theme");
  darkMode.value = currentTheme === "dark";
});

function themeToggle() {
  const currentTheme = document.documentElement.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-bs-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  darkMode.value = newTheme === "dark";
}
</script>

<template>
  <button class="btn btn-lg" @click="themeToggle">
    <i class="fa-solid" :class="darkMode ? 'fa-moon' : 'fa-sun'"></i>
  </button>
</template>
