<script setup>
import { RouterLink } from "vue-router";
import Container from "@/components/Container.vue";

import logo from "@/assets/header/logo.svg";

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
</script>

<template>
  <header class="w-full bg-black h-[92px]">
    <Container>
      <div class="w-full h-full flex items-center justify-between">
        <!-- logo  -->
        <div class="flex items-center gap-6">
          <i class="pi-align-justify pi cursor-pointer text-3xl"></i>
          <RouterLink to="/">
            <img :src="logo" alt="logo" />
          </RouterLink>
        </div>
        <!-- nav elements  -->
        <nav>
          <ul class="flex items-center justify-center gap-8">
            <li
              v-for="(navEl, index) in navElements"
              :key="index"
              class="text-secondary-white hover:text-white text-[22px]"
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
            class="text-secondary-white hover:underline cursor-pointer text-base"
          >
            {{ lang.label }}
          </li>
          <li>
            <RouterLink
              to="/login"
              class="text-secondary-white hover:text-white cursor-pointer text-[22px] ml-2"
              >Kirish</RouterLink
            >
          </li>
        </ul>
      </div>
    </Container>
  </header>
</template>
