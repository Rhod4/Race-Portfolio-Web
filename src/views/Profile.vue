<script setup>

import BasicDetailsInputComponent from "@/components/profile/BasicDetailsInputComponent.vue";



const props = defineProps({
  loadingProfileDetails: Boolean
})

</script>

<template>
  <div class="mt-10 grid grid-cols-12 gap-5 m-5">
    <div class="sm:col-span-8 col-span-12 ">
      <basic-details-input-component :loading-profile-details="loadingProfileDetails"></basic-details-input-component>
    </div>
    <div class="flex col-span-12 order-1 sm:col-span-4 w-full mt-28">
      <div class="flex-col rounded-xl w-full flex p-2 ">
        <div class="border flex p-2 rounded-full mx-auto my-5 -mt-28">
          <div class="">
            <img src="/public/favicon.ico" class="bg-red-50 w-[200px] rounded-full " />
          </div>
        </div>
        <div>
          <div class="divider"></div>
        </div>
        <div class="flex flex-col mx-10 mb-2">
          license
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>