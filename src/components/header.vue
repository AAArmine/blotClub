<template>
  <header class="relative w-full flex justify-between">
    <div class="z-[-1] h-20 bg-[#0000006e] opacity-60 absolute w-full"></div>

    <div class="flex justify-between w-10/12 mx-auto py-1 items-center">
      <div>
        <img
          class="w-10/12"
          alt="BazarBlot logo"
          src="../assets/images/logo.png"
        />
      </div>
      <nav>
        <ul class="flex justify-between text-white text-13 font-bold text-xs">
          <li class="pt-3 relative left-14 pointer">
            <NuxtLink to="/history">ИСТОРИЯ ТУРНИРОВ</NuxtLink>
          </li>
          <li class="pt-3 left-3 top-4 z-[-1] pointer relative text-dark-text">
            <NuxtLink to="/buy">КУПИТЬ ФИШКИ</NuxtLink>
          </li>
          <li
            class="btn text-sm"
            style="
              background-image: linear-gradient(to bottom, #fbdf4c, #ffa403);
            "
          >
            <NuxtLink to="/">КУПИТЬ ФИШКИ</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div
      class="absolute w-full z-[-2] h-96"
      style="background-image: radial-gradient(circle, #be1d1d, #640000)"
    >
      <img class="w-full h-96" src="../assets/images/banner.png" />
    </div>
    <div class="absolute left-[45%] top-[34px] z-[2]">
      <img class="h-[350px]" src="../assets/images/character.png" />
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
