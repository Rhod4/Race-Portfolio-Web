<script setup lang="ts">
  import {useAuthStore} from "~/stores/authStore";
  import type {Race} from "~/types/races/raceType";
  import type {PropType} from "vue";

  const authStore = useAuthStore()

  const props = defineProps({
    raceProp: {
      type: {} as PropType<Race>
    },
    loggedIn:  {
      type: Boolean,
      required: false
    }
  })

  const canJoinRace = props.loggedIn && authStore.user.id !== undefined

  function ShowModal(){
    console.log(props.raceProp)
    document.getElementById('race-modal')?.showModal()
  }


  defineExpose({ShowModal})


</script>

<template>

  <dialog id="race-modal" class="modal">
    <div class="modal-box min-h-[300px] flex flex-col bg-gray-300 dark:bg-base-100">
      <div class="flex flex-col flex-1 h-full justify-between">
        <div>
          <div class="mb-2 text-neutral ">
            <h3 class="font-bold text-lg mb-2 dark:text-neutral-300">{{raceProp?.name}}</h3>
            <div class="badge badge-success text-neutral-200 mx-1 p-3">5 laps</div>
            <div class="badge badge-success text-neutral-200 mx-1 p-3">P-Q-R</div>
            <div class="badge badge-success text-neutral-200 mx-1 p-3">Any Rating</div>
          </div>
          <div class="" v-if="raceProp!.raceSeries.length > 0">
            <span class="text-neutral dark:text-neutral-200">
              Race Series:
            </span>
            <div class="ml-4" v-for="series in raceProp?.raceSeries">
              <span class="text-neutral dark:text-neutral-200">{{series.series.name}}</span>
            </div>
          </div>
          <div class="mb-3 text-neutral dark:text-neutral-200 pt-2">
            <span class="py-4 px-1">Race Description</span>
          </div>
        </div>
        <div class="mb-2 self-end text-neutral dark:text-neutral-200">
          0: drivers in race
        </div>
      </div>
      <NuxtLink v-if="canJoinRace">
        Join Race
      </NuxtLink>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button class="cursor-default">close</button>
    </form>
  </dialog>
</template>

<style scoped>

</style>