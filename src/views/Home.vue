<script setup>
import PashtoCard from '../assets/pashto_card.png'
</script>

<template>
    <div class="container-fluid">
        <h1>Home</h1>

        <div class="card w-25 mx-auto mt-5">
            <img :src="PashtoCard" class="card-img-top" alt="Pashto">
            <div class="card-body">
            <h5 class="card-title">Learn Pashto</h5>
            <p class="card-text">Join me on a journey to learn the beautiful language of Pashto!!</p>
            <router-link to="/pashto/" class="btn btn-primary">Let's Go!</router-link>
            </div>
        </div>
                
    </div>
</template>