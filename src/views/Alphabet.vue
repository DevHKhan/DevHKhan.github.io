<template>
  <div class="container-fluid p-0 bg-first-color text-white">
    <div class="p-3">
      <h1 class="mt-3">The Pashto Alphabet</h1>

      <div class="d-flex flex-wrap flex-row mb-5">
        <p style="max-width: 86%">
          The alphabet of Pashto is based on a modified version of the Arabic
          script. It has all of the base characters that you would find in the
          Arabic alphabet, and on top of that, it has additional letters
          exclusive to languages such as Pashto. Since Pashto has a number of
          different dialects, some letters can have more than one acceptable
          pronunciation. (I have included the different possible pronunciations
          below the letters.) The pronunciation depends on which dialect you are
          speaking. However, all of the letters are written the same way across
          all dialects. Below are the alphabets that make up the Pashto
          alphabet. Since Pashto is written from right to left, I have similarly
          arranged the letters from right to left below. The colored image shows
          how I have labeled the letters.
        </p>

        <img
          class="img-thumbnail"
          src="/assets/alphabet_example.png"
          alt="Example of how I arranged the letters"
        />
      </div>
    </div>

    <button
      class="btn btn-primary d-block mb-2 ms-3"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#isolated"
      aria-expanded="false"
      aria-controls="isolated"
    >
      Isolated Form
    </button>

    <div class="collapse bg-second-color p-3" id="isolated">
      <div
        class="d-flex flex-wrap justify-content-center flex-row-reverse gap-1 mb-5"
      >
        <img class="img-thumbnail" src="/assets/alif_isolated.png" alt="alif" />
        <img class="img-thumbnail" src="/assets/be_isolated.png" alt="be" />
        <img class="img-thumbnail" src="/assets/pe_isolated.png" alt="pe" />
        <img class="img-thumbnail" src="/assets/te_isolated.png" alt="te" />
        <img
          class="img-thumbnail"
          src="/assets/te_accent_isolated.png"
          alt="te_accent"
        />
        <img class="img-thumbnail" src="/assets/se_isolated.png" alt="se" />
        <img class="img-thumbnail" src="/assets/jeem_isolated.png" alt="jeem" />
        <img class="img-thumbnail" src="/assets/che_isolated.png" alt="che" />
        <img class="img-thumbnail" src="/assets/dze_isolated.png" alt="dze" />
        <img class="img-thumbnail" src="/assets/tse_isolated.png" alt="tse" />
        <img class="img-thumbnail" src="/assets/he_isolated.png" alt="he" />
        <img class="img-thumbnail" src="/assets/xe_isolated.png" alt="xe" />
        <img class="img-thumbnail" src="/assets/daal_isolated.png" alt="daal" />
        <img
          class="img-thumbnail"
          src="/assets/daal_accent_isolated.png"
          alt="daal_accent"
        />
        <img class="img-thumbnail" src="/assets/zaal_isolated.png" alt="zaal" />
        <img class="img-thumbnail" src="/assets/re_isolated.png" alt="re" />
        <img
          class="img-thumbnail"
          src="/assets/re_accent_isolated.png"
          alt="re_accent"
        />
        <img class="img-thumbnail" src="/assets/ze_isolated.png" alt="ze" />
        <img class="img-thumbnail" src="/assets/zhe_isolated.png" alt="zhe" />
        <img class="img-thumbnail" src="/assets/ge_isolated.png" alt="ge" />
        <img class="img-thumbnail" src="/assets/seen_isolated.png" alt="seen" />
        <img
          class="img-thumbnail"
          src="/assets/sheen_isolated.png"
          alt="sheen"
        />
        <img class="img-thumbnail" src="/assets/xeen_isolated.png" alt="xeen" />
        <img class="img-thumbnail" src="/assets/saad_isolated.png" alt="saad" />
        <img class="img-thumbnail" src="/assets/zaad_isolated.png" alt="zaad" />
        <img class="img-thumbnail" src="/assets/twe_isolated.png" alt="twe" />
        <img class="img-thumbnail" src="/assets/zwe_isolated.png" alt="zwe" />
        <img class="img-thumbnail" src="/assets/ayn_isolated.png" alt="ayn" />
        <img
          class="img-thumbnail"
          src="/assets/ghayn_isolated.png"
          alt="ghayn"
        />
        <img class="img-thumbnail" src="/assets/fe_isolated.png" alt="fe" />
        <img class="img-thumbnail" src="/assets/qaaf_isolated.png" alt="qaaf" />
        <img class="img-thumbnail" src="/assets/kaaf_isolated.png" alt="kaaf" />
        <img class="img-thumbnail" src="/assets/gaaf_isolated.png" alt="gaaf" />
        <img class="img-thumbnail" src="/assets/laam_isolated.png" alt="laam" />
        <img class="img-thumbnail" src="/assets/meem_isolated.png" alt="meem" />
        <img class="img-thumbnail" src="/assets/noon_isolated.png" alt="noon" />
        <img
          class="img-thumbnail"
          src="/assets/noon_accent_isolated.png"
          alt="noon_accent"
        />
        <img class="img-thumbnail" src="/assets/waaw_isolated.png" alt="waaw" />
        <img
          class="img-thumbnail"
          src="/assets/he_small_isolated.png"
          alt="he_small"
        />
        <img
          class="img-thumbnail"
          src="/assets/naareena_ye_isolated.png"
          alt="naareena_ye"
        />
        <img
          class="img-thumbnail"
          src="/assets/tsargunda_ye_isolated.png"
          alt="tsargunda_ye"
        />
        <img
          class="img-thumbnail"
          src="/assets/oogda_ye_isolated.png"
          alt="oogda_ye"
        />
        <img
          class="img-thumbnail"
          src="/assets/xudzeena_ye_isolated.png"
          alt="xudzeena_ye"
        />
        <img
          class="img-thumbnail"
          src="/assets/filee_ye_isolated.png"
          alt="filee_ye"
        />
      </div>
    </div>

    <button
      class="btn btn-primary d-block mb-2 ms-3"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#initial"
      aria-expanded="false"
      aria-controls="initial"
    >
      Initial Form
    </button>

    <div class="collapse bg-second-color p-3" id="initial">
      <div
        class="d-flex flex-wrap justify-content-center flex-row-reverse gap-1 mb-5"
      >
        <img class="img-thumbnail" :src="alif_initial" alt="alif" />
        <img class="img-thumbnail" :src="be_initial" alt="be" />
        <img class="img-thumbnail" :src="pe_initial" alt="pe" />
        <img class="img-thumbnail" :src="te_initial" alt="te" />
        <img class="img-thumbnail" :src="te_accent_initial" alt="te_accent" />
        <img class="img-thumbnail" :src="se_initial" alt="se" />
        <img class="img-thumbnail" :src="jeem_initial" alt="jeem" />
        <img class="img-thumbnail" :src="che_initial" alt="che" />
        <img class="img-thumbnail" :src="dze_initial" alt="dze" />
        <img class="img-thumbnail" :src="tse_initial" alt="tse" />
        <img class="img-thumbnail" :src="he_initial" alt="he" />
        <img class="img-thumbnail" :src="xe_initial" alt="xe" />
        <img class="img-thumbnail" :src="daal_initial" alt="daal" />
        <img
          class="img-thumbnail"
          :src="daal_accent_initial"
          alt="daal_accent"
        />
        <img class="img-thumbnail" :src="zaal_initial" alt="zaal" />
        <img class="img-thumbnail" :src="re_initial" alt="re" />
        <img class="img-thumbnail" :src="re_accent_initial" alt="re_accent" />
        <img class="img-thumbnail" :src="ze_initial" alt="ze" />
        <img class="img-thumbnail" :src="zhe_initial" alt="zhe" />
        <img class="img-thumbnail" :src="ge_initial" alt="ge" />
        <img class="img-thumbnail" :src="seen_initial" alt="seen" />
        <img class="img-thumbnail" :src="sheen_initial" alt="sheen" />
        <img class="img-thumbnail" :src="xeen_initial" alt="xeen" />
        <img class="img-thumbnail" :src="saad_initial" alt="saad" />
        <img class="img-thumbnail" :src="zaad_initial" alt="zaad" />
        <img class="img-thumbnail" :src="twe_initial" alt="twe" />
        <img class="img-thumbnail" :src="zwe_initial" alt="zwe" />
        <img class="img-thumbnail" :src="ayn_initial" alt="ayn" />
        <img class="img-thumbnail" :src="ghayn_initial" alt="ghayn" />
        <img class="img-thumbnail" :src="fe_initial" alt="fe" />
        <img class="img-thumbnail" :src="qaaf_initial" alt="qaaf" />
        <img class="img-thumbnail" :src="kaaf_initial" alt="kaaf" />
        <img class="img-thumbnail" :src="gaaf_initial" alt="gaaf" />
        <img class="img-thumbnail" :src="laam_initial" alt="laam" />
        <img class="img-thumbnail" :src="meem_initial" alt="meem" />
        <img class="img-thumbnail" :src="noon_initial" alt="noon" />
        <img
          class="img-thumbnail"
          :src="noon_accent_initial"
          alt="noon_accent"
        />
        <img class="img-thumbnail" :src="waaw_initial" alt="waaw" />
        <img class="img-thumbnail" :src="he_small_initial" alt="he_small" />
        <img
          class="img-thumbnail"
          :src="tsargunda_ye_initial"
          alt="tsargunda_ye"
        />
        alt="tsargunda_ye" />
      </div>
    </div>

    <button
      class="btn btn-primary d-block mb-2 ms-3"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#medial"
      aria-expanded="false"
      aria-controls="medial"
    >
      Medial Form
    </button>

    <div class="collapse bg-second-color p-3" id="medial">
      <div
        class="d-flex flex-wrap justify-content-center flex-row-reverse gap-1 mb-5"
      >
        <img class="img-thumbnail" :src="alif_medial" alt="alif" />
        <img class="img-thumbnail" :src="be_medial" alt="be" />
        <img class="img-thumbnail" :src="pe_medial" alt="pe" />
        <img class="img-thumbnail" :src="te_medial" alt="te" />
        <img class="img-thumbnail" :src="te_accent_medial" alt="te_accent" />
        <img class="img-thumbnail" :src="se_medial" alt="se" />
        <img class="img-thumbnail" :src="jeem_medial" alt="jeem" />
        <img class="img-thumbnail" :src="che_medial" alt="che" />
        <img class="img-thumbnail" :src="dze_medial" alt="dze" />
        <img class="img-thumbnail" :src="tse_medial" alt="tse" />
        <img class="img-thumbnail" :src="he_medial" alt="he" />
        <img class="img-thumbnail" :src="xe_medial" alt="xe" />
        <img class="img-thumbnail" :src="daal_medial" alt="daal" />
        <img
          class="img-thumbnail"
          :src="daal_accent_medial"
          alt="daal_accent"
        />
        <img class="img-thumbnail" :src="zaal_medial" alt="zaal" />
        <img class="img-thumbnail" :src="re_medial" alt="re" />
        <img class="img-thumbnail" :src="re_accent_medial" alt="re_accent" />
        <img class="img-thumbnail" :src="ze_medial" alt="ze" />
        <img class="img-thumbnail" :src="zhe_medial" alt="zhe" />
        <img class="img-thumbnail" :src="ge_medial" alt="ge" />
        <img class="img-thumbnail" :src="seen_medial" alt="seen" />
        <img class="img-thumbnail" :src="sheen_medial" alt="sheen" />
        <img class="img-thumbnail" :src="xeen_medial" alt="xeen" />
        <img class="img-thumbnail" :src="saad_medial" alt="saad" />
        <img class="img-thumbnail" :src="zaad_medial" alt="zaad" />
        <img class="img-thumbnail" :src="twe_medial" alt="twe" />
        <img class="img-thumbnail" :src="zwe_medial" alt="zwe" />
        <img class="img-thumbnail" :src="ayn_medial" alt="ayn" />
        <img class="img-thumbnail" :src="ghayn_medial" alt="ghayn" />
        <img class="img-thumbnail" :src="fe_medial" alt="fe" />
        <img class="img-thumbnail" :src="qaaf_medial" alt="qaaf" />
        <img class="img-thumbnail" :src="kaaf_medial" alt="kaaf" />
        <img class="img-thumbnail" :src="gaaf_medial" alt="gaaf" />
        <img class="img-thumbnail" :src="laam_medial" alt="laam" />
        <img class="img-thumbnail" :src="meem_medial" alt="meem" />
        <img class="img-thumbnail" :src="noon_medial" alt="noon" />
        <img
          class="img-thumbnail"
          :src="noon_accent_medial"
          alt="noon_accent"
        />
        <img class="img-thumbnail" :src="waaw_medial" alt="waaw" />
        <img class="img-thumbnail" :src="he_small_medial" alt="he_small" />
        <img
          class="img-thumbnail"
          :src="naareena_ye_medial"
          alt="naareena_ye"
        />
        alt="naareena_ye" />
        <img
          class="img-thumbnail"
          :src="tsargunda_ye_medial"
          alt="tsargunda_ye"
        />
        alt="tsargunda_ye" />
        <img class="img-thumbnail" :src="oogda_ye_medial" alt="oogda_ye" />
        alt="oogda_ye" />
      </div>
    </div>

    <button
      class="btn btn-primary d-block mb-2 ms-3"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#final"
      aria-expanded="false"
      aria-controls="final"
    >
      Final Form
    </button>

    <div class="collapse bg-second-color p-3" id="final">
      <div
        class="d-flex flex-wrap justify-content-center flex-row-reverse gap-1"
      >
        <img class="img-thumbnail" :src="alif_final" alt="alif" />
        <img class="img-thumbnail" :src="be_final" alt="be" />
        <img class="img-thumbnail" :src="pe_final" alt="pe" />
        <img class="img-thumbnail" :src="te_final" alt="te" />
        <img class="img-thumbnail" :src="te_accent_final" alt="te_accent" />
        <img class="img-thumbnail" :src="se_final" alt="se" />
        <img class="img-thumbnail" :src="jeem_final" alt="jeem" />
        <img class="img-thumbnail" :src="che_final" alt="che" />
        <img class="img-thumbnail" :src="dze_final" alt="dze" />
        <img class="img-thumbnail" :src="tse_final" alt="tse" />
        <img class="img-thumbnail" :src="he_final" alt="he" />
        <img class="img-thumbnail" :src="xe_final" alt="xe" />
        <img class="img-thumbnail" :src="daal_final" alt="daal" />
        <img class="img-thumbnail" :src="daal_accent_final" alt="daal_accent" />
        <img class="img-thumbnail" :src="zaal_final" alt="zaal" />
        <img class="img-thumbnail" :src="re_final" alt="re" />
        <img class="img-thumbnail" :src="re_accent_final" alt="re_accent" />
        <img class="img-thumbnail" :src="ze_final" alt="ze" />
        <img class="img-thumbnail" :src="zhe_final" alt="zhe" />
        <img class="img-thumbnail" :src="ge_final" alt="ge" />
        <img class="img-thumbnail" :src="seen_final" alt="seen" />
        <img class="img-thumbnail" :src="sheen_final" alt="sheen" />
        <img class="img-thumbnail" :src="xeen_final" alt="xeen" />
        <img class="img-thumbnail" :src="saad_final" alt="saad" />
        <img class="img-thumbnail" :src="zaad_final" alt="zaad" />
        <img class="img-thumbnail" :src="twe_final" alt="twe" />
        <img class="img-thumbnail" :src="zwe_final" alt="zwe" />
        <img class="img-thumbnail" :src="ayn_final" alt="ayn" />
        <img class="img-thumbnail" :src="ghayn_final" alt="ghayn" />
        <img class="img-thumbnail" :src="fe_final" alt="fe" />
        <img class="img-thumbnail" :src="qaaf_final" alt="qaaf" />
        <img class="img-thumbnail" :src="kaaf_final" alt="kaaf" />
        <img class="img-thumbnail" :src="gaaf_final" alt="gaaf" />
        <img class="img-thumbnail" :src="laam_final" alt="laam" />
        <img class="img-thumbnail" :src="meem_final" alt="meem" />
        <img class="img-thumbnail" :src="noon_final" alt="noon" />
        <img class="img-thumbnail" :src="noon_accent_final" alt="noon_accent" />
        <img class="img-thumbnail" :src="waaw_final" alt="waaw" />
        <img class="img-thumbnail" :src="he_small_final" alt="he_small" />
        <img class="img-thumbnail" :src="naareena_ye_final" alt="naareena_ye" />
        alt="naareena_ye" />
        <img
          class="img-thumbnail"
          :src="tsargunda_ye_final"
          alt="tsargunda_ye"
        />
        alt="tsargunda_ye" />
        <img class="img-thumbnail" :src="oogda_ye_final" alt="oogda_ye" />
        alt="oogda_ye" />
        <img class="img-thumbnail" :src="xudzeena_ye_final" alt="xudzeena_ye" />
        alt="xudzeena_ye" />
        <img class="img-thumbnail" :src="filee_ye_final" alt="filee_ye" />
        alt="filee_ye" />
      </div>
    </div>

    <div class="bg-second-color vh-100"></div>
  </div>
