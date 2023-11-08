<template>
  <header>
    <nav>
      <NuxtLink to="/products">Nuxt Dojo products</NuxtLink>
    </nav>
  </header>
  <slot />
  <footer>
    <ul>
      <li><NuxtLink to="/">Home in the footer</NuxtLink></li>
      <li><NuxtLink to="/about">Home</NuxtLink></li>
      <li><NuxtLink to="/products">Products</NuxtLink></li>
    </ul>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
