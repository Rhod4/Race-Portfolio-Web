<script setup>
  import auth from "/src/functions/auth.js"

  const logout = async () => {
    await auth.postLogout();
  }

  const test = async () => {
    await auth.profileTest()
  }

</script>

<template>
  <div class="navbar drop-shadow bg-gray-300 dark:bg-neutral pb-4">
    <div class="navbar-start">
      <RouterLink to="Home" class="text-2xl mx-2 dark:text-white">RP</RouterLink>
    </div>
    <div class="navbar-center">
      <ul class="menu menu-horizontal px-1">
        <li>
          <RouterLink to="Races" class="text-2xl mx-2 dark:text-white">race</RouterLink>
        </li>
        <li>
          <RouterLink to="Login" class="text-2xl mx-2 dark:text-white">login</RouterLink>
        </li>
        <li>
          <RouterLink to="Tracks" class="text-2xl mx-2 dark:text-white">Tracks</RouterLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="/public/favicon.ico" />
          </div>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Profile</a></li>
          <li><a v-on:click="test">Settings</a></li>
          <li><a v-on:click="logout">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>