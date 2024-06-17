<script setup>

import {onMounted, reactive, ref} from "vue";
import SearchBar from "../../components/navigation/SearchBar.vue";
import RaceModal from "../../components/modals/RaceModal.vue";
import RaceCard from "../../components/cards/RaceCard.vue";

const raceRequests = userRaceRequests()

const data = reactive({races: []});
const modalData = reactive({})
const RaceModalRef = ref("RaceModalRef")

const searchFilter = ref("")

const handleSearch = (val) => {
  searchFilter.value = val;
}

onMounted(async () => {
  data.races = await raceRequests.getRaces(25)
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
              <RaceCard :race="race" @show-modal="ShowModal"/>
        </div>
      </div>
    </div>
  </div>

  <race-modal ref="RaceModalRef" :raceProp="modalData.data" :loggedIn="true"></race-modal>
</template>