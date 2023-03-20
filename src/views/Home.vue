<template>
  <div class="content top-1/3 overflow-hidden min-h-screen">
    <header class="hero content bg-gradient-to-b inset-0 bottom-3/4 from-accent to-transparent">
      <div class="container hero-text inset-0 ">
        <section>
          <h1 class="mt-4 font-logoText text-5xl tracking-wide drop-shadow-text-sm lg:drop-shadow-text-lg">Assessify</h1>
          <hr />
          <h2 class="font-medium tracking-small drop-shadow-text-sm lg:drop-shadow-text-lg">
            Your Report Card. <br />
            Solution.
          </h2>
        </section>
        <section class="grid-container">
          <article id="featured">
            <img class="object-cover w-full hero-img" src="../assets/graduation.jpg" alt="landing-page-logo" />
            <router-link :to="{ name: 'Assessment' }" title="Assessment"
              class="branding bg-accent text-bkg font-medium py-3 px-8 rounded-full border border-bkg focus:outline-none focus-visible:ring-4 ring-accent ring-offset-bkg ring-offset-2 hover:bg-accent/90 active:bg-accent/50 flex space-x-2 hover:drop-shadow-none transition-shadow items-center ">
              <span class="uppercase tracking-wide font-bold">Get started Today</span>
            </router-link>
          </article>
        </section>
      </div>
    </header>
    <main class="relative text-base mt-16 sm:mt-24 lg:mt-40 pb-16 -mb-16 grid gap-16 sm:gap-24 lg:gap-40 overflow-hidden">
      <section class="container grid gap-4 text-center max-w-prose min-h-full" aria-label="headline">
        <div>
          <small class="tracking-widest text-accent uppercase drop-shadow-text-sm">Industry-Grade Assessment Tooling
          </small>
          <h2 id="headline" class="text-3xl font-bold tracking-wide drop-shadow-text-md">Digital Solution for Today's
            Digital Organizations</h2>
        </div>
        <p class="text-muted drop-shadow-text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis amet
          alias necessitatibus saepe iure laudantium temporibus quasi earum recusandae odit. Esse adipisci molestiae,
          quia possimus illum excepturi facere autem similique?
          Debitis alias, quisquam numquam odio obcaecati ut voluptate. Perferendis, rerum magnam aliquam dolores nemo
          praesentium excepturi ea. Eligendi amet dicta et, praesentium adipisci deserunt enim quae cupiditate
          exercitationem est veritatis.
          Velit pariatur exercitationem eum optio aliquam veritatis ducimus repudiandae eveniet. Omnis magni, quis id
          aliquam, molestiae a, rerum odit rem assumenda est amet! Rem dolorum expedita quas tempore! Maxime,
          consequuntur.
          Corrupti recusandae hic officia. Nostrum repellendus dolorum ut culpa nobis voluptate atque nihil! Error nam,
          dignissimos sunt consectetur alias exercitationem ipsum nesciunt eius, magnam et iusto quo fugiat, repellat
          architecto.</p>
      </section>
      <section class="container grid gap-4 text-center lg:text-left min-h-full" aria-label="slider">
        <div class="relative">
          <div class="hidden lg:block absolute w-8 bg-accent/10 -left-4 h-full"></div>
          <div>
            <small class="tracking-widest text-accent uppercase drop-shadow-text-sm">Assessment Toolings for Modern
              Organizations</small>
            <h2 id="slider" class="text-3xl font-bold tracking-wide drop-shadow-text-md">Get back Time for Better
              Relationships</h2>
          </div>
          <div class="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center space-x-4 space-y-4">
            <p class="text-muted md:max-w-xl drop-shadow-text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing
              elit.
              Quis amet
              alias necessitatibus saepe iure laudantium temporibus quasi earum recusandae odit. Esse adipisci
              molestiae,
              quia possimus illum excepturi facere autem similique?
              Debitis alias, quisquam numquam odio obcaecati ut voluptate. Perferendis, rerum magnam aliquam dolores
              nemo
              praesentium excepturi ea. Eligendi amet dicta et, praesentium adipisci deserunt enim quae cupiditate
              exercitationem est veritatis.
              Velit pariatur exercitationem eum optio aliquam veritatis ducimus repudiandae eveniet. Omnis magni, quis
              id
              aliquam, molestiae a, rerum odit rem assumenda est amet! Rem dolorum expedita quas tempore! Maxime,
              consequuntur.</p>
            <div class="flex space-x-10">
              <button data-slideBtn id="prev" aria-label="show previous image"
                class="grid place-items-center bg-accent hover:bg-dark/90 text-bkg rounded-full p-2 focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-dark disabled:bg-accent/20 disabled:text-accent"
                disabled>
                <PhArrowCircleLeft class="pointer-events-none" />
              </button>
              <button data-slideBtn id="next" aria-label="show next image"
                class="grid place-items-center bg-accent hover:bg-dark/90 text-bkg rounded-full p-2 focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-dark disabled:bg-accent/20 disabled:text-accent">
                <PhArrowCircleRight class="pointer-events-none" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div class="-mt-10 sm:-mt-20 lg:-mt-36 container xs:w-screen">
        <div class="flex transition-transform duration-500" data-slideContainer>
          <div class="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4" data-slide>
            <img class="object-cover h-full [@media(hover:hover)]:grayscale-0 hover:grayscale-50 transition-all peer"
              src="../assets/pexels-mart-production-8472879-min.jpg" alt="Teacher & Student" />
            <p
              class="absolute bottom-4 py-2 px-4 left-4 bg-bkg text-muted font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-100 peer-hover:opacity-0 transition-opacity">
              Professor/Student</p>
          </div>
          <div class="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4" data-slide>
            <img class="object-cover h-full [@media(hover:hover)]:grayscale-0 hover:grayscale-50 transition-all peer"
              src="../assets/pexels-august-de-richelieu-4260325-min.jpg" alt="Teacher & Student" />
            <p
              class="absolute bottom-4 py-2 px-4 left-4 bg-bkg text-muted font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-100 peer-hover:opacity-0 transition-opacity">
              Parent/Child</p>
          </div>
          <div class="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4" data-slide>
            <img class="object-cover h-full [@media(hover:hover)]:grayscale-0 hover:grayscale-50 transition-all peer"
              src="../assets/pexels-kampus-production-5940713-min.jpg" alt="Teacher & Student" />
            <p
              class="absolute bottom-4 py-2 px-4 left-4 bg-bkg text-muted font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-100 peer-hover:opacity-0 transition-opacity">
              Manager/Assistant</p>
          </div>
          <div class="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4" data-slide>
            <img class="object-cover h-full [@media(hover:hover)]:grayscale-0 hover:grayscale-50 transition-all peer"
              src="../assets/pexels-ketut-subiyanto-4308096-min.jpg" alt="Teacher & Student" />
            <p
              class="absolute bottom-4 py-2 px-4 left-4 bg-bkg text-muted font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-100 peer-hover:opacity-0 transition-opacity">
              Lead Dev./Developer</p>
          </div>
          <div class="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4" data-slide>
            <img class="object-cover h-full [@media(hover:hover)]:grayscale-0 hover:grayscale-50 transition-all peer"
              src="../assets/pexels-karolina-grabowska-7692549-min.jpg" alt="Teacher & Student" />
            <p
              class="absolute bottom-4 py-2 px-4 left-4 bg-bkg text-muted font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-100 peer-hover:opacity-0 transition-opacity">
              Teacher/Child</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { PhArrowCircleLeft, PhArrowCircleRight } from "@phosphor-icons/vue"
import { ref, provide } from "vue";

provide("color", "#171819")
provide("size", 36)
provide("weight", "bold")
provide("mirrored", false)
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("../assets/hero-bg.png");
  background-attachment: fixed;
  position: relative;
  height: 95vh;
  object-fit: fill;
  padding-top: 12.5rem;

  .hero-img {
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

    h1 {
      text-transform: uppercase;
      font-size: 3rem;
      padding-bottom: 4px;
      margin-top: .5rem;
    }

    h2 {
      font-size: 1.5rem;

      @media (min-width: 550px) {
        font-size: 3.5rem;
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

@media (max-width: 1350px) {
  .hero {
    padding-top: 15rem;
  }

  .hero .hero-text {
    display: flex;
    flex-direction: column;
  }

  .hero-img {
    display: none;
  }

  #featured {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

}

@media (max-width: 400px) {
  .hero {
    padding-top: 10rem;
  }

  .hero .hero-text {
    display: flex;
    flex-direction: column;
  }

  .hero .hero-img {
    overflow: hidden;
    width: 35vw;
    height: 40vh;
    border-radius: 50%;
    object-fit: fit;
    border: 4px solid rgb(42, 104, 132);
  }

}
</style>
