<script setup>
import axios from "axios";
import { onMounted, ref, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Container from "@/components/Container.vue";
import Channels from "@/components/Channels.vue";
import API_URL from "@/config/config.js";

const route = useRoute();
const router = useRouter();

let search = ref("");
let categoryId = ref(null);
let channels = ref([]);
let isLoading = ref(true);
let searchDebounceTimeout = null;

const fetchChannels = async () => {
  try {
    const response = await axios.get(`${API_URL}/iptv/channels`);
    channels.value = response?.data?.data;
  } catch (error) {
    console.log("Error fetching channels", error);
  } finally {
    isLoading.value = false;
  }
};

// watch categoryId
watch(
  () => route.query.categoryId,
  (newCategoryId) => {
    categoryId.value = newCategoryId ? Number(newCategoryId) : null;
  },
  { immediate: true }
);

const filteredChannelsByCategory = computed(() => {
  if (!categoryId.value) {
    return channels.value;
  }

  return channels.value.filter((channel) =>
    channel.categories.some((cat) => cat.id == categoryId.value)
  );
});

const filteredChannelsBySearch = computed(() => {
  if (!search.value.trim()) {
    return filteredChannelsByCategory.value;
  } else {
    return filteredChannelsByCategory.value.filter((channel) =>
      channel?.name.toLowerCase().includes(search.value.toLowerCase())
    );
  }
});

// const filteredChannels = computed(async () => {});

onMounted(() => {
  fetchChannels();
});

// mock data
const filters = [
  {
    label: "Hammasi",
    categoryId: null,
  },
  {
    label: "Yangiliklar",
    categoryId: 6,
  },
  {
    label: "Premium",
    categoryId: 9,
  },
  {
    label: "Kino",
    categoryId: 7,
  },
  {
    label: "Ilmiy",
    categoryId: 8,
  },
  {
    label: "Sport",
    categoryId: 3,
  },
  {
    label: "Musiqa",
    categoryId: 5,
  },
  {
    label: "Bolalar uchun",
    categoryId: 4,
  },
  {
    label: "O'zbek",
    categoryId: 2,
  },
];

// filter functionality
const handleFilterClick = (filter) => {
  if (filter.categoryId === null) {
    router.push({
      path: route.path,
    });
  } else {
    router.push({
      path: route.path,
      query: {
        categoryId: filter?.categoryId,
      },
    });
  }
};
</script>

<template>
  <section class="py-9">
    <Container>
      <div v-if="isLoading">Loading...</div>

      <div v-else-if="channels.length">
        <h2 class="text-2xl md:text-[40px] font-sans font-medium w-full">
          Kanallar ro'yxati
        </h2>
        <!-- filters  -->
        <ul
          class="flex items-center justify-start w-full gap-2 pb-2 mt-6 overflow-auto overflow-x-scroll"
        >
          <li
            v-for="(filter, index) in filters"
            :key="index"
            @click="handleFilterClick(filter)"
            :class="
              categoryId == filter?.categoryId
                ? 'bg-orange'
                : 'bg-[rgba(255,255,255,0.2)]'
            "
            class="rounded-[40px] py-1 px-4 inline-block text-base whitespace-nowrap cursor-pointer"
          >
            {{ filter?.label }}
          </li>
        </ul>
        <!-- search input  -->
        <div class="w-full mt-4 mb-4">
          <input
            v-model="search"
            type="text"
            placeholder="Qidirmoq"
            class="w-[400px] py-3 font-mono text-lg px-5 border-none placeholder:text-secondary-white outline-none"
          />
        </div>
        <Channels :channels="filteredChannelsBySearch" />
      </div>

      <div v-else>No channels available</div>
    </Container>
  </section>
</template>

<style scoped>
input {
  background: hsla(0, 0%, 100%, 0.16);
}
</style>
