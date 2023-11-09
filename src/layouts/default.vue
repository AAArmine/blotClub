<template>
  <Header />

  <slot />
</template>

<script>
import Header from "../components/header.vue";
export default {
  name: "Default Layout",
  components: { Header },
};
</script>

<style lang="scss" scoped></style>
