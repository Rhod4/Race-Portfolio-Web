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
    <div class="modal-box">
      <h3 class="font-bold text-lg">{{raceProp?.name}}</h3>
      <p class="py-4">Press ESC key or click outside to close</p>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<style scoped>

</style>