</template>

<script setup>
import alphabet_example from "@/assets/alphabet_example.png";

import alif_isolated from "@/assets/alif_isolated.png";
import be_isolated from "@/assets/be_isolated.png";
import pe_isolated from "@/assets/pe_isolated.png";
import te_isolated from "@/assets/te_isolated.png";
import te_accent_isolated from "@/assets/te_accent_isolated.png";
import se_isolated from "@/assets/se_isolated.png";
import jeem_isolated from "@/assets/jeem_isolated.png";
import che_isolated from "@/assets/che_isolated.png";
import dze_isolated from "@/assets/dze_isolated.png";
import tse_isolated from "@/assets/tse_isolated.png";
import he_isolated from "@/assets/he_isolated.png";
import xe_isolated from "@/assets/xe_isolated.png";
import daal_isolated from "@/assets/daal_isolated.png";
import daal_accent_isolated from "@/assets/daal_accent_isolated.png";
import zaal_isolated from "@/assets/zaal_isolated.png";
import re_isolated from "@/assets/re_isolated.png";
import re_accent_isolated from "@/assets/re_accent_isolated.png";
import ze_isolated from "@/assets/ze_isolated.png";
import zhe_isolated from "@/assets/zhe_isolated.png";
import ge_isolated from "@/assets/ge_isolated.png";
import seen_isolated from "@/assets/seen_isolated.png";
import sheen_isolated from "@/assets/sheen_isolated.png";
import xeen_isolated from "@/assets/xeen_isolated.png";
import saad_isolated from "@/assets/saad_isolated.png";
import zaad_isolated from "@/assets/zaad_isolated.png";
import twe_isolated from "@/assets/twe_isolated.png";
import zwe_isolated from "@/assets/zwe_isolated.png";
import ayn_isolated from "@/assets/ayn_isolated.png";
import ghayn_isolated from "@/assets/ghayn_isolated.png";
import fe_isolated from "@/assets/fe_isolated.png";
import qaaf_isolated from "@/assets/qaaf_isolated.png";
import kaaf_isolated from "@/assets/kaaf_isolated.png";
import gaaf_isolated from "@/assets/gaaf_isolated.png";
import laam_isolated from "@/assets/laam_isolated.png";
import meem_isolated from "@/assets/meem_isolated.png";
import noon_isolated from "@/assets/noon_isolated.png";
import noon_accent_isolated from "@/assets/noon_accent_isolated.png";
import waaw_isolated from "@/assets/waaw_isolated.png";
import he_small_isolated from "@/assets/he_small_isolated.png";
import naareena_ye_isolated from "@/assets/naareena_ye_isolated.png";
import tsargunda_ye_isolated from "@/assets/tsargunda_ye_isolated.png";
import oogda_ye_isolated from "@/assets/oogda_ye_isolated.png";
import xudzeena_ye_isolated from "@/assets/xudzeena_ye_isolated.png";
import filee_ye_isolated from "@/assets/filee_ye_isolated.png";

