<template>
  <div id="nav">
    <router-link to="/">نظرسنجی والد</router-link> |
    <router-link to="/about">نظرسنجی فرزند</router-link>
  </div>
  <router-view/>
</template>
 

<style>

@font-face {
  font-family: iransans;
  src: url("./assets/font/iran.ttf");
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(45deg ,rgb(74, 71, 88), rgb(250, 250, 250), rgb(7, 31, 3),rgb(188, 255, 223) );
    background-size: 150% 150%;
    height: 100vh;
    animation: background 70s ease infinite;
}

@keyframes background {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 1500px;
  margin: auto;
  
  font-family: iransans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  overflow-x: hidden;
}

#nav {
  padding: 30px;  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #b96442;
}

* {
  font-family: iransans;
}

</style>
