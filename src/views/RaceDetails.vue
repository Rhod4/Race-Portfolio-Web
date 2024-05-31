<script setup>

import {raceValidations} from "@/functions/races.js";

const raceValidate = raceValidations()
import {useRoute} from 'vue-router'
import {onMounted, reactive, ref} from "vue";

const race = reactive({})
const route = useRoute()

const getRaceDetails = async () => {
  return await raceValidate.getRace(route.params.id);
}

const isParticipating = ref(false)

const addToRace = async () => {
  const carId = "cbfc5a36-9e2d-4b03-9ab8-928de7113293"
  const isAdded = await raceValidate.addToRace(route.params.id, 1, carId)

  if (isAdded === true) {
    isParticipating.value = true
  }
}

const RemoveFromRace = async () => {
  await raceValidate.removedFromRace(route.params.id).then(() =>
      isParticipating.value = false)
}

const getParticipants = async () => {
  return await raceValidate.getParticipants(route.params.id).then((response) =>
      response
  )
}
const getRaceSeriesForGame = async (gameId) => {
  return await raceValidate.getCarsForSeries(gameId);
}

onMounted(async () => {

  race.details = await getRaceDetails()
      isParticipating.value = await raceValidate.checkIfRacing(route.params.id);
      race.participants = await getParticipants()
      await getRaceSeriesForGame(race.details.game.id)
    }
)

</script>

<template>
  <div class="">
    <div class="mx-10 flex flex-col " v-if="race.details != null">
      <div class="mt-5 pb-2 grid grid-cols-12 border-b">
        <div class="col-span-10 flex flex-col">
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
        <div class="flex ml-auto my-auto col-span-2">
          <button
              v-on:click="isParticipating ? RemoveFromRace() : addToRace()"
              class="btn"
              :class="isParticipating ? 'btn-error' : 'btn-success'"
          >
            {{ isParticipating ? 'Remove From Race' : 'Join Race' }}
          </button>
        </div>
      </div>
      <div class="flex flex-col shadow-xl rounded-b-xl mb-2">
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
      <div class="p-4 shadow-xl mt-4 rounded-2xl bg-white dark:bg-gray-600">
        <table class="table">
          <thead>
          <tr>
            <th>
              <span class="badge">Number</span>
            </th>
            <th>
              <span class="badge">Driver</span>
            </th>
            <th>
              <span class="badge">Car</span>
            </th>
            <th>
              <span class="badge">Session Laps</span>
            </th>
            <th>
              <span class="badge">Session Best Time</span>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="raceParticipants in race.participants">
            <td>
              {{ raceParticipants.userRaceNumber }}
            </td>
            <td>
              {{ raceParticipants.profile.firstname }} {{ raceParticipants.profile.lastname }}
            </td>
            <td>
              {{ raceParticipants.car.name }}
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