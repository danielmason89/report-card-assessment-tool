<template>
  <div class="content">
      <section class="hero content">
        <div class="container hero-text">
          <header>
            <h4 class="mt-4 font-logoText">Report Card Tool</h4>
            <hr />
            <h2>
              Capstone <br />
              Project
            </h2>
          </header>
          <main class="grid-container">
            <article id="featured">
              <img class="object-cover w-full" src="../assets/graduation.jpg" alt="landing-page-logo"/> 
              <h4>Author</h4>
              <p>quote</p>
            </article>
          </main>
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
  object-fit: fill;
  padding-top: 15rem;
  

  img {
    object-fit: fit;
    position: relative;
    height: 50vhh;
    width: 30vw;
    border-radius: 50%;
    margin: 2rem;
    zoom: .5;
    border: 5px solid rgb(42, 104, 132);
    overflow: hidden;
    @media (max-width: 1200px) {
    object-fit: fit;
    height: 28vh;
    width: 25vw;
    border-radius: 50%;
    margin-left: 2rem;
    margin-right: 2rem;
    zoom: .5;
  }
  }

  #featured {
    text-align: center;
    margin-top: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
      margin-top: .5rem;
    }

    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 5rem;
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

@media (max-width: 750px) {
  .hero{
  padding-top: 15rem;
  }  
  .hero .hero-text{ 
      display: flex;
      flex-direction: column;}

  img{
   display: none;
  }

  #featured{
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
}

@media (max-width: 400px) {
  .hero{
  padding-top: 10rem;
  }  
  .hero .hero-text{ 
      display: flex;
      flex-direction: column;}

 .hero img{
  overflow: hidden;
   width: 35vw;
   height: 50vh;
   border-radius: 50%;
   object-fit: fit;
   border: 4px solid rgb(42, 104, 132);
  }
  
}
  
</style>
