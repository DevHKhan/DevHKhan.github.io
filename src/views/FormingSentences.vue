<template>
  <div class="container-fluid p-0 bg-first-color text-white">
    <div class="p-3">
      <h1 class="pt-3">Forming Sentences</h1>

      <p>Now, we will look at how to form full sentences in Pashto.</p>
    </div>

    <div class="bg-second-color text-first-color p-3">
      <h2>How Do Sentences Form?</h2>

      <p>
        Words are separated by spaces. Pashto has the following puncutation
        marks that are very similar to the ones found in English:
      </p>

      <div class="d-flex justify-content-end flex-row-reverse gap-1">
        <img class="img-thumbnail" :src="period" alt="Period" />
        <img class="img-thumbnail" :src="question_mark" alt="Question mark" />
        <img
          class="img-thumbnail"
          :src="exclamation_mark"
          alt="Exclamation mark"
        />
      </div>

      <p class="mt-3">
        In addition, it is important to remember that Pashto is written from
        right to left. (The only exception stems from numbers, as they are
        written from left to right.)
      </p>
    </div>

    <div class="p-3">
      <h2>Sentence Structure</h2>

      <p>
        Sentences in Pashto follow the SOV (subject-object-verb) structure. This
        is different from the familiar SVO (subject-verb-object) structure that
        English uses.
      </p>

      <h3>Examples</h3>

      <p>Below is the color code that I used.</p>

      <ul>
        <li class="text-danger">Subject</li>
        <li class="text-success">Object</li>
        <li class="text-primary">Verb</li>
      </ul>

      <ul class="fs-3">
        <li>
          <span class="text-pashto"
            ><span class="text-danger">زه</span>
            <span class="text-success">اوبه</span>
            <span class="text-primary">څښم</span>.</span
          >
          - <span class="text-danger">I</span>
          <span class="text-primary">drink</span>
          <span class="text-success">water</span>.
        </li>

        <ul class="fs-3">
          <li><b>[zə u'bə t͡sxəm]</b></li>
        </ul>

        <li>
          <span class="text-pashto"
            ><span class="text-danger">ته</span>
            <span class="text-success">۲۶ کتابونه</span>
            <span class="text-primary">لرې</span>.</span
          >
          - <span class="text-danger">You</span>
          <span class="text-primary">have</span>
          <span class="text-success">26 books</span>.
        </li>

        <ul class="fs-3">
          <li><b>[t̪ə 'ʃpəɡ.wiʃt̪ kɪ.t̪ɑ'bu.na la're]</b></li>
        </ul>
      </ul>
    </div>

    <div class="bg-second-color text-first-color p-3">
      <h2>Wait, This Doesn't Look Familiar!</h2>

      <p>
        Don't worry! These examples were only meant to introduce you to the
        basic sentence structure of Pashto. You will learn more of these
        vocabulary words later on. For now, just recognize the SOV structure and
        how the words work together in the above sentences to make that
        structure work.
      </p>
    </div>

    <div class="p-3">
      <h2>Interrogative Sentences</h2>

      <p>
        In Pashto, interrogative sentences generally follow the same word order
        as other sentences in Pashto: SOV. Here are some common question words
        in Pashto:
      </p>

      <ul class="fs-3">
        <li><span class="text-pashto">څنګه؟</span> - How?</li>
        <ul>
          <li><b>[ˈt͡san.ɡa]</b></li>
        </ul>
        <li><span class="text-pashto">څوک؟</span> - Who?</li>
        <ul>
          <li><b>[t͡sok]</b></li>
        </ul>
        <li><span class="text-pashto">څه؟</span> - What?</li>
        <ul>
          <li><b>[t͡sə]</b></li>
        </ul>
        <li><span class="text-pashto">ولې؟</span> - Why?</li>
        <ul>
          <li><b>[ˈwa.le]</b></li>
        </ul>
        <li><span class="text-pashto">چېرته؟</span> - Where?</li>
        <ul>
          <li><b>[ˈt͡ʃer.t̪a]</b></li>
        </ul>
        <li><span class="text-pashto">کله؟</span> - When?</li>
        <ul>
          <li><b>[ˈka.la]</b></li>
        </ul>
      </ul>

      <p>
        Generally, the following rules apply when forming interrogative
        sentences in Pashto:
      </p>

      <ul>
        <li>
          If there is a subject, put it first before other words. The question
          word will follow the subject.
        </li>
        <li>
          If the subject is the question word itself, it should still be first
          in the sentence.
        </li>
        <li>If the subject is omitted, the question word will be first.</li>
      </ul>

      <h3>Examples (Subject First, Question Word After)</h3>

      <ul class="fs-3">
        <li>
          <span class="text-pashto"
            ><span class="text-danger">تا</span> ولې
            <span class="text-success">کتاب</span>
            <span class="text-primary">ولیدلو</span>؟</span
          >
          - Why did <span class="text-danger">you</span>
          <span class="text-primary">see</span>
          <span class="text-success">the book</span>?
        </li>

        <ul>
          <li><b>[t̪ɑ ˈwa.le kɪˈt̪ab ˈu.li.d̪ə.lo]</b></li>
        </ul>

        <li>
          <span class="text-pashto"
            ><span class="text-danger">هغه</span> چېرته
            <span class="text-primary">وه</span>؟</span
          >
          - Where <span class="text-primary">was</span>
          <span class="text-danger">she</span>?
        </li>

        <ul>
          <li><b>[haˈɣa ˈt͡ʃer.t̪a wa]</b></li>
        </ul>

        <li>
          <span class="text-pashto"
            ><span class="text-danger">تا</span> څه
            <span class="text-primary">کول</span>؟</span
          >
          - What were <span class="text-danger">you</span>
          <span class="text-primary">doing</span>?
        </li>

        <ul>
          <li><b>[t̪ɑ t͡sə kaˈwəl]</b></li>
        </ul>
      </ul>

      <h3>Examples (No Subject, Question Word First)</h3>

      <ul class="fs-3">
        <li>
          <span class="text-pashto"
            >څه <span class="text-primary">کوې</span>؟</span
          >
          - What are you <span class="text-primary">doing</span>? / What do you
          <span class="text-primary">do</span>?
        </li>

        <ul>
          <li><b>[t͡sə kaˈwe]</b></li>
        </ul>

        <li>
          <span class="text-pashto"
            >کله <span class="text-primary">راځي</span>؟</span
          >
          - When is he/she/it <span class="text-primary">coming</span>? / When
          does he/she/it <span class="text-primary">come</span>?
        </li>

        <ul>
          <li><b>[ˈka.la rɑˈd͡zi]</b></li>
        </ul>
      </ul>
    </div>

    <div class="bg-second-color text-first-color p-3">
      <h2>Multiple Meanings?</h2>

      <p>
        As you might have noticed, some of the words and sentences from our
        examples have multiple meanings! This can happen a decent bit in Pashto.
        Luckily, context will usually clarify the correct meaning. In future
        lessons, we will explore this concept in more depth.
      </p>
    </div>
  </div>
</template>

<script setup>
import period from "../assets/period.png";
import question_mark from "../assets/question_mark.png";
import exclamation_mark from "../assets/exclamation_mark.png";
</script>
