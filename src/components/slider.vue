<template>
  <div
    class="relative h-[450px] bg-gradient-slider w-full flex justify-center align-center"
  >
    <div
      v-for="(item, index) in images"
      :key="index"
      class="flex py-4 justify-center w-full absolute inset-0 transition-opacity duration-500"
      :class="{
        'opacity-100': currentIndex === index,
        'opacity-0': currentIndex !== index,
      }"
    >
      <img :src="item.src" :alt="item.alt" />
    </div>
    <div
      class="flex absolute bottom-[-40px] left-1/2 transform -translate-x-1/2"
    >
      <div
        v-for="index in images"
        :key="index"
        @click="changeSlide(index)"
        :class="{ 'bg-gray-800': currentIndex === index }"
        class="w-4 h-4 mx-2 cursor-pointer rounded-full bg-gray-400"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import playInTeam from "@/assets/images/playInTeam.png";
import getComfortable from "@/assets/images/getComfortable.png";
import tournaments from "@/assets/images/tournaments.png";
import findGame from "@/assets/images/findGame.png";
import playWithFriends from "@/assets/images/playWithFriends.png";
export default {
  setup() {
    const currentIndex = ref(0);
    const autoSlideInterval = 2000;
    let autoSlideTimer;

    const images = [
      { src: playInTeam, alt: "Slide Image 1" },
      { src: getComfortable, alt: "Slide Image 2" },
      { src: tournaments, alt: "Slide Image 3" },
      { src: findGame, alt: "Slide Image 4" },
      { src: playWithFriends, alt: "Slide Image 5" },
    ];

    const changeSlide = (index) => {
      currentIndex.value = index;
      resetAutoSlide();
    };

    const startAutoSlide = () => {
      autoSlideTimer = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % images.length;
      }, autoSlideInterval);
    };

    const stopAutoSlide = () => {
      clearInterval(autoSlideTimer);
    };

    const resetAutoSlide = () => {
      stopAutoSlide();
      startAutoSlide();
    };

    onMounted(startAutoSlide);
    onBeforeUnmount(stopAutoSlide);

    return { currentIndex, images, changeSlide };
  },
};
</script>
