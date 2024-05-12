<script setup>

import axios from "axios";
import {onMounted} from "vue";

function getRaces() {
  axios.get("Race/GetRaces")
      .then(response => {
        // Process the response data here
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
  <div><p>home</p></div>
  <RouterLink to="/Login">HOMEBUTTON</RouterLink>
</template>

<style scoped>

</style>