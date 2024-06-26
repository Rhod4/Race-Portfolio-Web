<script setup lang="ts">

import {onMounted, type Ref, ref} from "vue";
import RaceModal from "@/components/modals/RaceModal.vue";
import type {RaceCard} from "~/types/races/raceCardType";

const raceVal = userRaceRequests()
const races: Ref<RaceCard[]> = ref([]);

const loading = ref(true);

const getRaces = async () => {
  return await raceVal.getDashboardRaces();
}

onMounted(async () => {
  const racesFromApi = await getRaces().finally(() =>
      setTimeout(() => loading.value = false, 2000)
  )

  races.value.push(...racesFromApi)
});

const modalData: Ref<RaceCard> = ref({} as RaceCard)

const RaceModalRef = ref("RaceModalRef")

const ShowModal = (race: RaceCard) => {
  modalData.value = race
  RaceModalRef.value.ShowModal();
}

</script>

<template>
  <div class="pb-10 bg-gray-400 flex flex-col min-h-[400px] relative">
    <div class="absolute flex h-full w-full banner-image"></div>
    <div class="pb-2 indicator w-full ">
      <div class="indicator-item indicator-center w-full bg-red">
        <div class="w-full py-8 badge rounded-none border-none split-red flex self-start -ml-1">
          <div class="text-left w-full text-lg xl:text-2xl font-bold ml-2 pb-3 xl:pb-0 text-neutral-200 dark:text-neutral-300">UPCOMING RACES</div>
        </div>
      </div>
      <div class="flex w-full justify-center mt-2">
        <div
            v-if="loading === false"
            v-for="(race, index) in races"
            :key="race.id"
            :class="index === 0 ? '' : '!hidden lg:!grid'"
            class="loadIn"
        >
          <div class="card bg-neutral-100 dark:bg-base-100 shadow-xl image-full z-10 mx-5"
               type="button"
          >
            <figure><img :src="'/img/games/' + race.game.id + '.png'"
                         class="blur p-4"
                         style="--tw-blur: blur(2px)" alt="IRacing"/>
            </figure>
            <div class="card-body">
              <h2 class="card-title text-2xl font-bold text-neutral-200">{{ race.name }}</h2>
              <div class="card-actions justify-end mt-auto">
                <div class="badge py-3 badge-success">
                  <span class="mr-2">0</span>
                  <img src="/img/misc/raceHelmet.svg" class="max-w-[20px]"/>
                </div>
              </div>
              <button class="btn btn-neutral" v-on:click="ShowModal(race)">Find Out More!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        class="flex items-center h-full my-auto justify-center"
        v-if="loading">
      <div>
        <span class="loading loading-dots loading-lg text-neutral"></span></div>
    </div>
  </div>

  <race-modal ref="RaceModalRef" :raceProp="modalData"></race-modal>
</template>

<style scoped>


.split-red {
  background: linear-gradient(125deg, theme('colors.red.800') 70%, transparent 0%);

  @media (min-width: 450px) {
    background: linear-gradient(125deg, theme('colors.red.800') 50.8%, transparent 0%);
  }

}
.banner-image {
  background: url("/img/misc/BannerImage.jpg") no-repeat center;
  filter: blur(4px) brightness(.7);
  clip-path: inset(0);
}

.loadIn{
  animation: fadeInAnimation  2s forwards;
  z-index: 1;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>