<template>
  <section class="bg-deep-red py-10 w-full">
    <div
      class="custom-wrapper text-white text-sm font-light flex justify-between items-top"
    >
      <div>
        <ContactsDetails />
        <div class="custom-light-txt mt-6 pb-4 border-b border-red-900">
          Принимаем к оплате
        </div>
        <PaymentsIcon />
      </div>
      <div class="w-[400px] pb-6">
        <div class="custom-light-txt mt-6 pb-4">Скачать приложение</div>
        <div class="w-[400px] flex justify-between">
          <div class="w-1/2 m-0 p-0">
            <img src="../assets/images/appstore.png" alt="app store" />
          </div>
          <div class="w-1/2 m-0 p-0">
            <img src="../assets/images/googleplay.png" alt="app store" />
          </div>
        </div>
        <button
          class="w-[385px] m-auto flex justify-center relative items-center font-semibold w-full rounded-lg border border-white py-4 bg-transparent text-white"
        >
          <img
            class="absolute left-2 w-6"
            src="../assets/images/ark.png"
            alt="ark"
          />
          Загрузить файл АРК
        </button>
        <div class="w-[400px] border-b border-red-900 my-6" />
        <div class="flex justify-start items-center">
          <img
            src="../assets/images/rng.png"
            alt="app store"
            class="w-14 mr-4"
          />
          <span class="custom-light-txt">RNG cerified</span>
        </div>
      </div>
    </div>
  </section>
</template>
