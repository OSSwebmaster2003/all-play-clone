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
  <div class="w-full h-[380px] lg:h-[450px] relative">
    <img
      :src="movie?.published_bg?.url"
      alt="poster"
      class="absolute inset-0 object-cover w-full h-full opacity-50"
    />

    <!-- content  -->
    <div
      class="relative z-10 w-full h-full px-4 py-4 opacity-100 sm:px-12 sm:py-11 bg-none"
    >
      <h2 class="lg:text-[44px] text-lg leading-[56px] font-bold">
        {{ movie?.title_orig }}
      </h2>
      <ul
        class="flex truncated_ul flex-wrap items-center justify-start gap-2 lg:gap-[30px] list-none lg:list-disc"
      >
        <li class="flex items-center justify-start gap-[3px] lg:gap-[6px]">
          <span class="font-mono text-lg font-bold tracking-[-2px]">
            <svg
              data-v-c6b5b2ce=""
              viewBox="0 0 224 94"
              class="w-auto h-4 lg:h-[22px] text-secondary-white"
            >
              <path
                fill="rgba(255,255,255,0.5)"
                data-v-c6b5b2ce=""
                d="M141.254 76.0294H127.094V0L141.254 6.1403V76.0294ZM165.111 63.4642C163.18 63.4642 162.43 62.7147 162.43 61.1085V53.3983C162.43 51.471 162.966 50.8284 164.467 50.0785L168.437 48.2585V62.9289C167.578 63.25 166.398 63.4642 165.111 63.4642ZM148.913 65.9272C148.913 72.2453 152.239 75.6716 158.031 75.6716H158.246C162.537 75.6716 165.326 73.8512 168.651 71.067V75.0294H182.383V27.4841C182.383 18.8103 177.984 14.4199 169.295 14.4199H162.644C153.955 14.4199 149.556 18.8103 149.556 27.4841V35.9438H162.644V28.662C162.644 27.0557 163.61 26.3063 165.219 26.3063H166.077C167.686 26.3063 168.437 27.0557 168.437 28.662V37.0147L156.851 40.9767C150.951 43.0113 148.913 45.7954 148.913 52.4346V65.9272ZM208.016 87.8082L224 16.0623H210.591L205.334 44.118L201.258 16.0623H187.205L198.254 71.8526L194.607 87.8082H208.016ZM105.354 30.197V61.8936C105.354 63.4999 104.603 64.2497 102.565 64.2497C101.063 64.2497 99.9905 63.9282 99.1322 63.6071V28.4838C99.9905 28.1624 101.063 27.8413 102.565 27.8413C104.603 27.8413 105.354 28.5907 105.354 30.197ZM119.514 66.2843V25.8066C119.514 18.9533 115.867 15.4197 109.645 15.4197H109.431C105.247 15.4197 102.029 17.4543 98.9176 20.2384V16.0622L84.9722 9.92193V93.9481L99.1322 87.8082V72.4952C102.243 74.9578 105.247 76.6713 109.431 76.6713H109.645C115.867 76.6713 119.514 73.1373 119.514 66.2843ZM77.2753 76.3614H63.1152V0.332411L77.2753 6.47272V76.3614ZM40.7688 76.3608H54.9289V6.47211L40.7688 0.331801V76.3608ZM13.5159 62.4405C13.5159 64.0467 14.267 64.7962 16.1981 64.7962C17.4852 64.7962 18.6654 64.582 19.5237 64.2609V49.5905L15.5544 51.4105C14.0524 52.1604 13.5159 52.803 13.5159 54.7303V62.4405ZM9.11792 77.0036C3.32515 77.0036 0 73.5773 0 67.2592V53.7667C0 47.1275 2.0377 44.3434 7.93775 42.3087L19.5237 38.3467V29.994C19.5237 28.3878 18.7727 27.6383 17.1637 27.6383H16.3054C14.6965 27.6383 13.7309 28.3878 13.7309 29.994V37.2758H0.643342V28.8162C0.643342 20.1423 5.04137 15.752 13.7309 15.752H20.3816C29.0711 15.752 33.4692 20.1423 33.4692 28.8162V76.3614H19.7382V72.3991C16.4127 75.1832 13.6236 77.0036 9.33288 77.0036H9.11792Z"
              ></path></svg
          ></span>
          <span class="text-xs lg:text-base text-secondary-white">{{
            movie?.rating_allplay
          }}</span>
        </li>
        <li class="flex items-center justify-start gap-[3px] lg:gap-[6px]">
          <span class="font-mono text-lg font-bold tracking-[-2px]">
            <svg
              data-v-c6b5b2ce=""
              viewBox="0 0 215 215"
              class="w-auto h-4 lg:h-[22px] text-secondary-white"
            >
              <path
                fill="rgba(255,255,255,0.5)"
                data-v-c6b5b2ce=""
                d="M194.608 171.609C174.933 197.942 143.441 215 107.948 215C48.33 215 0 166.871 0 107.5C0 48.13 48.33 0 107.948 0C143.507 0 175.05 17.122 194.718 43.539L104.537 91.609L162.57 32.25H130.401L90.892 86.862V32.25H64.77V182.75H90.893V128.226L130.402 182.75H162.571L106.045 125.257L194.608 171.609ZM215 121.415L115.703 114.771L206.646 151.105C210.858 141.667 213.672 131.665 215 121.415ZM116.338 99.971L206.646 63.895C210.858 73.3328 213.672 83.3338 215 93.583L116.338 99.971Z"
              ></path>
            </svg>
          </span>
          <span
            v-if="movie?.rating_kp"
            class="text-xs text-secondary-white lg:text-base"
            >{{ movie?.rating_kp?.toFixed(1) }}</span
          >
        </li>
        <li class="flex items-center justify-start gap-[3px] lg:gap-[6px]">
          <span class="font-mono text-lg font-bold tracking-[-2px]">
            <svg
              data-v-c6b5b2ce=""
              viewBox="0 0 38 16"
              class="w-auto h-3 lg:h-4 text-secondary-white"
            >
              <path
                fill="rgba(255,255,255,0.5)"
                data-v-c6b5b2ce=""
                d="M0 0V15.7924H3.93417V0H0ZM12.3254 0L11.4143 7.37795L10.8502 3.36604C10.7091 2.24185 10.5522 1.11972 10.3795 0H5.27832V15.7924H8.7236L8.73573 5.36589L10.1866 15.7924H12.6408L14.0177 5.1327L14.0298 15.7924H17.4642V0H12.3254ZM23.9156 3.28424C23.9593 3.48569 23.9811 3.94353 23.9811 4.65776V10.7806C23.9811 11.8306 23.9156 12.4752 23.7858 12.7121C23.6548 12.9489 23.3066 13.0674 22.7413 13.0674V2.70187C23.1695 2.70187 23.4619 2.74826 23.6172 2.84227C23.7724 2.93628 23.8719 3.08401 23.9156 3.28424ZM25.6928 15.6325C26.1611 15.5251 26.5541 15.337 26.8732 15.0672C27.191 14.7986 27.4142 14.425 27.5428 13.9464C27.6702 13.4703 27.7466 12.5229 27.7466 11.1078V5.56124C27.7466 4.06807 27.6908 3.0657 27.6035 2.55658C27.5143 2.04263 27.2878 1.56278 26.9484 1.16841C26.5978 0.7533 26.0871 0.454178 25.4162 0.272263C24.7454 0.0903472 23.6499 0 21.7453 0H18.8095V15.7924H23.5771C24.5197 15.7924 25.2246 15.7387 25.6928 15.6325ZM34.0949 13.408C34.0222 13.6095 33.7055 13.7108 33.4641 13.7108C33.23 13.7108 33.0747 13.6131 32.9946 13.419C32.9158 13.2237 32.877 12.7805 32.877 12.0882V7.9127C32.877 7.19359 32.9109 6.74552 32.9813 6.56726C33.0504 6.38901 33.2021 6.29866 33.4362 6.29866C33.6764 6.29866 33.9979 6.40122 34.0804 6.60511C34.1629 6.809 34.2041 7.24609 34.2041 7.9127V11.96C34.2041 12.7243 34.1677 13.2078 34.0949 13.408ZM29.0872 15.7924H32.6295L32.8733 14.7864C33.1936 15.1905 33.5478 15.4945 33.9336 15.696C34.3194 15.8987 34.8968 16 35.3432 16C35.9644 16 36.5018 15.8291 36.9543 15.4884C37.4056 15.149 37.6943 14.7461 37.8156 14.2822C37.9381 13.8182 38 13.1138 38 12.1663V7.73567C38 6.78214 37.9794 6.1607 37.9393 5.86768C37.886 5.54575 37.7617 5.23994 37.5754 4.97276C37.3588 4.65555 37.0548 4.40899 36.7007 4.26341C36.3174 4.0937 35.8661 4.00946 35.3445 4.00946C34.892 4.00946 34.3133 4.10347 33.9263 4.29027C33.5199 4.49263 33.1618 4.78129 32.877 5.13636V0H29.0872V15.7924Z"
              ></path>
            </svg>
          </span>
          <span class="text-xs text-secondary-white lg:text-base">{{
            movie?.rating_imdb
          }}</span>
        </li>
        <li class="flex flex-wrap items-center">
          <span class="lg:text-[22px] text-sm text-secondary-white"
            >{{ movie?.year }},</span
          >
          <span
            v-for="genre in movie?.genres"
            :key="genre?.id"
            class="text-xs lg:text-lg text-secondary-white"
            >{{ genre?.name }},</span
          >
        </li>
        <li class="flex flex-wrap items-center">
          <span
            v-for="country in movie?.countries"
            :key="country?.id"
            class="text-xs lg:text-lg text-secondary-white"
            >{{ country?.name }},</span
          >
        </li>
        <li>
          <span
            class="px-1 py-[2px] font-normal text-xs lg:text-base border rounded-sm border-secondary-white text-secondary-white"
            >{{ movie?.age }}+</span
          >
        </li>
      </ul>
      <!-- description  -->
      <div
        class="description max-w-[430px] mt-2 lg:mt-6 font-normal pt-2 lg:pt-4 border-t border-t-secondary-white text-sm lg:text-lg leading-6 lg:leading-8"
      >
        {{ movie?.description }}
      </div>
      <!-- buttons  -->
      <div
        class="absolute flex items-center justify-start w-full gap-2 mt-10 lg:mt-20 bottom-4"
      >
        <button class="w-full bg-orange sm:w-auto">
          <i class="text-sm pi-play pi" />
          Filmni ko'rish
        </button>
        <button class="hidden bg-grey md:block">Film haqida</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.description {
  color: rgba(255, 255, 255, 0.8);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
button {
  font-size: 18px;
  line-height: 32px;
  border: none;
  font-weight: 500;
  letter-spacing: -0.4px;
  padding: 12px 32px;
}
.bg-grey {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(24px);
}

@media (max-width: 1200px) {
  button {
    padding: 8px 20px;
    font-size: 16px;
  }
}
@media (max-width: 600px) {
}
</style>
