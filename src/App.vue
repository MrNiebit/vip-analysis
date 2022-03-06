<template>
  <div id="app" style="width: 100%; height: 100%">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
    width: 750px;
    margin: 0 auto 50px;
}
@media only screen and (max-width: 640px){
  .hello{
      width: 100%;
  }
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

</style>
