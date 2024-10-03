<script setup>
import { defineProps } from "vue";

defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="relative w-full aspect-[9/12] cursor-pointer hover:scale-[1.05] group"
  >
    <img
      :src="movie?.poster?.url_340x450"
      :alt="movie?.title"
      class="absolute inset-0 object-cover w-full h-full"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-white/10 to-black/90"
    ></div>
    <!-- content  -->
    <div class="absolute left-0 right-0 z-10 p-4 text-white bottom-2">
      <h4 class="w-full leading-4 tracking-tight text-center text-yellow">
        Obuna
      </h4>
      <p class="w-full mt-2 mb-3 text-xl text-center whitespace-nowrap">
        {{ movie?.slug }}
      </p>
      <div
        class="absolute left-0 flex items-center justify-center w-full gap-2 opacity-0 -bottom-full group-hover:opacity-100 group-hover:bottom-0"
      >
        <svg
          v-if="movie?.rating_imdb"
          data-v-c6b5b2ce=""
          viewBox="0 0 38 16"
          class="h-4"
        >
          <path
            fill="rgba(255,255,255,0.5)"
            data-v-c6b5b2ce=""
            d="M0 0V15.7924H3.93417V0H0ZM12.3254 0L11.4143 7.37795L10.8502 3.36604C10.7091 2.24185 10.5522 1.11972 10.3795 0H5.27832V15.7924H8.7236L8.73573 5.36589L10.1866 15.7924H12.6408L14.0177 5.1327L14.0298 15.7924H17.4642V0H12.3254ZM23.9156 3.28424C23.9593 3.48569 23.9811 3.94353 23.9811 4.65776V10.7806C23.9811 11.8306 23.9156 12.4752 23.7858 12.7121C23.6548 12.9489 23.3066 13.0674 22.7413 13.0674V2.70187C23.1695 2.70187 23.4619 2.74826 23.6172 2.84227C23.7724 2.93628 23.8719 3.08401 23.9156 3.28424ZM25.6928 15.6325C26.1611 15.5251 26.5541 15.337 26.8732 15.0672C27.191 14.7986 27.4142 14.425 27.5428 13.9464C27.6702 13.4703 27.7466 12.5229 27.7466 11.1078V5.56124C27.7466 4.06807 27.6908 3.0657 27.6035 2.55658C27.5143 2.04263 27.2878 1.56278 26.9484 1.16841C26.5978 0.7533 26.0871 0.454178 25.4162 0.272263C24.7454 0.0903472 23.6499 0 21.7453 0H18.8095V15.7924H23.5771C24.5197 15.7924 25.2246 15.7387 25.6928 15.6325ZM34.0949 13.408C34.0222 13.6095 33.7055 13.7108 33.4641 13.7108C33.23 13.7108 33.0747 13.6131 32.9946 13.419C32.9158 13.2237 32.877 12.7805 32.877 12.0882V7.9127C32.877 7.19359 32.9109 6.74552 32.9813 6.56726C33.0504 6.38901 33.2021 6.29866 33.4362 6.29866C33.6764 6.29866 33.9979 6.40122 34.0804 6.60511C34.1629 6.809 34.2041 7.24609 34.2041 7.9127V11.96C34.2041 12.7243 34.1677 13.2078 34.0949 13.408ZM29.0872 15.7924H32.6295L32.8733 14.7864C33.1936 15.1905 33.5478 15.4945 33.9336 15.696C34.3194 15.8987 34.8968 16 35.3432 16C35.9644 16 36.5018 15.8291 36.9543 15.4884C37.4056 15.149 37.6943 14.7461 37.8156 14.2822C37.9381 13.8182 38 13.1138 38 12.1663V7.73567C38 6.78214 37.9794 6.1607 37.9393 5.86768C37.886 5.54575 37.7617 5.23994 37.5754 4.97276C37.3588 4.65555 37.0548 4.40899 36.7007 4.26341C36.3174 4.0937 35.8661 4.00946 35.3445 4.00946C34.892 4.00946 34.3133 4.10347 33.9263 4.29027C33.5199 4.49263 33.1618 4.78129 32.877 5.13636V0H29.0872V15.7924Z"
          ></path>
        </svg>
        <span
          v-if="movie?.rating_imdb"
          class="font-bold text-secondary-white"
          >{{ movie?.rating_imdb }}</span
        >
        <span
          v-if="movie?.age"
          class="px-1 border rounded-sm border-secondary-white text-secondary-white"
          >{{ movie?.age }}+</span
        >
      </div>
    </div>
  </div>
</template>