import alif_initial from "@/assets/alif_initial.png";
import be_initial from "@/assets/be_initial.png";
import pe_initial from "@/assets/pe_initial.png";
import te_initial from "@/assets/te_initial.png";
import te_accent_initial from "@/assets/te_accent_initial.png";
import se_initial from "@/assets/se_initial.png";
import jeem_initial from "@/assets/jeem_initial.png";
import che_initial from "@/assets/che_initial.png";
import dze_initial from "@/assets/dze_initial.png";
import tse_initial from "@/assets/tse_initial.png";
import he_initial from "@/assets/he_initial.png";
import xe_initial from "@/assets/xe_initial.png";
import daal_initial from "@/assets/daal_initial.png";
import daal_accent_initial from "@/assets/daal_accent_initial.png";
import zaal_initial from "@/assets/zaal_initial.png";
import re_initial from "@/assets/re_initial.png";
import re_accent_initial from "@/assets/re_accent_initial.png";
import ze_initial from "@/assets/ze_initial.png";
import zhe_initial from "@/assets/zhe_initial.png";
import ge_initial from "@/assets/ge_initial.png";
import seen_initial from "@/assets/seen_initial.png";
import sheen_initial from "@/assets/sheen_initial.png";
import xeen_initial from "@/assets/xeen_initial.png";
import saad_initial from "@/assets/saad_initial.png";
import zaad_initial from "@/assets/zaad_initial.png";
import twe_initial from "@/assets/twe_initial.png";
import zwe_initial from "@/assets/zwe_initial.png";
import ayn_initial from "@/assets/ayn_initial.png";
import ghayn_initial from "@/assets/ghayn_initial.png";
import fe_initial from "@/assets/fe_initial.png";
import qaaf_initial from "@/assets/qaaf_initial.png";
import kaaf_initial from "@/assets/kaaf_initial.png";
import gaaf_initial from "@/assets/gaaf_initial.png";
import laam_initial from "@/assets/laam_initial.png";
import meem_initial from "@/assets/meem_initial.png";
import noon_initial from "@/assets/noon_initial.png";
import noon_accent_initial from "@/assets/noon_accent_initial.png";
import waaw_initial from "@/assets/waaw_initial.png";
import he_small_initial from "@/assets/he_small_initial.png";
import tsargunda_ye_initial from "@/assets/tsargunda_ye_initial.png";

