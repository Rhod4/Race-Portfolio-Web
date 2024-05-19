<script setup>

import {authValidation} from "@/functions/auth.js";
import {onMounted, reactive} from "vue";

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
    <div class="border rounded-2xl p-10 w-full">
      <div class="w-full grid grid-cols-2 w-3/4">
          <span>First Name: </span>
          <span>{{user.firstname}}</span>
          <span>Last Name: </span>
          <span>{{user.lastname}}</span>
          <span>Email: </span>
          <span> {{user.email}}</span>
      </div>
    </div>
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