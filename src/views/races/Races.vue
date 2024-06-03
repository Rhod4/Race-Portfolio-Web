<script setup>

import axios from "axios";
import {onMounted, reactive, ref} from "vue";
import {raceValidations} from "@/functions/races.js";
import SearchBar from "@/components/navigation/SearchBar.vue";
import {useAuthStore} from "@/stores/authStore.js";
import RaceModal from "@/components/modals/RaceModal.vue";

const raceVal = raceValidations()

const authStore = useAuthStore()

const data = reactive({races: []});
const modalData = reactive({})
const RaceModalRef = ref("RaceModalRef")

const searchFilter = ref("")

const handleSearch = (val) => {
    searchFilter.value = val;
}

onMounted(async () => {
  data.races = await raceVal.getRaces()
})

const ShowModal = (race) => {
  modalData.data = race
  RaceModalRef.value.ShowModal();
}

</script>

<template>

  <div class="px-10 pt-10">
    <div class="overflow-x-auto p-2">
      <div class="mb-10">
        <SearchBar @search="handleSearch"></SearchBar>
      </div>
      <div class="grid grid-cols-3 gap-2">
      <div
          v-for="race in data.races.filter(val => searchFilter !== '' ? val.name.includes(searchFilter) : val )">
      <div class="card bg-base-100 shadow-xl image-full z-10 mx-5"
           type="button"
      >
        <figure><img :src="'/src/assets/images/games/' + race.game.id + '.png'"
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
              <span class="mr-2">0</span>
              <img src="/src/assets/images/misc/helmet.svg" class="max-w-[20px]" alt="racers"/>
            </div>
          </div>
          <button class="btn" v-on:click="ShowModal(race)" v-if="!authStore.user.id">Find Out More!</button>
          <RouterLink class="btn" :to="'/RaceDetails/'+race.id" v-if="authStore.user.id">View Race</RouterLink>
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>

  <race-modal ref="RaceModalRef" :raceProp="modalData.data" :loggedIn="true"></race-modal>
</template>

<style scoped>

</style>