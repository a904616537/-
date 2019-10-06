<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
body {
  margin: 0;
}
.input-style {
  width: 100%;
  line-height: 30px;
  padding: 5px 10px;
  margin: 10px 0;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
  -webkit-appearance:none;
  outline: none;
  border: none;
}
</style>
