
<script setup>

import axios from "axios";
import {onMounted, reactive, ref} from "vue";
import RaceModal from "@/components/dashboard/RaceModal.vue";
const races = reactive([]);

const loading = ref(true);

const getRaces = async () => {

  axios.get("api/Race/Races")
      .then(response => {
        races.push(...response.data.success.map(item => ({ ...item })), ...response.data.success.map(item => ({ ...item })))

      })
      .catch(error => {
        console.error("There was a problem with the Axios request:", error);
      }).finally(() => {
       setTimeout(() => loading.value = false, 2000)

        console.log(races.find((value, index) => index === 1).name = "race 2");
      }
  );
}

onMounted(()=>{
  getRaces()});

const modalData = reactive({})

const RaceModalRef = ref("RaceModalRef")

const ShowModal = (race) => {
  modalData.data = race
  RaceModalRef.value.ShowModal();
}

</script>

<template>
  <div class="pb-10 bg-gray-400 flex flex-col min-h-[385px]">
    <div class="bg-gray-400 pb-10 indicator w-full ">
      <div class="indicator-item indicator-center w-full  bg-red">
        <div class="w-full py-8 badge rounded-none border-none split-red"></div>
      </div>
      <div class="flex w-full justify-center">
        <div class="card bg-base-100 shadow-xl image-full z-10 mx-5"
             :class="index === 1 ? '' : '!hidden lg:!grid'"
             v-for="(race, index) in races.slice(0,2)"
             type="button"
             v-if="loading === false"
        >
          <figure><img :src="'/src/assets/images/games/' + race.id + '.png'"
                       class="blur"
                       style="--tw-blur: blur(2px)" alt="IRacing"/></figure>
          <div class="card-body">
            <h2 class="card-title">{{race.name}}</h2>
            <span>{{race.id}}</span>
            <div class="card-actions justify-end mt-auto">
              <span class="">Find Out More!</span>
            </div>

            <button class="btn" v-on:click="ShowModal(race)">open modal</button>

          </div>
        </div>
      </div>
    </div>
    <div
        class="flex items-center h-full my-auto justify-center"
        v-if="loading === true">
      <div>
      <span class="loading loading-dots loading-lg text-neutral"></span></div>
    </div>
  </div>

  <race-modal ref="RaceModalRef" :raceProp="modalData.data"></race-modal>
</template>

<style scoped>


.split-red {
  background: linear-gradient(125deg ,theme('colors.red.800') 50.8%, transparent 0%);
}
</style>