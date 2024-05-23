<script setup>

import {authValidation} from "@/functions/auth.js";
import {onMounted, reactive} from "vue";
import BasicDetailsInputComponent from "@/components/profile/BasicDetailsInputComponent.vue";

const auth = authValidation();

const user = reactive({
  firstname: "",
  lastname: "",
  email: "",
})



const loadUser = async () => {
  const userData = await auth.getUserDetails()
  user.firstname = userData.firstname
  user.lastname = userData.lastname
  user.email = userData.email
}

onMounted(() => {
  loadUser();
})


</script>

<template>
  <div class="mt-10 grid grid-cols-12 gap-10 m-5">
    <div class="col-span-8">
      <basic-details-input-component :user="user"></basic-details-input-component>
    </div>
    <div class="flex  col-span-4 w-full">
      <div class="border flex-col rounded-xl w-full flex p-2">
        <div class="border flex p-2 rounded-full mx-auto my-5">
          <div class="">
            <img src="/public/favicon.ico" class="bg-red-50 w-[200px] rounded-full" />
          </div>
        </div>
        <div>
          <div class="divider"></div>
        </div>
        <div class="flex flex-col w-full mx-10 mb-2">
          license
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>