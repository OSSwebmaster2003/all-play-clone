<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
import Container from "@/components/Container.vue";
import logo from "@/assets/header/logo.svg";

const props = defineProps({
  displaySlideDownPanel: {
    type: Boolean,
    required: true,
  },
  toggleSlideDownPanel: {
    type: Function,
    required: true,
  },
});

const navFilters = [
  {
    label: "Films",
    path: "/movies",
  },
  {
    label: "Series",
    path: "/serials",
  },
  {
    label: "Cartoons",
    path: "/cartoons",
  },
  {
    label: "Animes",
    path: "/anime",
  },
  {
    label: "Amediateka",
    path: "/amediateka",
  },
  {
    label: "Wink",
    path: "/moretv",
  },
  {
    label: "Start",
    path: "/start",
  },
  {
    label: "Premier",
    path: "/premier",
  },
  {
    label: "Megogo",
    path: "/megogo",
  },
  {
    label: "Turkiye dunyasi",
    path: "/turkish",
  },
  {
    label: "Uzmedia",
    path: "/uzbek",
  },
];
const navItems = [
  {
    label: "TV",
    path: "/tv",
  },
  {
    label: "Kinoteatr",
    path: "/movies",
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
</script>

<template>
  <div
    class="fixed left-0 right-0 z-50 bg-black"
    :class="
      displaySlideDownPanel ? 'top-0 bottom-0 opacity-1' : '-top-full opacity-0'
    "
  >
    <Container>
      <header class="h-[92px] w-full flex items-center justify-between">
        <!-- logo  -->
        <RouterLink to="/">
          <img :src="logo" alt="logo" />
        </RouterLink>
        <!-- actions  -->
        <div class="flex items-center justify-end gap-6">
          <RouterLink to="/search">
            <i class="text-2xl pi pi-search" />
          </RouterLink>
          <i
            @click="toggleSlideDownPanel"
            class="text-2xl cursor-pointer pi pi-times"
          ></i>
        </div>
      </header>

      <!-- filter pages  -->
      <div
        class="flex items-center justify-start w-full gap-2 pb-2 overflow-x-scroll flex-nowrap hide-scrollbar"
      >
        <span
          v-for="(nav, index) in navFilters"
          :key="index"
          class="bg-[rgba(255,255,255,0.2)] rounded-[40px] text-lg py-1 px-4 cursor-pointer leading-6 inline-block whitespace-nowrap"
        >
          <RouterLink :to="nav.path">{{ nav.label }}</RouterLink>
        </span>
      </div>

      <!-- navigation  -->
      <div class="mt-10">
        <p class="mb-6 font-mono text-secondary-white">Navigatsiya</p>
        <nav>
          <ul class="flex flex-col gap-4">
            <li
              v-for="(nav, index) in navItems"
              :key="index"
              class="text-[22px] tracking-tight"
            >
              <RouterLink :to="nav.path">{{ nav.label }}</RouterLink>
            </li>
          </ul>
        </nav>
      </div>

      <!-- other actions  -->
      <div class="mt-16">
        <p class="mb-6 font-mono text-secondary-white">Boshqa</p>
        <ul class="flex flex-col gap-4">
          <li class="text-[22px] tracking-tight">
            <RouterLink to="/login">Kirish</RouterLink>
          </li>
          <li class="text-[22px] tracking-tight text-orange">
            <RouterLink to="/profile/subscription">To'lov va obuna</RouterLink>
          </li>
          <li class="text-[22px] tracking-tight">
            <RouterLink to="/support">Qayta aloqa</RouterLink>
          </li>
        </ul>
      </div>
    </Container>
  </div>
</template>
