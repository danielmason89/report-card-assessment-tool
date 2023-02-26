<template>
  <div class="app">
    <Navigation/>
    <Footer/>
    
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view> 
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { Navigation, Footer }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,300;1,400;1,700&family=Sevillana&display=swap');
@import ".././src/styles/index.scss";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 16px;
}

html,body{
  height: 100%;
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

/* Route Animations */

.route-enter-from {
  opacity: 0;
  transform: translateX(0px); 
}

.route-enter-active {
  transition: all 0.5s ease;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.5s ease-in;
}
</style>
