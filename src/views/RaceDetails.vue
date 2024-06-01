<script setup>

import {raceValidations} from "@/functions/races.js";

const raceValidate = raceValidations()
import {useRoute} from 'vue-router'
import {computed, onMounted, reactive, ref, watch} from "vue";
import Swal from "sweetalert2";

const race = reactive({})
const route = useRoute()

const getRaceDetails = async () => {
  return await raceValidate.getRace(route.params.id);
}

const isParticipating = ref(false)

const selectedCar = ref()
const isAdded = ref()
const selectedSeriesCars = ref()

const showAddToRaceModal = async () => {
  addRace.showModal()
}

const addToRace = async () => {
  isParticipating.value = await raceValidate.addToRace(route.params.id, 1, selectedCar.value)
  await getParticipants();
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
  race.series = await raceValidate.getCarsForSeries(gameId);
}

onMounted(async () => {

      race.details = await getRaceDetails()
      isParticipating.value = await raceValidate.checkIfRacing(route.params.id);
      race.participants = await getParticipants()
      await getRaceSeriesForGame(race.details.game.id)
    }
)
const selectedSeries = ref()

watch(selectedSeries, (newVal) => {
  selectedSeriesCars.value = race.series.find(series => series.name === newVal).cars
})
</script>

<template>
  <div class="">
    <div class="mx-10 flex flex-col" v-if="race.details != null">
      <div class="mt-5 px-4 py-2 rounded-b-xl shadow-xl">
        <div class=" grid grid-cols-12 border-b dark:border-b-gray-700 pb-2">
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
                v-on:click="isParticipating ? RemoveFromRace() : showAddToRaceModal()"
                class="btn"
                :class="isParticipating ? 'btn-error' : 'btn-success'"
            >
              {{ isParticipating ? 'Remove From Race' : 'Join Race' }}
            </button>
          </div>
        </div>
        <div class="flex flex-col">
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
      </div>
      <div class="p-4 shadow-xl mt-4 rounded-2xl bg-white dark:bg-gray-800">
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
  <dialog id="addRace" class="modal">
    <div class="modal-box">
      <div>
        <h3 class="font-bold text-lg text-center mb-2">Join Race</h3>
        <span>You are about to sign up for this race</span>
        <span>Please select a series and then the car you want to race in</span>
        <div class="py-10">
          <div class="pb-6 ps-2">
            <div v-for="series in race.series" class="flex">
              <label :for="series.id">{{ series.name }}</label>
              <input type="radio" :id="series.id" class="ml-2 radio" :value="series.name" v-model="selectedSeries">
            </div>
          </div>
          <div>
            <select v-model="selectedCar" class="select select-bordered w-full" :disabled="!selectedSeriesCars">
              <option v-for="cars in selectedSeriesCars" :value="cars.id">{{ cars.name }}</option>
            </select>
          </div>
        </div>
        <div class="modal-action">
        </div>
        <form method="dialog" class="modal-backdrop">
          <div class="flex w-full justify-between">
            <button class="btn w-1/3">Close</button>
            <button class="btn btn-success w-1/3" v-on:click="addToRace()">Join Race</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
</template>

<style scoped>

</style>