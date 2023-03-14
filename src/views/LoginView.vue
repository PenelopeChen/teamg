<template>
    <div class="login">
        <!-- Error handling (is not working :( )-->
        <div v-if="errorMsg">
            <p>{{ errorMsg }}</p>
        </div>

        <!-- LogIn -->
        <form @submit.prevent="login" class="form">
            <h2>Log In</h2>

            <div class="fields">
                <div>
                    <label for="email">Email</label>
                    <input type="email" required id="email" v-model="email">
                </div>

                <div>
                    <label for="password">Password</label>
                    <input type="password" required id="password" v-model="password">
                </div> 
            </div>
            <br />
            <button type="submit">Log In</button>
            <br />
            <router-link :to="{name: 'signup'}" class="redirects">Don't have an account? Sign Up</router-link>
        </form>
    </div>
</template>

<script>
import { supabase } from "@/lib/supabaseClient"

export default {
  name: "login",
  setup() {
  
  } //,
  // data() {
  // return  {
  //   email: "",
  //   password: "",
  //   errorMsg: "" 
  //   }
  // },
  // methods: {
  //   signup(){
  //       console.log(this.email)
  //       if () {
  //           this.errorMsg= "Error: Invalid email or password"
  //           console.log(supabase)
  //           return
  //       } else {
  //           this.$router.push({ name: "drawform"})
  //       }
  //   }
  // }
}
console.log(supabase)
</script>

<style scoped>
    .login{
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

    /* .fields{
        display: flex;
        flex-direction: column;
        align-content: flex-end;
    } */

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