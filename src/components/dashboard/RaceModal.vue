<script setup>
  import {reactive} from "vue";

  const props = defineProps({
    raceProp : {},
  })

  function ShowModal(){
    document.getElementById('race-modal').showModal()
  }


  defineExpose({ShowModal})


</script>

<template>

  <dialog id="race-modal" class="modal">
    <div class="modal-box ">
      <div class="flex flex-col h-full">
        <div class="mb-2">
          <h3 class="font-bold text-lg">{{raceProp?.name}}</h3>
          <div class="badge badge-neutral mx-1">5 laps</div>
          <div class="badge badge-neutral mx-1">P-Q-R</div>
          <div class="badge badge-neutral mx-1">Any Rating</div>
        </div>
        <div class="mb-3">
          <span class="py-4">Race Description</span>
        </div>
        <div class="mb-2 self-end">
          0: drivers in race
        </div>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<style scoped>

</style>