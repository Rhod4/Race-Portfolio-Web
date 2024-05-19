<script setup>
import RaceMainBanner from "@/components/dashboard/RaceMainBanner.vue";
import {useAuthStore} from "@/stores/authStore.js";

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
  <div class="py-16 w-full flex flex-col items-center">
      <div class="text-2xl mt-1">Hot Join Races Or Join Leagues</div>
      <div class="text-2xl mt-1">Solo Race or Driver Swap</div>
      <div class="text-2xl mt-1">Sprint Race, Rally, Endurance, Oval</div>
      <div class="text-3xl mt-3">YOU CHOOSE HOW YOU WANT TO RACE</div>
      <div class="mt-10 flex " v-if="!authStore.user.id">
        <RouterLink
            class="text-4xl font-bold mx-3 btn btn-lg btn-outline btn-warning flex hover:text-neutral"
            to="/Account/login">login</RouterLink>
        <RouterLink
            class="text-4xl font-bold mx-3 btn btn-lg btn-outline btn-success flex"
            to="/Account/register">register</RouterLink>
      </div>
    <div class="mt-10" v-if="authStore.user.id">
      <RouterLink
          class="text-4xl font-bold mx-3 btn btn-lg btn-outline btn-success flex"
          to="/Races">Race</RouterLink>
    </div>
  </div>
  <div></div>
</template>

<style scoped>
</style>