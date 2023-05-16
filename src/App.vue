<template>
  <div id="app">
    <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'>
    <header>
      <h1>Welcome to TeamG!</h1>

      <nav>
        <router-link to="/drawform">Draw Creation</router-link> |
        <router-link to="/login">Log In</router-link> |
        <router-link to="/signup">Sign Up</router-link>
      </nav>
      <router-view/>
    </header>
    
  </div>
</template>

<script>
export default{
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background-image: url(https://cdn.dribbble.com/users/160641/screenshots/15773953/pingpong_4x.gif?compress=1&resize=400x300);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* border: 1px groove salmon; */
}

nav {
  padding: 25px;
  border: 3px groove aquamarine;
  border-radius: 1em;
  background-color: lightsalmon;
  margin: 2% 17% 5% 17%;
}

nav a {
  font-weight: bold;
  color: rebeccapurple;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: mintcream;
  text-decoration: none;
}

h1{
  font-weight:bolder;
}

h1, p {
  font-family: 'Lato';
  color:bisque;
  border: 1px groove salmon;
  background-color: indianred;
  margin: 0;
  padding: 25px;
}

h2 {
  background-color: indianred;
  border: groove salmon;
  padding: 20px;
  margin-top: 0;
  color: beige;  
}

form {
  font-family: 'Lato';
  color: bisque;
}
</style>
