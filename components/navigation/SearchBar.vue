<script setup lang="ts">


import {ref, watch} from "vue";

const search = ref("");

const emit = defineEmits(["search"])

  watch(search, (newValue) => {
    emit("search", newValue)
  })

</script>

<template>
  <div class="border-b mx-2 ">
    <label class="input flex items-center gap-2 bg-neutral-100 dark:bg-base-100">
      <input placeholder="Search" type="text" class="grow border-0 input-ghost" v-model="search"/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
    </label>
  </div>
</template>

<style scoped>
  label:focus, label:focus-within {
    outline: none !important;
    border: none !important;
  }
</style>