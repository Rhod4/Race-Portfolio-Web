<script setup>
import axios from "axios";
import {onMounted, reactive, ref, watch} from "vue";
import SearchBar from "../../components/navigation/SearchBar.vue";

const tracks = reactive([]);
const format = ref(true);
const games = reactive([])
const loading = ref(false);
const page = ref(1)
const totalPages = ref(10)

onMounted(() => {
  loading.value = true
  axios.get("api/Track/Tracks",).then(
      (response) => {
        tracks.push(...response.data.success)

        for (const track of tracks) {
          if (!games.find((g) => g.id === track.game.id)) {
            games.push(track.game);
          }
        }
      }
  ).catch((error) => {
        console.error(error);
      }
  ).finally(() => {
    loading.value = false;
  })

});

const handleSearch = (value) => {
  trackSearch.value = value;
};

const trackSearch = ref("");
const filterGame = ref(null);

watch(trackSearch && tracks && filterGame, () => {
  trackFiler();
})

function trackFiler() {
  //todo :filterGame.value is set too undefined for a search issue that needs resolving
  if(trackSearch.value === "" && filterGame.value === undefined)
    return null;

  return tracks.filter(value =>
      //track name
      (trackSearch ? value.name.toLowerCase().includes(trackSearch.value.toLowerCase()): true) &&
      //game
      (filterGame.value ? value.game.id === filterGame.value.id : true))

}

</script>

<template>
  <div class="pt-4 px-10 pb-4 flex flex-col flex-1">
    <div class="w-full text-center">View all the tracks we have to offer with more being added all the time</div>
    <div class="flex">
      <div class="grow">
        <SearchBar @search="handleSearch"></SearchBar>
      </div>
      <div class="grow-0">
        <div class="flex">
          <div class="">
            <select class="select select-bordered w-full max-w-xs bg-neutral-100 text-gray-700 dark:bg-base-100 dark:text-white" v-model="filterGame">
              <option :value="null">No Game</option>
              <option v-for="game in games" :value="game">{{game.name}}</option>
              <option value="test">test</option>
            </select>
          </div>
          <div class="ml-2">
            <label class="btn btn-circle btn-ghost swap swap-rotate static z-0 bg-neutral-100 text-gray-500 dark:bg-base-100 dark:text-gray-300">
              <input type="checkbox" v-on:click="format = !format"/>
              <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                   viewBox="0 0 512 512">
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
              </svg>
              <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                   viewBox="0 0 512 512">
                <polygon
                    points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="grid md:grid-cols-3 xl:grid-cols-4 justify-items-center" v-show="format === true">
        <div class="card bg-base-200 shadow-sm m-2" v-for="track in trackFiler()" :key="track.id">
          <div class="h-[350px] flex bg-gray-300 rounded-t-xl">
            <figure><img :src="'/img/tracks/'+track.id+'.png'" :alt="track.name"
                         class="object-fill rounded-xl"/></figure>
          </div>
          <div class="card-body bg-gray-300 text-gray-700 dark:bg-base-100 dark:text-gray-300">
            <h2 class="card-title">{{ track.name }}</h2>
            <p></p>
            <div class="card-actions justify-end">
            </div>
          </div>
        </div>
      </div>

      <div v-show="format === false">
        <table class="table">
          <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="track in trackFiler()" :key="track.id">
            <th>
              <div class="h-[50px] w-[50px] flex">
                <img :src="'/img/tracks/'+track.id+'.png'" :alt="track.name" class="object-contain"/>
              </div>
            </th>
            <td>{{ track.name }}</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="join flex justify-center my-10">
      <button v-for="pageNumber in totalPages" class="join-item btn" :class="page === pageNumber ? 'btn-active': ''">{{pageNumber}}</button>
    </div>
  </div>
</template>

<style scoped>

</style>