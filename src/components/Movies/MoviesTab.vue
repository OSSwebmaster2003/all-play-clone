<script setup>
import { onMounted, ref, computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import axios from "axios";
import Container from "@/components/Container.vue";
import API_URL from "@/config/config.js";

const route = useRoute();
let categories = ref([]);
let isLoading = ref(true);

const fetchCategories = async () => {
  try {
    const response = await axios(`${API_URL}/categories`);
    categories.value = response?.data?.data;
  } catch (error) {
    console.log("Error fetching categories", error);
  } finally {
    isLoading.value = false;
  }
};

const currentPath = computed(() => {
  return route.path;
});

onMounted(() => {
  fetchCategories();
});
</script>

<template>
  <section class="w-full">
    <Container>
      <div v-if="isLoading">
        <h1>Loading...</h1>
      </div>

      <ul
        v-else-if="categories.length > 0"
        class="flex items-center justify-start w-full gap-5 overflow-auto border-b lg:gap-16 hide-scrollbar border-b-gray"
      >
        <li
          v-for="cat in categories"
          :key="cat?.id"
          :class="
            currentPath.endsWith(`/${cat?.id}`)
              ? 'border-b-4 border-b-white'
              : ''
          "
          class="py-4"
        >
          <RouterLink
            :to="`/${cat?.id}`"
            class="text-base font-medium opacity-75 lg:text-xl hover:opacity-100 whitespace-nowrap"
            >{{ cat?.name }}</RouterLink
          >
        </li>
      </ul>

      <div v-else>
        <h1>No categories available</h1>
      </div>
    </Container>
  </section>
</template>

<style scoped>
section {
  background: rgba(0, 0, 0, 0.5);
}
</style>
