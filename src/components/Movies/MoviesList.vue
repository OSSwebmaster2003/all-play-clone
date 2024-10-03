<script setup>
import Container from "@/components/Container.vue";
import MovieCard from "@/components/Movies/MovieCard.vue";
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import API_URL from "@/config/config.js";

const movies = ref([]);
const currPage = ref(1);
const observer = ref(null);
const isLoading = ref(false);

const route = useRoute();

const fetchMovies = async () => {
  let currentQuery = route.query.category;
  if (isLoading.value) return;
  isLoading.value = true;

  try {
    const response = await axios.get(
      `${API_URL}/movies?per_page=12&category=${
        currentQuery == null ? "movies" : currentQuery
      }&page=${currPage.value}`
    );
    movies.value = [...movies.value, ...response?.data?.data];
  } catch (error) {
    console.log("Error fetching movies", error);
  } finally {
    isLoading.value = false;
  }
};

watch(
  () => route.query.category,
  (newQuery) => {
    fetchMovies();
  },
  { immediate: true }
);

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
      <h1 class="lg:text-3xl text-lg font-bold leading-[1.2]">Yangi</h1>
      <div
        class="grid grid-cols-2 gap-2 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      >
        <MovieCard v-for="movie in movies" :key="movie?.id" :movie="movie" />
      </div>
      <div id="sentinel" class="w-full h-10 mt-4"></div>
    </Container>
  </section>
</template>
