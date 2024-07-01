<script setup lang="ts">
  import {onMounted} from "vue";

  const races = ref();

  const raceValidate = userRaceRequests()

  onMounted(async () => {
    races.value = await raceValidate.getUserRaces()
  })
</script>

<template>
  <div class="flex w-full px-4">
    <div class="flex flex-col w-full">
      <span>Previous Races</span>
      <table class="table w-full">
        <thead>
        <tr>
          <th>
            #
          </th>
          <th>
            Race Name
          </th>
          <th>
            Game
          </th>
          <th>
            Track
          </th>
          <th>
            Q
          </th>
          <th>
            Q Time
          </th>
          <th>
            Q Time
          </th>
          <th>
            Result
          </th>
          <th>
            Best Time
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="race in races" :key="race.id" class="text-neutral-700 dark:text-base-100">
          <td></td>
          <td>
            {{race.name}}
          </td>
          <td>
            {{race.game.name}}
          </td>
          <td>
            {{race.trackName}}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div>
      <div >

      </div>

    </div>
  </div>
</template>