<script setup lang="ts">
  import {computed,} from "vue";
  import {useAuthStore} from "~/stores/authStore";

  const auth = authValidation();

  const logout = async () => {
    await auth.postLogout();
  }
  const authStore = useAuthStore()

  const profileName : any = computed(() =>{
    if(authStore.user.firstname != null || authStore.user.lastname != null)
      return authStore.user.firstname + " " + authStore.user.lastname

      return profileName.value = "Profile"
  })

</script>

<template>
  <div class="navbar drop-shadow bg-gray-100 dark:bg-neutral pb-4 px-4">
    <div class="navbar-start">
      <NuxtLink to="/" class="text-2xl mx-2 dark:text-white font-bold">RP</NuxtLink>
    </div>
    <div class="navbar-center">
      <ul class="menu menu-horizontal px-1">
        <li v-show="authStore.user.id !== undefined">
          <NuxtLink to="/Dashboard" class="sm:text-2xl sm:mx-2 text-neutral dark:text-white font-semibold">Dashboard</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/Races" class="sm:text-2xl sm:mx-2 text-neutral dark:text-white font-semibold">Race</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/Tracks" class="sm:text-2xl sm:mx-2 text-neutral dark:text-white font-semibold">Tracks</NuxtLink>
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
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
          <li><NuxtLink to="/Profile">{{ profileName }}</NuxtLink></li>
          <li><a>Settings</a></li>
          <li><a v-on:click="logout">Logout</a></li>
        </ul>
      </div>
      <div class="mr-4">
        <NuxtLink
            to="/auth"
            class="flex flex-col text-center text-xl font-semibold"
            v-if="!authStore.user.id">
          <div>login or</div>
          <div>register</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>