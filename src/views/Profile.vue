<script setup>

import BasicDetailsInputComponent from "@/components/profile/BasicDetailsInputComponent.vue";



</script>

<template>
  <div class="mt-10 grid grid-cols-12 gap-5 m-5">
    <div class="sm:col-span-8 order-2 sm:order-1 col-span-12 ">
      <basic-details-input-component/>
    </div>
    <div class="flex col-span-12 order-1 sm:order-1 sm:col-span-4 w-full mt-28 border-t">
      <div class="flex-col rounded-xl w-full flex p-2 ">
        <div class="border flex p-2 rounded-full mx-auto my-5 -mt-28 bg-base-100">
          <div class="">
            <img src="/public/favicon.ico" class="bg-red-50 w-[200px] rounded-full " />
          </div>
        </div>
        <div>
          <div class="divider"></div>
        </div>
        <div class="flex flex-col mx-10 mb-2">
          <button class="btn btn-success">Update Image</button>
        </div>
      </div>
    </div>
    <div class="col-span-12 order-last mt-10  bg-gray-700 rounded-xl p-2">
      <div>
        <span class="text-xl font-bold">Recent Races</span>
      </div>
      <table class="w-full table">
        <thead>
          <tr>
            <th>Race</th>
            <th>Track</th>
            <th>Date</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Race 1</td>
            <td>Silverstone</td>
            <td>16/05/2024</td>
            <td>1st</td>
          </tr>
          <tr>
            <td>Race 2</td>
            <td>Monza</td>
            <td>16/05/2024</td>
            <td>3rd</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>

</style>