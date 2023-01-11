<template>
  <!-- <Header/> -->
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">Parent</router-link>
    <router-link :to="{ name: 'TeacherClasslist' }">Teacher</router-link>
  </nav>
  <!-- <button @click="redirect">Redirect</button>
  <button @click="back">Go Back</button>
  <button @click="forward">Go Forward</button> -->
  <router-view/> 
</template>



<script>
// import Header from "././components/Header"

export default {
  name: "",
  components: {},
  methods: {
    // redirect(){
    //   this.$router.push({ name: "Home"})
    // },
    // back(){
    //   this.$router.go(-1)
    // },
    // forward(){
    //   this.$router.go(1)
    // }
  }
}
</script>

<style>
body{ 
  background: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #555;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  background: crimson;
  color: white;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background: #ddd;
}
</style>
