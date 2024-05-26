<script setup>

import {reactive, ref} from "vue";

const roles = reactive([
  {name: "Admin"},
  {name: "Racer"},
  {name: "RaceAdmin"}
]);

const page = ref(1);

</script>

<template>
  <div class="flex min-h-[500px] h-full">
    <div class="w-1/4">
      <div class="p-10">
        <div class="border rounded-xl flex flex-col">
          <div class="p-2">
            <span class="text-2xl ">Dashboard Roles</span>
          </div>
          <div class=" flex-col w-full p-4">
            <button
                v-for="(role, index) in roles"
                class="text-2xl btn btn-ghost w-full my-2 btn-outline"
                v-on:click="page = index">
              {{role.name}}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-3/4 flex">
      <div class="m-10 border border-gray-900 w-full shadow-2xl rounded-xl">
<!--        admin component-->
        <div class="flex flex-col" v-show="page === 0">
          <div class="p-3 ps-4">
            <span class="text-2xl">
              Admin Dashboard
            </span>
          </div>
          <div class="flex p-3 ps-4">
            <div class="w-1/4">
              SUB MENU
            </div>
            <div CLASS="W-3/4">dashbaord</div>
          </div>
        </div>
<!--        race component-->
        <div class="flex flex-col" v-show="page === 1">
          <div class="p-3 ps-4">
            <span class="text-2xl">
              Race Dashboard
            </span>
          </div>
          <div class="flex p-3 ps-4">
            <div class="w-full">
              SUB MENU
            </div>
          </div>
        </div>
<!--        race admin component-->
        <div class="flex flex-col" v-show="page === 2">
          <div class="p-3 ps-4">
            <span class="text-2xl">
              Race Admin Dashboard
            </span>
          </div>
          <div class="flex mx-4">
            <button class="btn btn-success">Create A New Race</button>
          </div>
          <div class="flex p-3 ps-4">
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
                  <td>
                    <button class="btn btn-info">Info</button>
                    <button class="btn btn-warning mx-2">Edit</button>
                    <button class="btn btn-error">Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>