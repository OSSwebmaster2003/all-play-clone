<script setup>
import { defineProps, ref, onMounted } from "vue";
import axios from "axios";
import API_URL from "@/config/config.js";

const props = defineProps({
  channel: {
    type: Object,
    required: true,
  },
});

let channelProgram = ref({});

const fetchChannelProgram = async () => {
  try {
    const response = await axios.get(
      `https://api.allplay.uz/api/v1/epg/list?channel_id=${props.channel.id}&start_at=0&stop_at=432000`
    );

    channelProgram.value = response?.data?.data;
  } catch (error) {
    console.log("Error getting channel Program", error);
  }
};

onMounted(() => {
  fetchChannelProgram();
});
</script>

<template>
  <div class="sm:mb-6 mb-0 hover:scale-105 sm:aspect-[16/9]">
    <RouterLink
      :to="`/${channel.slug}`"
      class="flex flex-row items-center sm:block"
    >
      <div class="relative flex flex-col w-[150px] gap-3 sm:w-full">
        <!-- poster  -->
        <div class="w-full h-full p-4 bg-white">
          <img
            :src="channel.icon.url_500x500"
            alt=""
            class="object-scale-down w-full h-20 sm:h-[100px] bg-white"
          />
          <!-- flags  -->
          <div class="absolute flex-col hidden sm:flex top-4">
            <span
              v-if="channel?.categories.some((cat) => cat.name == 'Премиум')"
              class="px-[6px] py-[3px] text-xs font-medium bg-yellow"
              >Премиум</span
            >
            <span
              v-if="channel?.input_quality === 'fullhd'"
              class="px-[6px] py-[3px] text-xs font-medium bg-blue w-12"
              >FullHD</span
            >
          </div>
        </div>
      </div>
      <div class="mt-0 sm:mt-3 w-[calc(100%-150px)] sm:w-auto">
        <div class="flex flex-row sm:hidden">
          <span
            v-if="channel?.categories.some((cat) => cat.name == 'Премиум')"
            class="px-[6px] py-[3px] text-xs font-medium bg-yellow inline"
            >Премиум</span
          >
          <span
            v-if="channel?.input_quality === 'fullhd'"
            class="px-[6px] py-[3px] text-xs font-medium bg-blue w-12"
            >FullHD</span
          >
        </div>
        <h6
          v-if="
            channelProgram[channel?.id] &&
            channelProgram[channel?.id].length > 0
          "
          class="w-full gap-2 px-1 overflow-hidden truncate text-start sm:text-center sm:px-3 whitespace-nowrap text-ellipsis text-gray"
        >
          <span class="text-sm font-bold text-gray">{{
            channelProgram[channel?.id][0].start_at.slice(12, 16)
          }}</span>
          {{ channelProgram[channel?.id][0].name }}
        </h6>
      </div>
    </RouterLink>
  </div>
</template>
