<script setup>
import RaceMainBanner from "@/components/dashboard/RaceMainBanner.vue";
import {useAuthStore} from "@/stores/authStore.js";
import CreateAccountMainBanner from "@/components/dashboard/CreateAccountMainBanner.vue";

const authStore = useAuthStore()
</script>

<template>
  <div class="py-10 sm:py-32">
    <div class="flex flex-col align-middle">
      <span class="text-3xl sm:text-6xl mx-auto text-center">GREEN GREEN GREEN</span>
      <span class="mx-auto mt-4">Welcome to the new hub for sim races</span>
      <span class="mx-auto">Create or join leagues and race</span>
    </div>
  </div>
  <RaceMainBanner></RaceMainBanner>
  <CreateAccountMainBanner :user="authStore.user"/>
  <div></div>
</template>