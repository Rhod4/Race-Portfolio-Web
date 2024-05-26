<script setup>
import {computed, reactive, ref} from "vue";
import {email, helpers, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {authValidation} from "@/functions/auth.js";

const login = reactive({
  email: "",
  password: "",
})

const rules = computed(() => ({
  email: {
    required: helpers.withMessage("Email Required", required),
    email: helpers.withMessage("Please Enter Valid Email", email),
  },
  password: {
    required: helpers.withMessage("Password Required", required)
  }
}))

const v$ = useVuelidate(rules, login)

const auth = authValidation();

const error = ref(false);

const postLogin = async () => {

  if (await v$.value.$validate()){
    const data = await auth.postLogin(login)
    console.log(data)
    if(data === 401)
      error.value = true
  }
}

</script>

<template>
  <div>
    <h2 class="mb-5">Login</h2>
    <div v-if="error === true" class="w-full flex">
      <span class="text-red-600 text-center w-full">Incorrect Details Entered</span>
    </div>
    <form v-on:submit.prevent="postLogin()">
      <label class="input input-bordered flex items-center gap-2 mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
          <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
          <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
        </svg>
        <input type="email" class="grow" placeholder="Email" v-model="login.email"/>
      </label>
      <div class="input-error" v-for="error of v$.email.$errors" :key="error.$uid">
        <div class="error-msg">
          <small>{{ error.$message }}</small>
        </div>
      </div>
      <label class="input input-bordered flex items-center gap-2 mt-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
          <path fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd"/>
        </svg>
        <input type="password" class="grow" placeholder="Password" v-model="login.password"/>
      </label>
      <div class="input-error" v-for="error of v$.password.$errors" :key="error.$uid">
        <div class="error-msg">
          <small>{{ error.$message }}</small>
        </div>
      </div>
      <button class="btn w-full mt-4">login</button>
    </form>
    <div class="mt-2">
      <RouterLink class="btn text-center btn-ghost w-full"
                  to="/Account/register"
      >
        Dont have an account?
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
</style>