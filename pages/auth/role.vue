<script setup lang="ts">
const roles = ref([
  {
    roleType: "Drive",
    roleDescription: "Want to drive",
    image: '/img/misc/steeringWheel.svg'
  },
  {
    roleType: "Other",
    roleDescription: "Anything else",
    image: '/img/misc/raceHelmet.svg'
  }
])
</script>

<template>
  <div class="flex w-full justify-center mt-2">
    <div class="flex flex-col justify-center">
      <span class="mx-auto text-green-600 text-xl font-bold">Choose the role you want to register for</span>
      <small class="mx-auto text-red-600">roles can be added or changed later</small>
    </div>
  </div>
  <div class="flex flex-1 w-full h-full justify-around items-center">
    <NuxtLink class="w-1/5" to="/"
              v-for="role in roles">
    <div class="card border border-gray-300 w-full h-[250px] bg-neutral-200 shadow-xl image-full">
      <figure>
        <img :src="role.image" alt="role select background image"
          class=""
        />
      </figure>
      <div class="card-body flex mt-auto justify-center bg-transparent">
        <div class="card-title justify-center">
          <h2 class="p-2 text-green-600 bg-neutral-200 shadow-xl border-2 border-green-500 rounded-xl">{{ role.roleType }}</h2>
        </div>
        <p class="px-2 py-1 self-center border-2 border-success rounded-xl bg-neutral-200 text-black">{{role.roleDescription}}</p>
      </div>
    </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.card.image-full:before{
  background-color: transparent;
}
</style>