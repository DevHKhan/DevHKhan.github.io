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

    <h1 class="display-1 my-5 animate__animated animate__fadeInDown">
      Welcome
    </h1>
    <div class="col-md-6 mx-auto">
      <p class="lead text-center">
        This is my website where you can learn Pashto. I have created numerous
        lessons to help you on your journey toward mastering this truly
        beautiful language. Enjoy!
      </p>
      <div
        class="d-flex flex-column flex-md-row justify-content-center gap-4 m-5"
      >
        <router-link
          to="/pashto/"
          class="btn btn-lg flex-fill pashto"
          role="button"
          >Pashto</router-link
        >
        <router-link
          to="/pashto/lessons/"
          class="btn btn-lg flex-fill lessons"
          role="button"
          ><i class="fa-solid fa-book me-2"></i>Lessons</router-link
        >
        <router-link
          to="/pashto/dictionary/"
          class="btn btn-lg flex-fill"
          role="button"
          >Dictionary</router-link
        >
      </div>
    </div>

    <div class="bg-first-color text-white p-3">
      <div class="col-md-6 mx-auto">
        <h1 class="display-1 mb-5">Pashto</h1>
        <p class="lead text-center">
          Let me take you on a journey to show you the true beauty of the Pashto
          language.
        </p>
        <router-link
          to="/pashto/"
          class="btn btn-lg d-block pashto"
          role="button"
        >
          Take Me There
        </router-link>
      </div>
    </div>

    <div class="bg-second-color text-first-color p-3">
      <div class="col-md-6 mx-auto">
        <h1 class="display-1 mb-5">Interactive Lessons</h1>
        <p class="lead text-center">
          Lessons are designed thoughtfully with an interactive approach to
          encourage active learning.
        </p>
        <router-link
          to="/pashto/lessons/"
          class="btn btn-lg d-block lessons"
          role="button"
          >Start Learning</router-link
        >
      </div>
    </div>

    <div class="bg-first-color text-white p-3">
      <h1 class="display-1 mb-5">Comprehensive Dictionary</h1>
      <div class="col-md-6 mx-auto">
        <p class="lead text-center">Never miss another word.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pashto {
  cursor: url("../assets/pashto_cursor.png"), auto;
}

.lessons {
  cursor: url("../assets/book-solid-full.png"), auto;
}

.container-fluid {
  background: linear-gradient(#ffd59a, #6b4423);
}
</style>
