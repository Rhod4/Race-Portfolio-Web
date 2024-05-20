<script setup>

import MainNav from "@/components/navigation/MainNav.vue";
import {authValidation} from "@/functions/auth.js";

  const auth = authValidation()

  auth.getUserDetails();

</script>

<template>
  <header>
  </header>

  <main class="bg-gray-50 dark:bg-base-100 h-full">
    <main-nav></main-nav>
    <RouterView></RouterView>
    <footer class="footer">
    </footer>
  </main>
</template>

<style scoped>
</style>
