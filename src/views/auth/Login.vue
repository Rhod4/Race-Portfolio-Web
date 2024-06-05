<script setup>
import LoginComponent from "@/components/Identity/LoginComponent.vue";
import {ref, watch} from "vue";
import RegisterComponent from "@/components/Identity/RegisterComponent.vue";

const props = defineProps({
  accountType: {
    type: String,
    default: "login"
  }
})

const isLogin = ref(props.accountType);

watch(() => props.accountType, () => {
  isLogin.value = props.accountType
})

</script>

<template>
  <div class="div-center">
    <div class="flex flex-col p-5 m-auto justify-center items-center shadow-2xl rounded-xl h-fit">
      <LoginComponent v-show="isLogin === 'login'" />
      <RegisterComponent v-show="isLogin === 'register'" />
      <div v-show="isLogin === 'RoleSelector'">
        asd
      </div>
    </div>
  </div>
</template>

<style scoped>
  .div-center {
    position: absolute;
    height: 100%;
    display: flex;
    width: 100%;
    margin-top: -100px;
    z-index: -1;
}
</style>