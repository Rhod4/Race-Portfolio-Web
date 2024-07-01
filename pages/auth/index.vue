<script setup>
import LoginComponent from "../../components/Identity/LoginComponent.vue";
import {ref} from "vue";
import RegisterComponent from "../../components/Identity/RegisterComponent.vue";


const isRegister = ref(useRoute().query["register"]);

watch(() => useRoute().query["register"], () => {
  isRegister.value = useRoute().query["register"]
})

</script>

<template>
  <div class="div-center flex flex-1">
    <div class="flex flex-col p-5 m-auto justify-center items-center shadow-2xl rounded-xl h-fit">
      <LoginComponent v-show="isRegister !== 'true'" />
      <RegisterComponent v-show="isRegister === 'true'" />
      </div>
    </div>
</template>
