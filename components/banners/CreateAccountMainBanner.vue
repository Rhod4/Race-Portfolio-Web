<script setup >
defineProps({
  user: {}
})

</script>

<template>
  <div class="py-16 w-full flex flex-col items-center text-neutral-600 dark:text-neutral-400">
    <div class="text-2xl mt-1">Hot Join Races Or Join Leagues</div>
    <div class="text-2xl mt-1">Solo Race or Driver Swap</div>
    <div class="text-2xl mt-1">Sprint Race, Rally, Endurance, Oval</div>
    <div class="text-3xl mt-3 text-center">YOU CHOOSE HOW YOU WANT TO RACE</div>
    <div class="mt-10 flex " v-if="!user.id">
      <NuxtLink
          class="text-4xl font-bold mx-3 btn btn-lg btn-outline btn-warning flex hover:text-neutral"
          to="/auth">login
      </NuxtLink>
      <NuxtLink
          class="text-4xl font-bold mx-3 btn btn-lg btn-outline btn-success flex"
          to="/auth/register">register
      </NuxtLink>
    </div>
    <div class="mt-10" v-if="user.id">
      <NuxtLink
          class="text-4xl font-bold mx-3 btn btn-lg btn-outline btn-success flex"
          to="/Races">Race
      </NuxtLink>
    </div>
  </div>
</template>