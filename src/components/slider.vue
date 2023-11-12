<template>
  <div
    class="relative h-[450px] bg-gradient-slider w-full flex justify-center align-center"
  >
    <div
      v-if="currentIndex === 0"
      class="flex py-4 justify-center w-full absolute inset-0 transition-opacity duration-500"
    >
      <img src="../assets/images/playInTeam.png" alt="Slide Image 1" />
    </div>
    <div
      v-if="currentIndex === 1"
      class="flex py-4 justify-center w-full absolute inset-0 transition-opacity duration-500"
    >
      <img
        src="../assets/images/getComfortable.png"
        alt="Slide Image 2"
        class="w-auto"
      />
    </div>
    <div
      v-if="currentIndex === 2"
      class="flex py-4 justify-center w-full absolute inset-0 transition-opacity duration-500"
    >
      <img
        src="../assets/images/tournaments.png"
        alt="Slide Image 3"
        class="w-auto"
      />
    </div>
    <div
      v-if="currentIndex === 3"
      class="flex py-4 justify-center w-full absolute inset-0 transition-opacity duration-500"
    >
      <img
        src="../assets/images/findGame.png"
        alt="Slide Image 4"
        class="w-auto"
      />
    </div>
    <div
      v-if="currentIndex === 4"
      class="flex py-4 justify-center w-full absolute inset-0 transition-opacity duration-500"
    >
      <img
        src="../assets/images/playWithFriends.png"
        alt="Slide Image "
        class="w-auto"
      />
    </div>
    <div
      class="flex absolute bottom-[-40px] left-1/2 transform -translate-x-1/2"
    >
      <div
        v-for="(item, index) in 5"
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

export default {
  name: "Slider",
  setup() {
    const currentIndex = ref(0);
    const autoSlideInterval = 2000;
    let autoSlideTimer;

    const images = [
      { src: "../assets/images/playInTeam.png", alt: "Slide Image 1" },
      { src: "../assets/images/getComfortable.png", alt: "Slide Image 2" },
      { src: "../assets/images/tournaments.png", alt: "Slide Image 3" },
      { src: "../assets/images/findGame.png", alt: "Slide Image 4" },
      { src: "../assets/images/playWithFriends.png", alt: "Slide Image 5" },
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
