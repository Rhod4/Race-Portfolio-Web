<script setup>

import axios from "axios";
import {onMounted} from "vue";

let races = [];

function getRaces() {
  axios.get("Race/GetRaces")
      .then(response => {
        // Process the response data here
        races = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.error("There was a problem with the Axios request:", error);
      });
}

onMounted(()=>{
  console.log("t");
  getRaces()});


</script>

<template>
  <div>
    <div v-for="race in races">
      <p>{{race.name}}</p>
    </div>
  </div>

  <div><p class="underline">blue</p></div>
  <button class="btn btn-primary">Click me!</button>
  <button class="btn bg-red-800	">Click me2!</button>


  <div class="overflow-x-auto">
    <table class="table table-zebra">
      <!-- head -->
      <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
      </thead>
      <tbody>
      <!-- row 1 -->
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>