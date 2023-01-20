<template>
  <div class="app">
    <Navigation/>
    <Footer/>
    <router-view/> 
  </div>
</template>

<script>
import Navigation from "././components/Navigation";
import Footer from "././components/Footer";

export default {
  name: "App",
  components: { Navigation, Footer }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,300;1,400;1,700&family=Sevillana&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}
.app {
  min-height: 100vh;
  position: relative;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
