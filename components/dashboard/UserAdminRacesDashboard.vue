<script setup lang="ts">


import {raceAdminValidation} from "~/composables/raceAdmin";
import {onMounted, reactive, ref} from "vue";
import ManageRace from "@/components/dashboard/ManageRaceDashboard.vue";

const raceAdmin = raceAdminValidation()
const userRaces = ref([])
const selectedRace = ref()
const state = ref<number>(0);

const races = async (): Promise<any> => {
  userRaces.value = await raceAdmin.getAdminRacesForUser();
}
onMounted(() => {
  races();
})

const manageUserRace = (race?: any) => {
  selectedRace.value = race;
  state.value = 1;
}

const removeRace = async (raceId: string) => {
  console.log(raceId)
  await raceAdmin.removeRace(raceId);
}

</script>
<template>
  <div>
    <div class="flex flex-col" v-if="state === 0">
      <div class="flex justify-between pt-3">
        <div class="flex mx-2 justify-between w-full">
        <div>
          <span class="text-2xl">
            Race Admin Dashboard
          </span>
        </div>
        <div class="">
          <button class="btn btn-success" v-on:click="manageUserRace()">Create A New Race</button>
        </div>
        </div>
      </div>
      <div class="flex pt-3 ps-4">
        <table class="table table-fixed">
          <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="race in userRaces">
            <td>{{race.name}}</td>
            <td>{{new Date(race.raceDate).toLocaleDateString()}}</td>
            <td class="flex justify-end">
              <div class="hidden sm:flex">
              <button class="btn btn-info mr-2" v-on:click="manageUserRace(race)">Info</button>
              <button class="btn btn-error" v-on:click="removeRace(race.id)">Remove</button>
              </div>
              <div class="display sm:hidden">
              <div class="dropdown dropdown-left">
                <div tabindex="0" role="button" class="btn m-1">Click</div>
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li class="border-b border-b-gray-500">
                    <button class="btn btn-link" v-on:click="manageUserRace(race)">Info</button>
                  </li>
                  <li>
                    <button class="btn btn-link" v-on:click="removeRace(race.id)">Remove</button>
                  </li>
                </ul>
              </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex flex-col"
         v-if="state === 1">
      <div class="flex p-1 pt-3 justify-end px-8">
        <button class="btn btn-error sm:w-1/6" v-on:click="state = 0">Back</button>
      </div>
      <manage-race :race-id="selectedRace !== undefined ? selectedRace.id : undefined"></manage-race>
    </div>
  </div>
</template>