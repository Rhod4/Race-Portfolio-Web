<script setup lang="ts">
import {raceAdminValidation} from "~/composables/raceAdmin";
import {onMounted, reactive, ref, watch} from "vue";
import {gameValidation} from "~/composables/games";
import {type CreateRaceRequest} from "@/types/races/createRace";
import {type GameAdminResponse} from "@/types/races/gamesAdminResponse";

const raceAdmin = raceAdminValidation()

const props = defineProps({
  raceId: {
    type: String,
    required: false
  }
})

const race = reactive<CreateRaceRequest>({
  Name: '',
  RaceDate: new Date(new Date()).toISOString().slice(0, -8),
  GameId: '',
  SeriesId: '',
  TrackId: ''
})

const gameVal = gameValidation();

const loading = ref(true);
const games = ref(<GameAdminResponse>[])
const seriesList = ref([])
const tracks = ref([])

watch(() => race.GameId, async () => {
  if (race.GameId) {
    seriesList.value = await raceAdmin.getSeriesForGame(race.GameId)
    tracks.value = await raceAdmin.getTracksForGame(race.GameId)
  }
})

onMounted(async () => {
  games.value = await gameVal.getGames()
  if(props.raceId !== undefined){
    await editRaceConstructor();
  }
  loading.value = false
})

const createOrEditRace = async () => {
  await raceAdmin.createOrEditRace(race)
}

const editRaceConstructor = async () => {
  const raceData = await raceAdmin.getAdminRace(props.raceId)
  race.Id = raceData.id
  race.Name = raceData.name
  race.RaceDate = new Date(raceData.raceDate).toISOString().slice(0, -8)
  race.GameId = raceData.game.id
  race.SeriesId = raceData.raceSeries[0].series.id
  race.TrackId = raceData.track.id
  console.log(race)
}

</script>
<template>
  <div>
    <div class="grid grid-cols-2 px-10 gap-1 pb-10" v-if="!loading">
      <div class="">
        <div class="label">
        <label class="mr-2 label-text" for="RaceName">Race Name:</label>
        </div>
        <input type="text" id="RaceName" v-model="race.Name"
               class="input input-bordered w-full max-w-sm"/>
      </div>
      <div>
        <div class="label">
          <label class="mr-2 label-text" for="RaceDate">Race Date (24h):</label>
        </div>
        <input type="datetime-local" id="RaceDate" v-model="race.RaceDate" :key="race.RaceDate"
               class="input input-bordered w-full max-w-sm"/>
      </div>
      <div class="">
        <div class="label">
          <label class="mr-2" for="RaceSelect">Game:</label>
        </div>
        <select id="RaceSelect" v-model="race.GameId" :key="race.GameId" class="input input-bordered w-full max-w-sm">
          <option v-for="game in games" :value="game.id">{{ game.name }}</option>
        </select>
      </div>
      <div class="">
        <div class="label">
          <label class="mr-2" for="SeriesSelect">Series:</label>
        </div>
        <select id="SeriesSelect" v-model="race.SeriesId" :key="race.SeriesId" class="input input-bordered w-full max-w-sm">
          <option v-for="series in seriesList" :value="series.id">{{ series.name }}</option>
        </select>
      </div>
      <div class="">
        <div class="label">
          <label class="mr-2" for="TrackSelect">Tracks:</label>
        </div>
        <select id="TrackSelect" v-model="race.TrackId" :key="race.TrackId" class="input input-bordered w-full max-w-sm">
          <option v-for="track in tracks" :value="track.id">{{ track.name }}</option>
        </select>
      </div>
    </div>
    <div class="flex mt-4 justify-end mb-4 mr-8">
      <button class="btn btn-success w-full sm:w-1/6" v-on:click="createOrEditRace()">
        Create Race
      </button>
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