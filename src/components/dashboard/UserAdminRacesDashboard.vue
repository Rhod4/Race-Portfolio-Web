<script setup lang="ts">


import {raceAdminValidation} from "../../functions/raceAdmin";
import {onMounted, reactive, ref} from "vue";
import ManageRace from "@/components/dashboard/ManageRace.vue";

const raceAdmin = raceAdminValidation()

const races = async (): Promise<any> => {
  return await raceAdmin.getAdminRacesForUser();
}
onMounted(() => {
  races();
})
const state = ref(<number>0)

</script>
<template>
  <div>
  <div class="flex flex-col" v-if="state === 0">
    <div class="flex justify-between ps-4 pt-3">
      <div>
          <span class="text-2xl">
            Race Admin Dashboard
          </span>
      </div>
      <div class="flex mx-4">
        <button class="btn btn-success" v-on:click="state = 1">Create A New Race</button>
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
        <tr>
          <td>Race 1</td>
          <td>12/01/2024</td>
          <td class="flex justify-end">
            <button class="btn btn-info">Info</button>
            <button class="btn btn-warning mx-2">Edit</button>
            <button class="btn btn-error">Remove</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="flex flex-col"
      v-if="state === 1">
    <div class="flex p-2 justify-end">
    <button class="btn btn-error" v-on:click="state = 0">Back</button>
    </div>
    <manage-race></manage-race>
  </div>
  </div>
</template>