<template>
  <header class="shadow-sm bg-pink">
    <nav>
      <NuxtLink to="/">Nuxt Dojo</NuxtLink>
      <ul class="flex justify-between w-1/3">
        <li class="btn"><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">Home</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </nav>
  </header>
  <div class=" container p-4">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
