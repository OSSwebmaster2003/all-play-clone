<script setup>
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import Container from "@/components/Container.vue";
import SwiperCard from "@/components/Movies/SwiperCard.vue";
import API_URL from "@/config/config.js";
import axios from "axios";
import "swiper/css/pagination";
import "swiper/css";

const modules = [Pagination];

const isLoading = ref(true);
const featuredMovies = ref([]);

const fetchFeaturedMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/featured?category=movies`);
    featuredMovies.value = response?.data?.data;
  } catch (error) {
    console.log("Error fetching featured movies", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchFeaturedMovies();
});
</script>

<template>
  <section class="px-4 sm:px-[34px] md:px-[52px] lg:px-[70px] mt-10">
    <div v-if="isLoading"><h1>Loading...</h1></div>

    <Swiper
      v-else-if="featuredMovies.length > 0"
      :slidesPerView="'auto'"
      :spaceBetween="30"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide v-for="movie in featuredMovies" :key="movie?.id">
        <SwiperCard :movie="movie" />
      </SwiperSlide>
    </Swiper>

    <div v-else><h1>No data available</h1></div>
  </section>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: 70%;
}

.swiper-slide-active {
  width: 70%;
}

@media (max-width: 1200px) {
  .swiper-slide {
    width: 85%;
  }
  .swiper-slide-active {
    width: 85%;
  }
}
</style>
