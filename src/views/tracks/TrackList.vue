<script setup>
  import axios from "axios";
  import {onMounted, reactive, ref, watch} from "vue";
  import SearchBar from "@/components/navigation/SearchBar.vue";

  let tracks = reactive({tracks: []});

  let format = ref(true);

  onMounted(() =>{
    axios.get("Track/AllTracks",).then(
        (response) => {
          tracks.tracks = response.data.success
        }
    ).catch()

  });

  const handleSearch = (value) => {
    trackSearch.value = value;
  };

  let trackSearch = ref("");

</script>

<template>
  <div>
    <div class="flex">
      <div class="grow">
        <SearchBar @search="handleSearch"></SearchBar>
      </div>
      <div class="grow-0 ">
        <label class="btn btn-circle swap swap-rotate">
          <input type="checkbox" v-on:click="format = !format" />
          <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
          </svg>
          <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>
          </svg>

        </label>
      </div>
    </div>
    <div class="mt-5">
      <div class="grid grid-cols-3" v-show="format === true">
        <div class="card bg-base-100 shadow-xl m-2" v-for="track in tracks.tracks.filter(value =>
          trackSearch ? value.name.toLowerCase().includes(trackSearch.toLowerCase()) : true)" :key="track.id">
          <figure><img src="/public/favicon.ico" alt="Shoes" class="object-cover" /></figure>
          <div class="card-body">
            <h2 class="card-title">{{track.name}}</h2>
            <p></p>
            <div class="card-actions justify-end">
            </div>
          </div>
        </div>
      </div>

      <div v-show="format === false">
      <table class="table">
        <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr  v-for="track in tracks.tracks.filter(value =>
          trackSearch ? value.name.toLowerCase().includes(trackSearch.toLowerCase()) : true)" :key="track.id">
            <th></th>
            <td>{{track.name}}</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>