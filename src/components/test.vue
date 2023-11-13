<template>
  <div>
    <div v-if="isSticky" :class="stickyHeaderClasses" ref="header">
      <!-- Your header content here -->
    </div>

    <!-- The rest of your component content -->

  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const isSticky = ref(false);
    const header = ref(null);

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      isSticky.value = scrollTop > 1000;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isSticky,
      stickyHeaderClasses: {
        'fixed top-0 left-0 w-full z-50 transition-all duration-1000 opacity-100': isSticky,
        'opacity-0': !isSticky,
      },
      header,
    };
  },
};
</script>
