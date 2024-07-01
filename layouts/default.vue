<script setup>

import './assets/main.css'
import MainNav from "../components/navigation/MainNav.vue";
import {authValidation} from "~/composables/auth.ts";
import {onMounted, ref} from "vue";

const auth = authValidation()

const loadingProfileDetails = ref(true)

onMounted(async () => {
  await auth.getUserDetails().finally(() => loadingProfileDetails.value = false);
})

</script>

<template>
  <header>
    <main-nav></main-nav>
  </header>

  <main class=" h-full flex-1 flex flex-col bg-neutral-200 dark:bg-base-100 ">
    <div class="flex flex-col flex-1">
      <NuxtPage></NuxtPage >
    </div>
    <footer class="footer bg-gray-500 py-5 border-t-4 border-t-red-700">
      <div class="grid grid-cols-4 justify-center w-full text-gray-100">
        <div class="flex justify-center w-full">
          <span class="text-3xl">RP</span>
        </div>
        <div class="flex justify-center w-full">
          <div>
            <span class="text-xl">PAGES</span>
            <ul>
              <li>
                {link}
              </li>
              <li>
                {link}
              </li>
              <li>
                {link}
              </li>
              <li>
                {link}
              </li>
            </ul>
          </div>
        </div>
        <div class="flex justify-center w-full">
          <div>
            <span class="text-xl">LINKS</span>
            <ul>
              <li>Discord</li>
              <li>Facebook</li>
              <li>X</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <div class="flex justify-center w-full">
          <div>
            <span class="text-xl">LEGAL</span>
          </div>
        </div>
        <div>
        </div>
      </div>
    </footer>
  </main>
</template>

<style scoped>
</style>
