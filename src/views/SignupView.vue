<template>
    <div class="signup">
        <!-- Error handling -->
        <div v-if="errorMsg">
            <p>{{ errorMsg }}</p>
        </div>

        <!-- SignUp -->
        <form @submit.prevent="signup" class="form">
            <h2>Sign Up</h2>

            <div>
                <label for="email">Email</label>
                <input type="email" required id="email" v-model="email">
            </div>

            <div>
                <label for="password">Password</label>
                <input type="password" required id="password" v-model="password">
            </div>

            <div>
                <label for="confirmPassword">Confirm password</label>
                <input type="password" required id="confirmPassword" v-model="confirmPassword">
            </div>
            <br />
            <button type="submit">Sign Up</button>
            <br />
            <router-link :to="{name: 'login'}" class="redirects">Already have an account? Log In</router-link>
        </form>
    </div>
</template>

<script>
import { supabase } from "@/lib/supabaseClient"

export default {
  name: "signup",
  setup() {

  },
  data() {
  return  {
    email: "",
    password: "",
    confirmPassword: "",
    errorMsg: "" 
    }
  },
  methods: {
    signup(){
        console.log(this.email)
        if (this.password !== this.confirmPassword) {
            this.errorMsg= "Error: passwords do not match"
            console.log(supabase)
            return
        } else {
            this.$router.push({ name: "login"})
        }
    }
  }
}
</script>

<style scoped>
    .signup{
        margin: 7em;
    }

    .form{
        padding: 30px;
        background-color: rosybrown;
        opacity: 0.95;
        border-radius: 0.4em;
        border: groove mediumaquamarine;
        /* box-shadow: 0 0 5px 10px rosybrown; */
        line-height: 1.5em;
    }

    h2{ 
        background-color: indianred;
        border: groove salmon;
        padding: 20px;
        margin-top: 0;
    }

    label{
        font-weight: 600;
    }

    input{
        padding: 8px 15px;
        border-radius: 10em;
    }

    button{
        /* border: 3px salmon; */
        padding: 0.5em;
        background-color: mediumaquamarine;
        color: mintcream;
        font-weight:bolder;
        border-radius: 0.3em;
    }
</style>