import alif_medial from "@/assets/alif_medial.png";
import be_medial from "@/assets/be_medial.png";
import pe_medial from "@/assets/pe_medial.png";
import te_medial from "@/assets/te_medial.png";
import te_accent_medial from "@/assets/te_accent_medial.png";
import se_medial from "@/assets/se_medial.png";
import jeem_medial from "@/assets/jeem_medial.png";
import che_medial from "@/assets/che_medial.png";
import dze_medial from "@/assets/dze_medial.png";
import tse_medial from "@/assets/tse_medial.png";
import he_medial from "@/assets/he_medial.png";
import xe_medial from "@/assets/xe_medial.png";
import daal_medial from "@/assets/daal_medial.png";
import daal_accent_medial from "@/assets/daal_accent_medial.png";
import zaal_medial from "@/assets/zaal_medial.png";
import re_medial from "@/assets/re_medial.png";
import re_accent_medial from "@/assets/re_accent_medial.png";
import ze_medial from "@/assets/ze_medial.png";
import zhe_medial from "@/assets/zhe_medial.png";
import ge_medial from "@/assets/ge_medial.png";
import seen_medial from "@/assets/seen_medial.png";
import sheen_medial from "@/assets/sheen_medial.png";
import xeen_medial from "@/assets/xeen_medial.png";
import saad_medial from "@/assets/saad_medial.png";
import zaad_medial from "@/assets/zaad_medial.png";
import twe_medial from "@/assets/twe_medial.png";
import zwe_medial from "@/assets/zwe_medial.png";
import ayn_medial from "@/assets/ayn_medial.png";
import ghayn_medial from "@/assets/ghayn_medial.png";
import fe_medial from "@/assets/fe_medial.png";
import qaaf_medial from "@/assets/qaaf_medial.png";
import kaaf_medial from "@/assets/kaaf_medial.png";
import gaaf_medial from "@/assets/gaaf_medial.png";
import laam_medial from "@/assets/laam_medial.png";
import meem_medial from "@/assets/meem_medial.png";
import noon_medial from "@/assets/noon_medial.png";
import noon_accent_medial from "@/assets/noon_accent_medial.png";
import waaw_medial from "@/assets/waaw_medial.png";
import he_small_medial from "@/assets/he_small_medial.png";
import naareena_ye_medial from "@/assets/naareena_ye_medial.png";
import tsargunda_ye_medial from "@/assets/tsargunda_ye_medial.png";
import oogda_ye_medial from "@/assets/oogda_ye_medial.png";

