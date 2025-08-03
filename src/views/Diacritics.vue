<template>
  <div class="container-fluid p-0 bg-first-color text-white">
    <h1 class="pt-3">Diacritics</h1>

    <div class="p-3">
      <h2>What Are Diacritics?</h2>

      <p>
        In linguistics, diacritics are marks that are added to letters to
        clarify how they are pronounced. This can be helpful in languages like
        Pashto that are written in such a way that the pronunciation of words
        might not be obvious unless one already knows how to pronounce them.
        While diacritics are usually not used in common Pashto writing, they can
        sometimes be seen here and there, and they are very useful in works like
        dictionaries to eliminate confusion about how to pronounce words.
      </p>
    </div>

    <div class="bg-second-color text-first-color p-3">
      <h2>The Pashto Diacritics</h2>

      <p>
        Below are the diacritics of Pashto. Since Pashto is written from right
        to left, I have similarly arranged the diacritics from right to left
        below. The colored image shows how I have labeled the letters.
      </p>

      <img
        class="img-thumbnail"
        src="../assets/diacritic_example.png"
        alt="Example of how I arranged the diacritics"
      />

      <div
        class="d-flex flex-wrap justify-content-end flex-row-reverse gap-1 my-3"
      >
        <img class="img-thumbnail" src="../assets/zwar.png" alt="zwar" />
        <img
          class="img-thumbnail"
          src="../assets/zwarakay.png"
          alt="zwarakay"
        />
        <img class="img-thumbnail" src="../assets/zer.png" alt="zer" />
        <img class="img-thumbnail" src="../assets/pex.png" alt="pex" />
      </div>
    </div>

    <div class="p-3">
      <h2>How Do They Work?</h2>

      <p>
        These diacritics are basically placed on letters in different ways to
        show their pronunciations. In the images, the dotted circles are where
        letters would be placed for each diacritic. To pronounce a letter with a
        diacritic, the sound of the letter itself is pronounced first, and then
        the diacritic's sound follows shortly after. (If you are unfamiliar with
        the alphabets and their sounds, I have a
        <a href="/pashto/lessons/alphabet/">lesson</a> on that.)
      </p>

      <p>
        Feel free to try out the examples below and guess what they should sound
        like.
      </p>

      <div class="d-flex flex-wrap gap-1 my-3">
        <div class="d-flex flex-wrap justify-content-center flex-column gap-1">
          <img class="img-thumbnail" :src="diacritic_q1" alt="Question 1" />
          <button class="btn my-3" @click="revealQ1">Answer</button>
        </div>
        <div class="d-flex flex-wrap justify-content-center flex-column gap-1">
          <img class="img-thumbnail" :src="diacritic_q2" alt="Question 2" />
          <button class="btn my-3" @click="revealQ2">Answer</button>
        </div>
      </div>

      <div class="d-flex flex-wrap gap-1 my-3">
        <div v-show="showQ1" ref="q1AnswerRef">
          <img class="img-thumbnail" :src="diacritic_a1" alt="Answer 1" />
        </div>
        <div v-show="showQ2" ref="q2AnswerRef">
          <img class="img-thumbnail" :src="diacritic_a2" alt="Answer 2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import diacritic_q1 from "../assets/diacritic_q1.png";
import diacritic_q2 from "../assets/diacritic_q2.png";
import diacritic_a1 from "../assets/diacritic_a1.png";
import diacritic_a2 from "../assets/diacritic_a2.png";

const showQ1 = ref(false);
const showQ2 = ref(false);
const q1AnswerRef = ref(null);
const q2AnswerRef = ref(null);

function revealQ1() {
  showQ1.value = !showQ1.value;

  if (showQ1.value) {
    setTimeout(() => {
      q1AnswerRef.value?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  }
}

function revealQ2() {
  showQ2.value = !showQ2.value;

  if (showQ2.value) {
    setTimeout(() => {
      q2AnswerRef.value?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  }
}
</script>
