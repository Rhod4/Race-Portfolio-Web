<script setup lang="ts">
import {raceAdminValidation} from "@/functions/raceAdmin";
import {onMounted, PropType, reactive, ref, watch} from "vue";
import {gameValidation} from "@/functions/games";
import {CreateRaceRequest} from "@/types/races/createRace";
import {GameAdminResponse} from "@/types/races/gamesAdminResponse";

const raceAdmin = raceAdminValidation()

const race = reactive(<CreateRaceRequest>{})

defineProps({
  race: {
    type: Object as PropType<CreateRaceRequest>,
    required: false
  }
})

const gameVal = gameValidation();

const createRace = async () => {
  await raceAdmin.createRace(race)
}
const loading = ref(true);
const games = ref(<GameAdminResponse>[])
const seriesList = ref([])

watch(() => race.GameId, async () => {
  console.log(race.GameId)
  if (race.GameId) {
    seriesList.value = await raceAdmin.getSeriesForGame(race.GameId)
    console.log(seriesList)
  }
})

onMounted(async () => {
  games.value = await gameVal.getGames()
  loading.value = false
})

</script>

<template>
  <div>
    <div class="flex flex-col px-10 py-4" v-if="!loading">
      <div class="">
        <label class="mr-2" for="RaceName">Race Name:</label>
        <input type="text" id="RaceName" v-model="race.Name"
               class="input input-bordered w-full max-w-xs"/>
      </div>
      <div class="">
        <label class="mr-2" for="RaceSelect">Race:</label>
        <select type="text" id="RaceSelect" v-model="race.GameId" class="input input-bordered w-full max-w-xs">
          <option v-for="game in games" :value="game.id">{{ game.name }}</option>
        </select>
      </div>
      <div class="">
        <label class="mr-2" for="SeriesSelect">Series:</label>
        <select type="text" id="SeriesSelect" v-model="race.GameId" class="input input-bordered w-full max-w-xs">
          <option v-for="series in seriesList" :value="series.id">{{ series.name }}</option>
        </select>
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