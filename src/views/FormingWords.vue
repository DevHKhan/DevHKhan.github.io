<template>
  <div class="container-fluid p-0 bg-first-color text-white">
    <h1 class="pt-3">Forming Words</h1>

    <div class="p-3">
      <p>
        Now that you are familiar with the Pashto alphabet and diacritics, you
        will soon be able to learn how to form words. The Arabic script (the
        script that Pashto is based on) has letters that actually change form
        depending on where they are located in a certain word.
      </p>
    </div>

    <div class="bg-second-color text-first-color p-3">
      <h2>How Do Words Form?</h2>

      <p>
        Basically, letters are joined and connected together to form different
        words. The way that these letters appear in these words depends on where
        they are located within the words.
      </p>

      <ul>
        <li>
          If a letter appears at the start of a word, it will take on its
          initial form.
        </li>
        <li>
          If a letter appears in the middle of a word, it will take on its
          medial form.
        </li>
        <li>
          If a letter appears at the end of a word, it will take on its final
          form.
        </li>
      </ul>

      <p>
        Furthermore, letters typically have understood diacritics on them.
        However, these diacritics are usually not written out, often only
        showing themselves in dictionaries to help readers achieve the correct
        pronunciation. For the most part, diacritics are meant to be understood
        by the reader without being explicitly denoted. Below is an example of a
        full word in Pashto.
      </p>

      <figure class="text-center">
        <img
          :src="pashto"
          alt='The word "Pashto" in the Pashto
        script (no diacritics)'
        />
        <figcaption>
          The written form of the word "Pashto" in the Pashto language (without
          diacritics)
        </figcaption>
      </figure>

      <p>
        Below is the same word, but this time, the word has been marked with
        diacritics.
      </p>

      <figure class="text-center">
        <img
          :src="pashto_with_diacritics"
          alt='The word "Pashto" in
        the Pashto script (diacritics)'
        />
        <figcaption>
          The written form of the word "Pashto" in the Pashto language (with
          diacritics)
        </figcaption>
      </figure>
    </div>

    <div class="p-3">
      <h2>Pronouncing These Words</h2>

      <p>We have formed a word. Now, how do we pronounce it?</p>

      <p>
        As I mentioned in my
        <a href="/#/pashto/lessons/diacritics/">lesson</a> on diacritics,
        pronouncing a letter with a diacritic takes two steps.
      </p>

      <ol>
        <li>The sound of just the letter is pronounced.</li>
        <li>Then, pronounce the diacritic shortly after that.</li>
      </ol>

      <p>
        The same process is relevant for pronouncing full words. Take a look at
        the word "Pashto" again. The letter <i>pe</i> has a
        <i>zwarakay</i> diacritic over it, so that first part of the word reads
        <b>[pə]</b> (the IPA pronunciation).
      </p>

      <p>
        If a letter has no diacritic over it even when other letters have them,
        it will typically be pronounced without any sort of diacritic modifier.
        Since there is no diacritic over the <i>xīn</i>, the letter
        <i>xīn</i> reads as one of <b>[ʂ/ʃ/ç/x]</b>. (The sound you choose comes
        down to your dialect.)
      </p>

      <p>
        The letter <i>te</i> features a <i>pex</i> diacritic, suggesting that it
        could either be pronounced as [t̪u] or [t̪o]. Unfortunately, it may be a
        bit difficult to know the correct option unless you have already been
        told it. In a dictionary with English and Pashto, a solution might be to
        transliterate the word into English and emphasize the correct
        pronunciation: <b>[t̪o]</b>.
      </p>

      <p>
        Putting it all together, we have all of the following as acceptable
        pronunciations of "Pashto":
      </p>

      <ul>
        <li><b>[pəʂ't̪o]</b></li>
        <li><b>[pəʃ't̪o]</b></li>
        <li><b>[pəç't̪o]</b></li>
        <li><b>[pəx't̪o]</b></li>
      </ul>

      <p>
        (Note that the syllable stress was not really implied when the word was
        written. This also typically needs to be specified in some way or known
        beforehand.)
      </p>
    </div>
  </div>
</template>

<script setup>
import pashto from "../assets/pashto.png";
import pashto_with_diacritics from "../assets/pashto_with_diacritics.png";
</script>
