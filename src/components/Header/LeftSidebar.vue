<script setup>
import { defineProps } from "vue";
import logo from "@/assets/header/logo.svg";

const props = defineProps({
  displayLeftSidebar: {
    type: Boolean,
    required: true,
  },
  toggleLeftSidebar: {
    type: Function,
    required: true,
  },
});
// data
const movieTypes = [
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
    label: "Turkiya dunyasi",
    path: "/turkish",
  },
  {
    label: "Uzmedia",
    path: "/uzbek",
  },
];
</script>

<template>
  <aside
    class="fixed top-0 bottom-0"
    :class="
      displayLeftSidebar ? 'left-0 right-0 opacity-1' : '-left-full opacity-0'
    "
  >
    <div
      class="px-[70px] py-10 w-[320px] bg-black z-10 h-full overflow-auto overflow-y-scroll"
    >
      <!-- logo  -->
      <div class="flex items-center justify-center gap-6 w-full">
        <i
          @click="toggleLeftSidebar"
          class="pi pi-times text-2xl cursor-pointer"
        ></i>
        <RouterLink to="/"
          ><img :src="logo" alt="logo" class="cursor-pointer w-auto"
        /></RouterLink>
      </div>
      <!-- nav links  -->
      <nav class="mt-20 w-full">
        <p class="text-secondary-white text-[18px] mb-6 text-start w-full">
          Kinoteatr
        </p>
        <ul class="flex flex-col items-start justify-start gap-4">
          <li
            v-for="(li, index) in movieTypes"
            :key="index"
            class="text-[22px] leading-8"
          >
            <RouterLink :to="li.path">{{ li.label }}</RouterLink>
          </li>
        </ul>
      </nav>
      <!-- other info  -->
      <div class="mt-24">
        <p class="text-secondary-white text-[18px] mb-6 text-start w-full">
          Boshqa
        </p>
        <ul class="flex flex-col items-start justify-start gap-4">
          <li class="text-[22px]">
            <RouterLink to="/profile">Sozlamalar</RouterLink>
          </li>
          <li class="text-[22px]">
            <RouterLink to="/profile" class="text-orange"
              >To'lov va obuna</RouterLink
            >
          </li>
          <li class="text-[22px]">
            <RouterLink to="/support">Qayta aloqa</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style scoped>
aside {
  background: rgba(0, 0, 0, 0.9);
}
</style>