import alif_final from "@/assets/alif_final.png";
import be_final from "@/assets/be_final.png";
import pe_final from "@/assets/pe_final.png";
import te_final from "@/assets/te_final.png";
import te_accent_final from "@/assets/te_accent_final.png";
import se_final from "@/assets/se_final.png";
import jeem_final from "@/assets/jeem_final.png";
import che_final from "@/assets/che_final.png";
import dze_final from "@/assets/dze_final.png";
import tse_final from "@/assets/tse_final.png";
import he_final from "@/assets/he_final.png";
import xe_final from "@/assets/xe_final.png";
import daal_final from "@/assets/daal_final.png";
import daal_accent_final from "@/assets/daal_accent_final.png";
import zaal_final from "@/assets/zaal_final.png";
import re_final from "@/assets/re_final.png";
import re_accent_final from "@/assets/re_accent_final.png";
import ze_final from "@/assets/ze_final.png";
import zhe_final from "@/assets/zhe_final.png";
import ge_final from "@/assets/ge_final.png";
import seen_final from "@/assets/seen_final.png";
import sheen_final from "@/assets/sheen_final.png";
import xeen_final from "@/assets/xeen_final.png";
import saad_final from "@/assets/saad_final.png";
import zaad_final from "@/assets/zaad_final.png";
import twe_final from "@/assets/twe_final.png";
import zwe_final from "@/assets/zwe_final.png";
import ayn_final from "@/assets/ayn_final.png";
import ghayn_final from "@/assets/ghayn_final.png";
import fe_final from "@/assets/fe_final.png";
import qaaf_final from "@/assets/qaaf_final.png";
import kaaf_final from "@/assets/kaaf_final.png";
import gaaf_final from "@/assets/gaaf_final.png";
import laam_final from "@/assets/laam_final.png";
import meem_final from "@/assets/meem_final.png";
import noon_final from "@/assets/noon_final.png";
import noon_accent_final from "@/assets/noon_accent_final.png";
import waaw_final from "@/assets/waaw_final.png";
import he_small_final from "@/assets/he_small_final.png";
import naareena_ye_final from "@/assets/naareena_ye_final.png";
import tsargunda_ye_final from "@/assets/tsargunda_ye_final.png";
import oogda_ye_final from "@/assets/oogda_ye_final.png";
import xudzeena_ye_final from "@/assets/xudzeena_ye_final.png";
import filee_ye_final from "@/assets/filee_ye_final.png";
</script>
