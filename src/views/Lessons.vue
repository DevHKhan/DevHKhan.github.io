<template>
  <div class="container-fluid bg-first-color text-white pb-5 min-vh-100">
    <h1 class="p-3">Pashto Lessons</h1>

    <p>
      Welcome to the page of Pashto lessons! Your journey starts here toward
      learning this mysterious yet beautiful language. Look below to get
      started!
    </p>

    <div class="container-fluid p-5">
      <div class="row g-4">
        <div class="col-md-3" v-for="card in cards" :key="card.title">
          <div class="card h-100">
            <img :src="pashto_alphabet" class="card-img-top" :alt="card.alt" />
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <p>{{ card.description }}</p>
              <router-link :to="card.link" class="btn btn-lg"
                >Learn More</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import pashto_alphabet from "../assets/agnieszka-stankiewicz-mZ0BaGdCzQE-unsplash.jpg";
const cards = [
  {
    title: "The Pashto Alphabet",
    description:
      "Start from the fundamentals. Learn the Pashto alphabet's nuances.",
    link: "alphabet/",
    alt: "Pashto Alphabet",
  },
  {
    title: "Diacritics",
    description:
      "Learn the symbols that give the Pashto alphabets their unique sounds.",
    link: "diacritics/",
    alt: "Diacritics",
  },
  {
    title: "Forming Words",
    description:
      "Use your knowledge of Pashto letters to connect and form words.",
    link: "forming-words/",
    alt: "Forming Words",
  },
  {
    title: "Forming Sentences",
    description: "Learn how to connect words and form sentences in Pashto.",
    link: "forming-sentences/",
    alt: "Forming Sentences",
  },
  {
    title: "Pronouns",
    description: "Learn how to use pronouns in Pashto.",
    link: "pronouns/",
    alt: "Pronouns",
  },
  {
    title: "Verbs",
    description: "Learn how to use verbs in Pashto.",
    link: "verbs/",
    alt: "Verbs",
  },
];
</script>
