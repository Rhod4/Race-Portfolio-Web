<script setup>

import auth from "@/functions/auth.js";

  let login = {
    email: "",
    password: "",
  }

  function postLogin(){
    auth.postLogin(login);
  }

</script>

<template>
  <div class="div-center">
    <div class="flex flex-col p-5 m-auto justify-center items-center shadow-2xl rounded-xl h-fit">
      <h2 class="mb-5">Login</h2>
      <form v-on:submit.prevent="postLogin()">
        <label class="input input-bordered flex items-center gap-2 my-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input type="email" class="grow" placeholder="Email" v-model="login.email" />
        </label>
        <label class="input input-bordered flex items-center gap-2 my-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
          <input type="password" class="grow" placeholder="Password" v-model="login.password" />
        </label>
        <button class="btn w-full mt-2">login</button>
      </form>
      <button v-on:click="register()">register</button>
      </div>
  </div>
</template>

<style scoped>
  .div-center{
    position: absolute;
    height:100%;
    display: flex;
    width:100%;
    margin-top:-100px;
    z-index: -1;
  }
</style>