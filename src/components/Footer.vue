<script setup>
import { RouterLink } from "vue-router";
import Container from "@/components/Container.vue";
import logo from "@/assets/header/logo.svg";
import playMarketLogo from "@/assets/footer/google-play-logo.svg";
import appStoreLogo from "@/assets/footer/app-store-logo.svg";
import huaweiLogo from "@/assets/footer/huawei-logo.svg";
import apkLogo from "@/assets/footer/apk-logo.svg";

const downloadOptions = [
  {
    icon: playMarketLogo,
    title: "Mavjud",
    desc: "Google Play",
  },
  {
    icon: appStoreLogo,
    title: "Yuklab oling",
    desc: "App Store",
  },
  {
    icon: huaweiLogo,
    title: "Oching",
    desc: "AppGallery",
  },
  {
    icon: apkLogo,
    title: "Faylni yuklash",
    desc: "android",
  },
];
</script>

<template>
  <footer class="w-full mt-20 max-w-[1228px] mx-auto">
    <Container>
      <div class="w-full">
        <!-- logo  -->
        <RouterLink to="/" class="inline-block w-auto">
          <img :src="logo" alt="logo" class="w-auto h-11" />
        </RouterLink>
        <!-- content navigation  -->
        <div
          class="flex flex-col flex-wrap items-start justify-between gap-10 mt-6 sm:flex-row lg:flex-nowrap"
        >
          <div>
            <p
              class="max-w-[250px] text-secondary-white text-lg tracking-[-0.2px] leading-6"
            >
              Sevimli filmlar, seriallar va ularning toʻplamlari TAS-IX da.
            </p>
            <p
              class="mt-10 text-secondary-white text-lg tracking-[-0.2px] leading-6"
            >
              Biz haqimizda
            </p>
            <p
              class="mt-3 text-secondary-white text-lg tracking-[-0.2px] leading-6"
            >
              Hamkorlar
            </p>
            <ul>
              <li><RouterLink to="/license">Hujjatlar</RouterLink></li>
              <li><RouterLink to="/app">Ilovalar</RouterLink></li>
              <li><RouterLink to="/speedtest">Tezlik sinovi</RouterLink></li>
            </ul>
          </div>

          <div>
            <p class="text-secondary-white text-lg tracking-[-0.2px] leading-6">
              Navigatsiya
            </p>
            <ul>
              <li>
                <RouterLink to="/tv">TV</RouterLink>
              </li>
              <li>
                <RouterLink to="/movies">Kinoteatr</RouterLink>
              </li>
              <li>
                <RouterLink to="/radio">Radio</RouterLink>
              </li>
              <li>
                <RouterLink to="/watch">Tomoshalarim</RouterLink>
              </li>
            </ul>
          </div>

          <div>
            <p class="text-secondary-white text-lg tracking-[-0.2px] leading-6">
              Foydalanuvchi
            </p>
            <ul>
              <li>
                <RouterLink to="/profile/subscription"
                  >To'lov va obuna</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/profile/settings/devices"
                  >Qurilmalar</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/profile/settings">Sozlamalar</RouterLink>
              </li>
              <li>
                <RouterLink to="/support">Savol va Javob</RouterLink>
              </li>
              <li>
                <RouterLink to="/support#contacts">Qayta aloqa</RouterLink>
              </li>
            </ul>
          </div>

          <div class="max-w-[250px]">
            <p class="text-secondary-white text-lg tracking-[-0.2px] leading-6">
              Ijtimoiy tarmoqlar
            </p>
            <p
              class="mt-10 text-secondary-white text-lg tracking-[-0.2px] leading-6"
            >
              Ijtimoiy tarmoqlarimizda yangi filmlar va seriallar haqida bilib
              oling
            </p>
            <ul class="social_media">
              <li>
                <a
                  href="http://www.instagram.com/allplay_official"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="pi pi-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="http://t.me/allplay_original"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="pi pi-facebook" />
                </a>
              </li>
              <li>
                <a
                  href="http://ok.ru/group/60828652339400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="pi pi-telegram" />
                </a>
              </li>
              <li>
                <a
                  href="http://www.instagram.com/allplay_official"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="pi pi-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- download options  -->
        <div
          class="flex flex-col gap-4 mt-10 sm:items-center sm:justify-center lg:flex-row"
        >
          <div
            v-for="(opt, index) in downloadOptions"
            :key="index"
            class="flex w-[180px] md:w-[250px] lg:w-auto items-center gap-2 px-6 py-1 border-2 rounded-md cursor-pointer border-secondary-white hover:border-orange"
          >
            <!-- icon  -->
            <img :src="opt.icon" :alt="opt.title" class="w-10 h-8" />
            <div class="flex flex-col">
              <p class="text-xs font-medium leading-6 md:text-sm">
                {{ opt.title }}
              </p>
              <h2 class="text-xs font-bold md:text-lg">{{ opt.desc }}</h2>
            </div>
          </div>
        </div>

        <p class="mt-12 sm:text-sm text-secondary-white">
          © 2016–2024 Allplay (ООО “Allmedia Safe Service”)
          <span class="text-[rgba(255,255,255,0.2)]">v1.17.2</span>
        </p>
        <p class="pb-40 mt-12 text-sm text-[rgba(255,255,255,0.2)]">
          “Контрафактсиз худуд“ Интелектуал мулк сохасида ҳуқуқларингиз
          бузилаётган бўлса Ўзбекистон Республикаси Адлия Вазирлиги хузуридаги
          Интелектуал мулк агентлигига мурожат қилинг! @ima_monitoring_bot
        </p>
      </div>
    </Container>
  </footer>
</template>

<style scoped>
ul {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
li {
  color: rgba(255, 255, 255, 0.9);
}
li:hover {
  color: #f90;
}
ul.social_media {
  display: flex;
  flex-direction: row;
}
ul.social_media > li {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  /* background-color: white; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
ul.social_media a {
  display: flex;
  align-items: center;
  justify-content: center;
}
ul.social_media i {
  width: 100%;
  height: 100%;
  fill: white;
  color: white;
  font-weight: 500;
  font-size: 20px;
}
@media (max-width: 1200px) {
  ul.social_media > li {
    width: 30px;
    height: 30px;
  }
}
</style>
