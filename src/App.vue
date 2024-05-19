<script setup>

import MainNav from "@/components/navigation/MainNav.vue";
import {authValidation} from "@/functions/auth.js";

  const auth = authValidation()

  auth.getUserDetails();

</script>

<template>
  <header>
  </header>

  <main class="">
    <main-nav></main-nav>
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
</style>
