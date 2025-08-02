<script setup>
import PashtoCard from "../assets/pashto_card.png";
import PashtoCalligraphy from "../assets/pashto_calligraphy.png";
</script>

<template>
  <div class="container-fluid p-0">
    <div class="pt-5">
      <img
        :src="PashtoCalligraphy"
        class="border border-5 border-dark rounded-circle d-block mx-auto"
      />
    </div>

    <h1 class="display-1 my-5 fw-bold">Welcome</h1>
    <div class="col-md-6 mx-auto">
      <p class="lead text-center fw-bold">
        This is my website where you can learn Pashto. I have created numerous
        lessons to help you on your journey toward mastering this truly
        beautiful language. Enjoy!
      </p>
      <div
        class="d-flex flex-column flex-md-row justify-content-center gap-4 m-5"
      >
        <a href="/#/pashto/" class="btn btn-lg flex-fill" role="button"
          ><span class="text-white">Pashto</span></a
        >
        <a href="/#/lessons/" class="btn btn-lg flex-fill" role="button"
          ><span class="text-white"
            ><i class="fa-solid fa-book me-2"></i>Lessons</span
          ></a
        >
        <a href="/#/dictionary/" class="btn btn-lg flex-fill" role="button"
          ><span class="text-white">Dictionary</span></a
        >
      </div>
    </div>

    <div class="bg-first-color text-white p-3">
      <div class="col-md-6 mx-auto">
        <h1 class="display-1 mb-5 fw-bold">Pashto</h1>
        <p class="lead text-center fw-bold">
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
        <h1 class="display-1 mb-5 fw-bold">Interactive Lessons</h1>
        <p class="lead text-center fw-bold">
          Lessons are designed thoughtfully with an interactive approach to
          encourage active learning.
        </p>
      </div>
    </div>
    <div
      class="text-bg-dark overflow-hidden position-relative text-nowrap w-100"
    >
      <div class="marquee-slider">
        <span class="marquee-text">
          <h1 class="display-1 d-inline-block fw-bold">
            Learn | Read | Write | Speak |
          </h1>
        </span>
        <span class="marquee-text">
          <h1 class="display-1 d-inline-block fw-bold">
            Learn | Read | Write | Speak |
          </h1>
        </span>
      </div>
    </div>

    <div class="bg-first-color text-white p-3">
      <h1 class="display-1 mb-5 fw-bold">Comprehensive Dictionary</h1>
      <div class="col-md-6 mx-auto">
        <p class="lead text-center fw-bold">Never miss another word.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marqueeslide {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.container-fluid {
  background: linear-gradient(#6f4e37, #f4e3d7);
}

.marquee-slider {
  display: inline-block;
  white-space: nowrap;
  animation: marqueeslide 20s linear infinite;
}

.marquee-text {
  display: inline-block;
  white-space: nowrap;
  word-spacing: 25rem;
  margin-right: 25rem;
}
</style>
