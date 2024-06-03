<script setup>

import MainNav from "@/components/navigation/MainNav.vue";
import {authValidation} from "@/functions/auth.js";
import {onMounted, ref} from "vue";
import {useAuthStore} from "@/stores/authStore.js";

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

  <main class=" h-full  flex-1 flex flex-col bg-neutral-200 dark:bg-base-100 ">
    <RouterView></RouterView>
    <footer class="footer">
    </footer>
  </main>
</template>

<style scoped>
</style>
