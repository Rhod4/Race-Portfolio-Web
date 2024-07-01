<script setup lang="ts">
defineProps({
  raceParticipants: []
})
</script>

<template>
  <div>
    <table class="table text-black dark:text-base-100">
      <thead>
      <tr>
        <th>
          <span class="badge">Number</span>
        </th>
        <th>
          <span class="badge">Driver</span>
        </th>
        <th>
          <span class="badge">Car</span>
        </th>
        <th>
          <span class="badge">Session Laps</span>
        </th>
        <th>
          <span class="badge">Session Best Time</span>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="participant in raceParticipants">
        <td>
          {{ participant.userRaceNumber }}
        </td>
        <td>
          {{ participant.profile.firstname }} {{ participant.profile.lastname }}
        </td>
        <td>
          {{ participant.car.name }}
        </td>
        <td>
          13
        </td>
        <td>
          1:36:451
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>