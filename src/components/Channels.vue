<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
import Channel from "@/components/Channel.vue";

defineProps({
  channels: {
    type: Array,
    required: false,
  },
});
</script>

<template>
  <div
    v-if="channels.length > 0"
    class="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
  >
    <Channel
      v-for="channel in channels"
      :key="channel?.id"
      :channel="channel"
    />
  </div>
  <div v-else>No Channel With Filters</div>
</template>
