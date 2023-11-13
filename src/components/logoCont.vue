<template>
  <div>
    <div v-if="isSticky" :class="stickyHeaderClasses" ref="header">
      <div class="bg-image h-20 bg-[url('assets/images/banner.png')]">
        <div
          class="custom-wrapper flex justify-between custom-wrapper pointer items-center"
        >
          <div>
            <img
              class="w-10/12"
              alt="BazarBlot logo"
              src="../assets/images/logo.png"
            />
          </div>
          <img
            class="w-64 relative top-6 z-10"
            alt="buy chips"
            src="../assets/images/buyChips.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const isSticky = ref(false);
    const header = ref(null);

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      isSticky.value = scrollTop > 550;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isSticky,
      header,
      stickyHeaderClasses: {
        "fixed top-0 left-0 w-full z-50 opacity-1 transition-all duration-1000":
          isSticky,
        "opacity-0": !isSticky,
      },
    };
  },
};
</script>
