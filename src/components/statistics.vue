<template>
  <div ref="statisticsSection" class="flex w-3/5 m-auto justify-around items-center mt-10 h-72">
    <div v-if="isVisible" class="text-center h-20">
      <img
        class="h-10 m-auto mb-2"
        src="../assets/images/players.png"
        alt="players"
      />
      <div class="text-3xl font-bold">{{ formatNumber(players) }}</div>
      <div class="text-xs text-gray-600 mt-2">ИГРОКОВ<br />ОНЛАЙН</div>
    </div>
    <div v-if="isVisible" class="text-center h-20">
      <img class="h-10 m-auto mb-2" src="../assets/images/countries.png" />
      <div class="text-3xl font-bold">{{ formatNumber(countries) }}+</div>
      <div class="text-xs text-gray-600  mt-2">СТРАН</div>
    </div>
    <div v-if="isVisible" class="text-center h-20">
      <img class="h-10 m-auto mb-2" src="../assets/images/downloads.png" />
      <div class="text-3xl font-bold">{{ formatNumber(downloads) }}</div>
      <div class="text-xs text-gray-600  mt-2">СКАЧИВАНИЙ</div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const isVisible = ref(false);
    const players = ref(0);
    const countries = ref(0);
    const downloads = ref(0);
    const statisticsSection = ref(null);

    const startCounting = () => {
      const playersInterval = setInterval(() => {
        if (players.value < 85000) {
          players.value += 100;
        }
      }, 1);

      const countriesInterval = setInterval(() => {
        if (countries.value < 40) {
          countries.value += 1;
        }
      }, 100);

      const downloadsInterval = setInterval(() => {
        if (downloads.value < 164000) {
          downloads.value += 200;
        }
      }, 1);

      const stopIntervals = () => {
        clearInterval(playersInterval);
        clearInterval(countriesInterval);
        clearInterval(downloadsInterval);
      };

      setTimeout(() => {
        stopIntervals();
      }, 5000);
    };

    const observeIntersection = () => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        isVisible.value = entry.isIntersecting;
        if (isVisible.value) {
          startCounting();
          observer.disconnect();
        }
      });

      observer.observe(statisticsSection.value);
    };

    onMounted(() => {
      if ("IntersectionObserver" in window) {
        observeIntersection();
      } else {
        startCounting();
      }
    });

    onUnmounted(() => {
      clearInterval(playersInterval);
      clearInterval(countriesInterval);
      clearInterval(downloadsInterval);
    });
    const formatNumber = (number) => {
      return number.toLocaleString();
    };
    return {
      isVisible,
      players,
      countries,
      downloads,
      statisticsSection,
      formatNumber,
    };
  },
};
</script>
