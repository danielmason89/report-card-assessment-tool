<template>
  <div class="content">
      <section class="hero content">
        <div class="hero-text container">
          <header>
            <h4>Report Card Tool</h4>
            <hr />
            <h2>
              Capstone <br />
              Project
            </h2>
          </header>
          <img src="../assets/graduation.jpg" alt="dgdfsg" srcset="">
        </div>
      </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>

<style lang="scss" scoped>


.hero {
  background-image: url("../assets/hero-bg.png");
  background-attachment: fixed;
  position: relative;
  height: 100vh;
  padding-top: 15rem;
  

  img {
    object-fit: fit;
    position: relative;
    height: 60vh;
    width: 30vw;
    border-radius: 50%;
    margin-left: 2rem;

    zoom: .5;
    border: 5px solid rgb(42, 104, 132);

    @media (max-width: 1200px) {
    object-fit: fit;
    height: 45vh;
    width: 60vw;
    border-radius: 50%;
    margin-left: 2rem;
    zoom: .5;
      }
  }

  .hero-text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #fff;

    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }

    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
      }

    }
    hr:nth-child(2) {
      max-width: 365px;
      margin-bottom: 16px;
    }

    hr:nth-child(4) {
      height: 6px;
      background-color: #fff;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }

  }
}

@media (max-width: 550px) {
  .hero{
  padding-top: 15rem;
  }  
  .hero .hero-text{ 
      display: flex;
      flex-direction: column;}

  img{
   display: none;
  }
}

@media (max-width: 400px) {
  .hero{
  padding-top: 15rem;
  }  
  .hero .hero-text{ 
      display: flex;
      flex-direction: column;}

 .hero img{
   width: 35vw;
   height: 50vh;
   border-radius: 50%;
   border: 4px solid rgb(42, 104, 132);
  }
}
  
</style>
