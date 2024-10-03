<script setup>
import Container from "@/components/Container.vue";
import MovieCard from "@/components/Movies/MovieCard.vue";
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import axios from "axios";
import API_URL from "@/config/config.js";

const movies = ref([]);
const currPage = ref(1);
const observer = ref(null);
const isLoading = ref(false);

const fetchMovies = async () => {
  if (isLoading.value) return;
  isLoading.value = true;

  try {
    const response = await axios.get(
      `${API_URL}/movies?per_page=12&category=movies&page=${currPage.value}`
    );
    movies.value = [...movies.value, ...response?.data?.data];
  } catch (error) {
    console.log("Error fetching movies", error);
  } finally {
    isLoading.value = false;
  }
};

const createObserver = () => {
  observer.value = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      currPage.value++;
      fetchMovies();
    }
  });
};

const cleanupObserver = () => {
  if (observer.value) observer.value.disconnect();
};

onMounted(() => {
  fetchMovies();
  createObserver();
  const sentinel = document.getElementById("sentinel");
  if (observer.value && sentinel) {
    observer.value.observe(sentinel);
  }
});

onBeforeUnmount(() => {
  cleanupObserver();
});
</script>

<template>
  <section class="mt-20">
    <Container>
      <h1 class="text-3xl font-bold leading-[1.2]">Yangi</h1>
      <div class="grid grid-cols-6 gap-2 mt-4">
        <MovieCard v-for="movie in movies" :key="movie?.id" :movie="movie" />
      </div>
      <div id="sentinel" class="w-full h-10 mt-4"></div>
    </Container>
  </section>
</template>
