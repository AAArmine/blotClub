<script setup>
const { id } = useRoute().params;
pageProps.layout = "default";
definePageMeta({ layout: "products" });
</script>

<template>
  <div>concreate product id is:{{ id }}</div>
</template>

<style lang="scss" scoped></style>
