<script setup>

import {raceValidations} from "@/functions/races.js";

const raceValidate = raceValidations()
import {useRoute} from 'vue-router'
import {onMounted, reactive} from "vue";

const race = reactive({})
const route = useRoute()

const getRaceDetails = async () => {
  return await raceValidate.getRace(route.params.id);
}

const addToRace = async () => {
  await raceValidate.addToRace(route.params.id, 1)
}

onMounted(async () => {
      race.details = await getRaceDetails()
    }
)

</script>

<template>
  <div>
    <button v-on:click="addToRace()">addToRace</button>
    <div class="mx-10 flex flex-col" v-if="race.details != null">
      <div class="mt-5 pb-2 flex justify-between border-b">
        <div class="text-3xl">
          {{ race.details.name }}
        </div>
        <div class="my-auto flex flex-col">
          <div>
            {{ new Date(race.details.raceDate).toLocaleDateString() }}
          </div>
          <div>
            {{ new Date(race.details.raceDate).toLocaleTimeString() }}
          </div>
        </div>
      </div>
      <div class="flex flex-col shadow rounded-b-xl mb-2">
        <div class="my-5 ">
          <div class="badge badge-warning mx-1">
            {Rating type}
          </div>
          <div class="badge badge-warning mx-1">
            {P-Q-R}
          </div>
          <div class="badge py-2 badge-warning mx-1">
            <span class="mr-2">{{ race.details.raceParticipants.length }}</span>
            <img src="/src/assets/images/misc/helmet.svg" class="max-w-[15px]"/>
          </div>
        </div>
        <div class="mb-5 mx-5 grid grid-cols-3">
          <div class="">
            <div>Practice: {{ race.details.practice }}</div>
            <div>Practice Length: {{ race.details.practice }}</div>
          </div>
          <div>
            <div>Qualify: {{ race.details.qualify }}</div>
            <div>Qualify Length: {{ race.details.qualify }}</div>
          </div>
          <div>
            <div>Race Length: {{ race.details.raceLength }}</div>
            <div>Race Laps: {{ race.details.raceLaps }}</div>
          </div>
        </div>
      </div>
      <div class="p-4 shadow mt-4 rounded-2xl">
        <table class="table">
          <thead>
          <tr>
            <th>
              Number
            </th>
            <th>
              Driver
            </th>
            <th>
              Car
            </th>
            <th>
              Session Laps
            </th>
            <th>
              Session Best Time
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="raceParticipants in race.details.raceParticipants">
            <td>
              {{raceParticipants.userRaceNumber}}
            </td>
            <td>
              {{raceParticipants.profile.firstname}} {{raceParticipants.profile.lastname}}
            </td>
            <td>
              Ferrari 296 GT3
            </td>
            <td>
              13
            </td>
            <td>
              1:36:451
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>