<template>
  <footer class="mt-2">
    <div id="container">
    <div id="contacts">
      <div class="contacts--contact">
        <p>{{ mail }}</p>
        <p>{{ phone }}</p>
      </div>
      <div id="contacts--social">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div id="mentions">
      <p>{{ mention }}</p>
    </div>
   </div>
  </footer>
</template>

<script>
export default {
    name: "Footer",
    data(){
    return{
      mail : 'Daniel Mason | email: daniel.mason@withyouwithme.com',
      phone : '06.00.00.00.00',
      mention : 'Copyright Daniel Mason - 2023 | All rights reserved'
    }
  }
}
</script>

<style>
footer {
  width:100%;
  background-color:rgba(0,0,0);
  color:white;
  position: fixed;
  left: 0;
  bottom: 0;
  color: white;
  text-align: center;
  z-index: 100;
  /* opacity:0.8; */
}

#container{
  width:100vw;
  color:white;
  display:flex;
  flex-direction:column;
  align-items:center;
  
}
#contacts{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
.contacts--contact{
  text-align:right;
}
#contacts--social{
  width:20%;
  display : flex;
  justify-content : space-between;
}
#contacts--social div{
  height:30px;
  width:30px;
  background-color:white;
  border-radius:50%;
}
#mentions p {
  font-size:0.5em;
}
</style>