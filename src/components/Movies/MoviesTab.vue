<script setup>
import { onMounted, ref, computed, watch, onBeforeUnmount } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import axios from "axios";
import Container from "@/components/Container.vue";
import API_URL from "@/config/config.js";

const route = useRoute();
const router = useRouter();

let category = ref("movies");
let categories = ref([]);
let isLoading = ref(true);

const isSticky = ref(false);
const tabSection = ref(null);
let headerHeight = 92;

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

watch(
  () => route.query.category,
  (newCategory) => {
    category.value = newCategory ? newCategory : null;
  },
  { immediate: true }
);

const currentPath = computed(() => {
  return route.path;
});

const currentCategoryId = computed(() => {
  return route.query.category || null;
});

const handleFilterClick = (filter) => {
  if (filter?.id == "movies") {
    router.push({ path: route.path });
  } else {
    router.push({
      path: route.path,
      query: { category: filter?.id },
    });
  }
};

// make it sticky
const handleScroll = () => {
  if (window.scrollY >= headerHeight) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};

onMounted(() => {
  fetchCategories();
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <section
    :class="['w-full', { 'sticky top-[110px] bg-black': isSticky }]"
    ref="tabSection"
  >
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
          @click="handleFilterClick(cat)"
          :class="{
            'border-b-4 border-b-white':
              currentCategoryId === cat?.id ||
              (currentCategoryId === null && cat.id === 'movies'),
          }"
          class="py-4 cursor-pointer"
        >
          <span
            class="text-base font-medium opacity-75 lg:text-xl hover:opacity-100 whitespace-nowrap"
            >{{ cat?.name }}</span
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
.sticky {
  position: sticky;
  top: 82px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  z-index: 30;
}
</style>
