<script setup>
  import {useAuthStore} from "@/stores/authStore.js";
  import {ref} from "vue";
  import {authValidation} from "@/functions/auth.js";

  const auth = authValidation();

  const logout = async () => {
    await auth.postLogout();
  }

  const authStore = useAuthStore();
</script>

<template>
  <div class="navbar drop-shadow bg-gray-100 dark:bg-neutral pb-4 px-4">
    <div class="navbar-start">
      <RouterLink to="/" class="text-2xl mx-2 dark:text-white font-bold">RP</RouterLink>
    </div>
    <div class="navbar-center">
      <ul class="menu menu-horizontal px-1">
        <li>
          <RouterLink to="/Races" class="text-2xl mx-2 dark:text-white font-semibold">Race</RouterLink>
        </li>
        <li>
          <RouterLink to="/Tracks" class="text-2xl mx-2 dark:text-white font-semibold">Tracks</RouterLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end" v-if="authStore.user.id">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="/public/favicon.ico" />
          </div>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><RouterLink to="/Profile">{{ authStore.user.firstname + " " + authStore.user.lastname}}</RouterLink></li>
          <li><a>Settings</a></li>
          <li><a v-on:click="logout">Logout</a></li>
        </ul>
      </div>
      <div class="mr-4">
        <RouterLink
            to="/Account/login"
            class="flex flex-col text-center text-xl font-semibold"
            v-if="!authStore.user.id">
          <div>login or</div>
          <div>register</div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>