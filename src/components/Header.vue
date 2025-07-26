<template>
    <div class="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/"><i class="fa-solid fa-house me-2"></i>Home</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/pashto/">Pashto</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/pashto/lessons/"><i class="fa-solid fa-book me-2"></i>Lessons</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div id="scroll_progress"></div>

    </div>
</template>