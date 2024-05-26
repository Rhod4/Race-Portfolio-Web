<script setup>

import {computed, onMounted, reactive, ref} from "vue";
import {helpers, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {useAuthStore} from "@/stores/authStore.js";
import {authValidation} from "@/functions/auth.js";

const authStore = useAuthStore();
const auth = authValidation();

const userDetails = reactive({
  firstname: "",
  lastname: "",
  email: ""
})

const loadingData = ref(true)

const loadUser = async () => {
  await auth.checkLogin().finally(()=> loadingData.value = false)
  userDetails.firstname = authStore.user.firstname
  userDetails.lastname = authStore.user.lastname
  userDetails.email = authStore.user.email
}

const rules = computed(() => ({
  firstname: {
    required: helpers.withMessage("Firstname required to race", required),
  },
  lastname: {
    required: helpers.withMessage("Lastname required to race", required)
  }
}))

onMounted(() => {
  loadUser().then(() =>
  {});
})

const v$ = useVuelidate(rules, userDetails)

const EditDetails = async () => {

  if (await v$.value.$validate()) {
    await auth.postProfileData(userDetails)
  }
}
const updating = ref(false);

const AllowUpdateInfo = async () => {
  updating.value = !updating.value;
}


</script>

<template>
  <div class="rounded-2xl h-full relative flex w-full flex-col dark:bg-gray-700 shadow-xl">
    <div class="h-full w-full flex absolute bg-gray-50 rounded-2xl opacity-20 justify-center"
    v-show="loadingData">
      <span class="loading loading-dots"></span>
    </div>
    <div class="p-10 w-full flex-col">
      <div class="w-full ">
        <div class="grid grid-cols-2 border-b dark:border-gray-500 py-2">
          <span class="my-auto">First Name: </span>
          <input
              class="input input-bordered input-warning shadow-xl dark:bg-gray-700"
              v-model="userDetails.firstname"
              placeholder="Please Enter"
              v-show="updating">
          <span
              class="input flex items-center dark:bg-gray-700"
              v-show="!updating">
            {{ userDetails.firstname }}
          </span>
        </div>
        <div class="grid grid-cols-2 border-b dark:border-gray-500 py-2">
          <span class="my-auto">Last Name: </span>
          <input
              class="input input-bordered input-warning dark:bg-gray-700"
              v-model="userDetails.lastname"
              placeholder="Please Enter"
              v-show="updating">
          <span
              class="input flex items-center dark:bg-gray-700"
              v-show="!updating">
            {{userDetails.lastname}}
          </span>
        </div>
        <div class="grid grid-cols-2">
          <span class="my-auto">Email: </span>
          <span class="input flex items-center dark:bg-gray-700"> {{ userDetails.email }}</span>
        </div>
      </div>
    </div>
    <div class="flex w-full justify-end px-5">
      <button class="btn btn-warning" :class="updating ? 'mr-2' : ''" v-on:click="AllowUpdateInfo()">Edit Info
      </button>
      <button class="btn btn-success" v-show="updating" v-on:click="EditDetails()">Update Info</button>
    </div>
  </div>
</template>

<style scoped>

</style>