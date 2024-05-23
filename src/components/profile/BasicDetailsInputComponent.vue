<script setup>

import {computed, onMounted, reactive, ref} from "vue";
import {email, helpers, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {useAuthStore} from "@/stores/authStore.js";
import {authValidation} from "@/functions/auth.js";

const authStore = useAuthStore();
const auth = authValidation();

const props = defineProps({
  user: {}
})

let userDetails = reactive({
  firstname: "",
  lastname: "",
})

const rules = computed(() => ({
  firstname: {
    required: helpers.withMessage("Firstname required to race", required),
  },
  lastname: {
    required: helpers.withMessage("Lastname required to race", required)
  }
}))

onMounted(() => {
  userDetails.firstname = props.user.firstname
  userDetails.lastname = props.user.lastname
})

const v$ = useVuelidate(rules, userDetails)

const postDetails = async () => {

  if (await v$.value.$validate()) {
    const data = await auth.postProfileData(userDetails)
  }
}
const updaing = ref(false);
const UpdateInfo = async () => {
  updaing.value = !updaing.value;
}

</script>

<template>
  <div class="border rounded-2xl">
    <div class="p-10 w-full flex-col">
      <div class="w-full grid grid-cols-2 w-3/4">
        <span class="my-auto">First Name: </span>
        <input
            class="input input-sm my-2"
            :class="updaing ? ' input-bordered' : ''"
            :readonly="!updaing"
            v-model="userDetails.lastname">
        <span class="my-auto">Last Name: </span>
        <input
            class="input input-sm my-2"
            :class="updaing ? ' input-bordered' : ''"
            :readonly="!updaing"
            v-model="userDetails.firstname">
        <span class="my-auto">Email: </span>
        <span class="my-auto"> {{ user.email }}</span>
      </div>
    </div>
    <div class="flex w-full justify-end ">
      <button class="btn mb-4 mx-5" v-on:click="UpdateInfo()">Update Info</button>
    </div>
  </div>
</template>

<style scoped>

</style>