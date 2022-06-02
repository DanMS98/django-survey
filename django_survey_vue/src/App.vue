<template>
  <div id="nav">
    <router-link to="/">پرسشنامه هوش هیجانی(فرم والد)</router-link> |
    <router-link to="/child_survey">پرسشنامه هوش هیجانی(فرم کودک)</router-link> |
    <router-link to="/about">درباره ما</router-link>
  </div>
  <router-view />
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
  background: #ada996; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
    #ada996
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
    #ada996
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 100vh;
  animation: background 40s ease infinite;
}

@keyframes background {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
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
