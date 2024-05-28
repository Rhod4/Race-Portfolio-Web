<script setup>
import RaceMainBanner from "@/components/banners/RaceMainBanner.vue";
import {useAuthStore} from "@/stores/authStore.js";
import CreateAccountMainBanner from "@/components/banners/CreateAccountMainBanner.vue";

const authStore = useAuthStore()
</script>

<template>
  <div class="py-16 sm:py-52">
    <div class="flex flex-col align-middle">
      <span class="text-3xl sm:text-6xl mx-auto text-center greenLights">
        <span class="greenLights1 mx-2 font-bold">GREEN</span>
        <span class="greenLights2 mx-2 font-bold">GREEN</span>
        <span class="greenLights3 mx-2 font-bold">GREEN</span>
      </span>
      <span class="mx-auto mt-4">Welcome to the new hub for sim races</span>
      <span class="mx-auto">Create or join leagues and race</span>
    </div>
  </div>
  <RaceMainBanner></RaceMainBanner>
  <CreateAccountMainBanner :user="authStore.user"/>
  <div></div>
</template>

<style scoped>
@keyframes greenLightsText {
  0%{
    color: theme('colors.gray.500');
  }
  24.99%{
    color: theme('colors.gray.500');
  }
  25% {
    color: theme('colors.success');
  }
  to{
    color: theme('colors.success');
  }
}
.greenLights1{
  animation: greenLightsText 3s forwards;
}
.greenLights2{
  animation: greenLightsText 5s forwards;
}
.greenLights3{
  animation: greenLightsText 7s forwards;
}


</style>