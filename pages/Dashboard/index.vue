<script setup>

import {reactive, ref} from "vue";
import UserAdminRacesDashboard from "../../components/dashboard/UserAdminRacesDashboard.vue";
import UserRacesTable from "~/components/tables/UserRacesTable.vue";

const roles = reactive([
  {name: "Admin"},
  {name: "Races"},
  {name: "Race Admin"}
]);

const page = ref(1);

</script>

<template>
  <div class="flex flex-col flex-1">
    <div class="grid grid-cols-1 sm:grid-cols-4 h-full flex-1">
      <div class="col-span-1 bg-gray-100 dark:bg-neutral flex shadow-xl sm:shadow-none">
        <div class="p-10">
          <div class="rounded-xl flex flex-col">
            <div class="p-2">
              <span class="text-2xl ">Dashboard Roles</span>
            </div>
            <div class=" flex-col w-full p-4">
              <button
                  v-for="(role, index) in roles"
                  class="text-2xl btn btn-ghost w-full my-2 btn-outline"
                  v-on:click="page = index">
                {{ role.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-3">
        <div class="m-10 border border-gray-200 dark:border-gray-900 shadow-2xl rounded-xl">
          <!--        admin component-->
          <div class="flex flex-col" v-if="page === 0">
            <div class="p-3 ps-4">
            <span class="text-2xl">
              Admin Dashboard
            </span>
            </div>
            <div class="flex p-3 ps-4">
              <div class="w-1/4">
                SUB MENU
              </div>
              <div CLASS="W-3/4">dashboard</div>
            </div>
          </div>
          <!--        race component-->
          <div class="flex flex-col" v-if="page === 1">
            <div class="p-3 ps-4">
            <span class="text-2xl">
              Race Dashboard
            </span>
            </div>
            <div class="flex p-3 ps-4">
              <UserRacesTable/>
            </div>
          </div>
          <!--        race admin component-->
          <UserAdminRacesDashboard v-if="page === 2"/>
        </div>
      </div>
    </div>
  </div>
</template>