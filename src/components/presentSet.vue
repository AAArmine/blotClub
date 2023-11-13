<template>
  <div
    class="bg-image w-full h-[500px] bg-[url('assets/images/bgBazarBlot.png')]"
  >
    <div class="flex justify-center custom-wrapper py-16 mb-6">
      <div class="w-1/2 relative">
        <img
          class="absolute top-[-130px] right-[-40px]"
          src="@/assets/images/presentSet.png"
          alt="bazar blot present set"
        />
      </div>
      <div class="w-1/2 text-white z-[1]">
        <img class="w-24 mb-8" src="../assets/images/4u.png" alt="4u.am" />
        <h2 class="text-6xl font-montserrat font-semibold">Blot Club</h2>
        <h4 class="text-4xl font-montserrat font-semibold">Premium Set</h4>
        <p class="mt-6 mb-16 text-2xl font-montserrat">Идеальный подарок <br />для любителей блота</p>

        <button
          class="btn text-lg w-1/4"
          style="background-image: linear-gradient(to bottom, #fbdf4c, #ffa403)"
        >
          <NuxtLink to="/">Купить</NuxtLink>
        </button>
      </div>
    </div>
  </div>
</template>
