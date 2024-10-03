<script setup>
import MoviesSwiper from "@/components/Movies/MoviesSwiper.vue";
import MoviesTab from "@/components/Movies/MoviesTab.vue";
import MoviesList from "@/components/Movies/MoviesList.vue";
</script>

<template>
  <div class="w-full mt-20">
    <MoviesTab />
    <MoviesSwiper />
    <MoviesList />
  </div>
</template>
