<script setup>
import PashtoCard from "../assets/pashto_card.png";
import PashtoCalligraphy from "../assets/pashto_calligraphy.png";
</script>

<template>
  <div class="container-fluid p-0 fw-bold">
    <div class="pt-5">
      <img
        :src="PashtoCalligraphy"
        class="border border-5 border-dark rounded-circle d-block mx-auto"
      />
    </div>

    <h1 class="display-1 text-center my-5">Welcome</h1>
    <div class="col-md-6 mx-auto">
      <p class="lead text-center">
        This is my website where you can learn Pashto. I have created numerous
        lessons to help you on your journey toward mastering this truly
        beautiful language. Enjoy!
      </p>
    </div>

    <div class="bg-first-color text-white p-3">
      <div class="col-md-6 mx-auto">
        <h1 class="display-1 mb-5">Pashto</h1>
        <p class="lead text-center">
          Let me take you on a journey to show you the true beauty of the Pashto
          language.
        </p>
        <a
          href="/#/pashto/"
          class="btn btn-primary d-block mx-auto"
          role="button"
        >
          Take Me There
        </a>
      </div>
    </div>

    <div class="bg-second-color text-first-color p-3">
      <div class="col-md-6 mx-auto">
        <h1 class="display-1 mb-5">Interactive Lessons</h1>
        <p class="lead text-center">
          Lessons are designed thoughtfully with an interactive approach to
          encourage active learning.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  background: linear-gradient(#6f4e37, #f4e3d7);
}
</style>
