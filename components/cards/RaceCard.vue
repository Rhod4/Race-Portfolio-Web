<script setup>
import {useAuthStore} from "~/stores/authStore.js";

defineProps({
    race: {}
})

const emit =defineEmits(["ShowModal"]);

const authStore = useAuthStore()

</script>

<template>
  <div class="card bg-white dark:bg-base-100 shadow-xl image-full z-10 mx-5"
       type="button"
  >
    <figure><img :src="'/img/games/' + race.game.id + '.png'"
                 class="blur"
                 style="--tw-blur: blur(2px)" alt="race.game.name"/></figure>
    <div class="card-body">
      <h2 class="card-title text-neutral-200">{{ race.name }}</h2>
      <div class="flex flex-col">
        <span class="text-neutral-200">{{ new Date(race.raceDate).toLocaleDateString() }}</span>
        <span class="text-neutral-200">{{ new Date(race.raceDate).toLocaleTimeString() }}</span>
      </div>
      <div class="card-actions justify-end mt-auto">
        <div class="badge py-3 badge-success">
          <span class="mr-2">{{ race.raceParticipants }}</span>
          <img src="/img/misc/helmet.svg" class="max-w-[20px]" alt="racers"/>
        </div>
      </div>
      <button class="btn btn-neutral" v-on:click="emit('ShowModal', race)" v-if="!authStore.user.id">Find Out More!</button>
      <NuxtLink class="btn btn-neutral" :to="'/races/'+race.id" v-if="authStore.user.id">View Race</NuxtLink>
    </div>
  </div>
</template>