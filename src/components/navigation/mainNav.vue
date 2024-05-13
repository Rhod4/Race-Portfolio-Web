<script setup>

</script>

<template>
  <div class="navbar  drop-shadow bg-gray-300 dark:bg-neutral">
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

    </div>
  </div>
</template>

<style scoped>

</style>