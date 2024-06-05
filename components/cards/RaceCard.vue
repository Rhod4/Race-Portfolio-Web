<script setup>
import {useAuthStore} from "../../stores/authStore.js";
import {onMounted} from "vue";

const props = defineProps({
    race: {}
})

const authStore = useAuthStore()

onMounted(() => {
  console.log(props.race)
})

</script>

<template>
  <div class="card bg-white dark:bg-base-100 shadow-xl image-full z-10 mx-5"
       type="button"
  >
    <figure><img :src="'/assets/images/games/' + race.game.id + '.png'"
                 class="blur"
                 style="--tw-blur: blur(2px)" alt="IRacing"/></figure>
    <div class="card-body">
      <h2 class="card-title text-neutral-200">{{ race.name }}</h2>
      <div class="flex flex-col">
        <span class="text-neutral-200">{{ new Date(race.raceDate).toLocaleDateString() }}</span>
        <span class="text-neutral-200">{{ new Date(race.raceDate).toLocaleTimeString() }}</span>
      </div>
      <div class="card-actions justify-end mt-auto">
        <div class="badge py-3 badge-success">
          <span class="mr-2">{{ race.raceParticipants }}</span>
          <img src="/assets/images/misc/helmet.svg" class="max-w-[20px]" alt="racers"/>
        </div>
      </div>
      <button class="btn btn-neutral" v-on:click="ShowModal(race)" v-if="!authStore.user.id">Find Out More!</button>
      <RouterLink class="btn btn-neutral" :to="'/RaceDetails/'+race.id" v-if="authStore.user.id">View Race</RouterLink>
    </div>
  </div>
</template>