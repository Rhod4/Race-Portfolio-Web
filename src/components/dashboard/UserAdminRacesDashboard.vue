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
      <div class="flex justify-between pt-3">
        <div class="flex mx-2 justify-between w-full">
        <div>
          <span class="text-2xl">
            Race Admin Dashboard
          </span>
        </div>
        <div class="">
          <button class="btn btn-success" v-on:click="state = 1">Create A New Race</button>
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
          <tr>
            <td>Race 1</td>
            <td>12/01/2024</td>
            <td class="flex justify-end">
              <div class="hidden sm:flex">
              <button class="btn btn-info">Info</button>
              <button class="btn btn-warning mx-2">Edit</button>
              <button class="btn btn-error">Remove</button>
              </div>
              <div class="display sm:hidden">
              <div class="dropdown dropdown-left">
                <div tabindex="0" role="button" class="btn m-1">Click</div>
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li class="border-b border-b-gray-500">
                    <button class="btn btn-link">Info</button>
                  </li>
                  <li class="border-b border-b-gray-500">
                    <button class="btn btn-link border-b">Edit</button>
                  </li>
                  <li>
                    <button class="btn btn-link">Remove</button>
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
      <manage-race></manage-race>
    </div>
  </div>
</template>