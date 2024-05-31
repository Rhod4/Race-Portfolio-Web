<script setup lang="ts">
import {raceAdminValidation} from "@/functions/raceAdmin";
import {onMounted, PropType, reactive, ref, watch} from "vue";
import {gameValidation} from "@/functions/games";
import {CreateRaceRequest} from "@/types/races/createRace";
import {GameAdminResponse} from "@/types/races/gamesAdminResponse";

const raceAdmin = raceAdminValidation()

const race = reactive<CreateRaceRequest>({RaceDate: new Date(Date.now())})

defineProps({
  race: {
    type: Object as PropType<CreateRaceRequest>,
    required: false
  }
})

const gameVal = gameValidation();

const createRace = async () => {
  console.log(race)
  await raceAdmin.createRace(race)
}
const loading = ref(true);
const games = ref(<GameAdminResponse>[])
const seriesList = ref([])
const tracks = ref([])

watch(() => race.GameId, async () => {
  if (race.GameId) {
    seriesList.value = await raceAdmin.getSeriesForGame(race.GameId)
    tracks.value = await raceAdmin.getTracksForGame(race.GameId)
    console.log(tracks.value)
  }
})

onMounted(async () => {
  games.value = await gameVal.getGames()
  loading.value = false
})

</script>

<template>
  <div>
    <div class="grid grid-cols-1 px-10 gap-1 pb-10" v-if="!loading">
      <div class="">
        <div class="label">
        <label class="mr-2 label-text" for="RaceName">Race Name:</label>
        </div>
        <input type="text" id="RaceName" v-model="race.Name"
               class="input input-bordered w-full max-w-sm"/>
      </div>
      <div class="">
        <div class="label">
          <label class="mr-2" for="RaceSelect">Race:</label>
        </div>
        <select type="text" id="RaceSelect" v-model="race.GameId" class="input input-bordered w-full max-w-sm">
          <option v-for="game in games" :value="game.id">{{ game.name }}</option>
        </select>
      </div>
      <div class="">
        <div class="label">
          <label class="mr-2" for="SeriesSelect">Series:</label>
        </div>
        <select type="text" id="SeriesSelect" v-model="race.SeriesId" class="input input-bordered w-full max-w-sm">
          <option v-for="series in seriesList" :value="series.id">{{ series.name }}</option>
        </select>
      </div>
      <div class="">
        <div class="label">
          <label class="mr-2" for="TrackSelect">Tracks:</label>
        </div>
        <select type="text" id="TrackSelect" v-model="race.TrackId" class="input input-bordered w-full max-w-sm">
          <option v-for="track in tracks" :value="track.id">{{ track.name }}</option>
        </select>
      </div>
      <div class="flex mt-4 justify-end">
        <button class="btn btn-success w-full sm:w-1/6" v-on:click="createRace()">
          Create Race
        </button>
      </div>
    </div>
    <div v-if="loading">
      <div class="flex w-full h-full justify-center ">
        <span class="loading loading-bars"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>