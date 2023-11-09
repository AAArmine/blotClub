<template>
  <div
    class="relative h-[500px] bg-gradient-slider w-full flex justify-center align-center"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="{ 'opacity-100': index === currentIndex }"
      class="absolute inset-0 transition-opacity duration-500"
    >
      <img
        :src="`../assets/images/${item.image}`"
        alt="Slide Image"
        class="w-auto"
      />
    </div>
    <div class="flex absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <div
        v-for="(item, index) in items"
        :key="index"
        @click="changeSlide(index)"
        class="w-4 h-4 mx-2 cursor-pointer rounded-full bg-gray-400"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Slider",
  setup() {
    const items = ref([
      { image: "playInTeam.png" },
      { image: "playInTeam.png" },
    ]);

    const currentIndex = ref(0);

    const changeSlide = (index) => {
      currentIndex.value = index;
    };

    return { items, currentIndex, changeSlide };
  },
};
</script>
