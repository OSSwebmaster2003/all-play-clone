<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";
import Container from "@/components/Container.vue";
import LeftSidebar from "./LeftSidebar.vue";
import SlideDown from "./SlideDown.vue";

import logo from "@/assets/header/logo.svg";

const route = useRoute();
const currPath = computed(() => route.path);

// toggle left sidebar
const displayLeftSidebar = ref(false);
const toggleLeftSidebar = () => {
  displayLeftSidebar.value = !displayLeftSidebar.value;
};

// slide-down panel
const displaySlideDownPanel = ref(false);
const toggleSlideDownPanel = () => {
  displaySlideDownPanel.value = !displaySlideDownPanel.value;
};

// datas
const navElements = [
  {
    label: "TV",
    path: "/tv",
  },
  {
    label: "Kinoteatr",
    path: "/movies",
  },
  {
    label: "GO",
    path: "/go",
  },
  {
    label: "Radio",
    path: "/radio",
  },
  {
    label: "Tomoshalarim",
    path: "/watch",
  },
];
const languages = [
  {
    label: "РУ",
  },
  {
    label: "O'Z",
  },
  {
    label: "EN",
  },
];

onMounted(() => {
  console.log(currPath);
});
</script>

<template>
  <header class="w-full bg-black h-[92px]">
    <Container>
      <div class="flex items-center justify-between w-full h-full">
        <!-- left sidebar  -->
        <LeftSidebar
          :display-left-sidebar="displayLeftSidebar"
          :toggle-left-sidebar="toggleLeftSidebar"
        />
        <!-- logo  -->
        <div class="flex items-center gap-6">
          <i
            @click="toggleLeftSidebar"
            class="hidden text-3xl cursor-pointer lg:block pi-align-justify pi"
          ></i>
          <RouterLink to="/">
            <img :src="logo" alt="logo" class="lg:w-auto w-[95px]" />
          </RouterLink>
        </div>
        <!-- nav elements  -->
        <nav class="hidden lg:block">
          <ul class="flex items-center justify-center gap-8">
            <li
              v-for="(navEl, index) in navElements"
              :key="index"
              class="hover:text-white text-[22px]"
              :class="
                currPath == navEl.path ? 'text-white' : 'text-secondary-white'
              "
            >
              <RouterLink :to="navEl?.path">{{ navEl?.label }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/search"
                ><i
                  class="pi pi-search text-secondary-white hover:text-white text-[22px]"
              /></RouterLink>
            </li>
          </ul>
        </nav>
        <!-- language  -->
        <ul class="flex items-center justify-end gap-2">
          <li
            v-for="(lang, index) in languages"
            :key="index"
            class="text-sm font-medium cursor-pointer text-secondary-white hover:underline md:text-base"
          >
            {{ lang.label }}
          </li>
          <li>
            <RouterLink
              to="/login"
              class="hidden lg:block text-secondary-white hover:text-white cursor-pointer text-[22px] ml-2"
              >Kirish</RouterLink
            >
          </li>
          <!-- mobile part  -->
          <div class="flex items-center justify-end gap-6 ml-2 lg:hidden">
            <RouterLink to="/search">
              <i class="text-2xl pi pi-search" />
            </RouterLink>
            <i
              @click="toggleSlideDownPanel"
              class="text-2xl cursor-pointer pi pi-bars"
            ></i>
          </div>
        </ul>
        <!-- slide down panel -->
        <SlideDown
          :display-slide-down-panel="displaySlideDownPanel"
          :toggle-slide-down-panel="toggleSlideDownPanel"
        />
      </div>
    </Container>
  </header>
</template>
