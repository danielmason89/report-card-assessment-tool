<template>
  <div class="min-h-screen overflow-hidden content top-1/3">
    <header class="inset-0 hero content bg-gradient-to-b bottom-3/4 from-accent to-transparent">
      <div class="container inset-0 hero-text ">
        <section>
          <h1 class="mt-4 text-5xl tracking-wide font-logoText drop-shadow-text-sm lg:drop-shadow-text-lg">Assessify</h1>
          <hr />
          <h2 class="font-medium tracking-small drop-shadow-text-sm lg:drop-shadow-text-lg">
            Your Report Card. <br />
            Solution.
          </h2>
        </section>
        <section class="grid-container">
          <article id="featured">
            <img class="object-cover w-full hero-img" src="/assets/graduation.jpg" alt="landing-page-logo"
              aria-label="Assessify Logo/Home" />
            <router-link :to="{ name: 'Assessment' }" title="Assessment"
              class="flex items-center px-8 py-3 space-x-2 font-medium transition-shadow border rounded-full branding bg-accent text-bkg border-bkg focus:outline-none focus-visible:ring-4 ring-accent ring-offset-bkg ring-offset-2 hover:bg-accent/90 active:bg-accent/50 hover:drop-shadow-none ">
              <span class="font-bold tracking-wide uppercase">Get started Today</span>
            </router-link>
          </article>
        </section>
      </div>
    </header>
    <main class="relative grid gap-16 pb-16 mt-16 -mb-16 overflow-hidden text-base sm:mt-24 lg:mt-40 sm:gap-24 lg:gap-40">
      <section class="container grid min-h-full gap-4 text-center max-w-prose" aria-label="headline">
        <div>
          <small class="tracking-widest uppercase text-accent drop-shadow-text-sm">Industry-Grade Assessment Tooling.
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
      <section class="container grid min-h-full gap-4 text-center lg:text-left" aria-label="slider-section">
        <div class="relative">
          <div class="absolute hidden w-8 h-full lg:block bg-accent/10 -left-4"></div>
          <div>
            <small class="tracking-widest uppercase text-accent drop-shadow-text-sm">Assessment Toolings for Modern
              Organizations.</small>
            <h2 id="slider" class="text-3xl font-bold tracking-wide drop-shadow-text-md">Get back Time for Better
              Relationships</h2>
          </div>
          <div class="flex flex-wrap items-center justify-center space-x-4 space-y-4 lg:flex-nowrap lg:justify-between">
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
              <button data-slideBtn id="prev" @click="prevSlide" aria-label="show previous image"
                class="grid p-2 rounded-full place-items-center bg-accent hover:bg-dark/90 text-bkg focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-dark disabled:bg-accent/20 disabled:text-accent"
                disabled>
                <PhArrowCircleLeft class="pointer-events-none" />
              </button>
              <button data-slideBtn id="next" @click="nextSlide" aria-label="show next image"
                class="grid p-2 rounded-full place-items-center bg-accent hover:bg-dark/90 hover:rounded-full text-bkg focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-dark disabled:bg-accent/20 disabled:text-accent">
                <PhArrowCircleRight class="pointer-events-none" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div class="container -mt-10 sm:-mt-20 lg:-mt-36 xs:w-screen">
        <Carousel ref="carouselRef" class="carousel flex transition-transform duration-500" v-slot="{ currentSlide }">
          <Slide v-show="currentSlide === id + 1" v-for="(slide, id) in carouselSlides" :key="id" :index="id"
            :image="slide.image" :title="slide.title"
            class="slide-info relative flex-grow flex-shrink-0 w-full xs:w-auto xs:basis-96">
            <img loading="lazy"
              class="carousel-image object-cover h-full [@media(hover:hover)]:grayscale-0 hover:grayscale-50 transition-all peer"
              :src="slide.image" alt="slide.title" />
            <p
              class="absolute bottom-4 py-2 px-4 left-4 bg-bkg text-muted font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-100 peer-hover:opacity-0 transition-opacity">
              {{ slide.title }}</p>
          </Slide>
        </Carousel>
      </div>
      <section aria-labelledby="info"
        class="container flex flex-wrap md:space-x-16 md:space-y-0 justify-between items-center">
        <img src="/assets/pexels-august-de-richelieu-4260325-min.jpg" alt="mentor and mentee" width="400"
          class="grow md:flex-1" loading="lazy" />
        <article class="grid gap-4 text-center md:text-left grow md:flex-1">
          <div class="relative">
            <div class="hidden md:block absolute w-8 bg-accent/10 -left-4 h-full"></div>
            <small class="tracking-widest text-accent uppercase">
              Hello
            </small>
            <h2 id="info" class="text-3xl font-bold tracking-wide">
              Hello <br /> there
            </h2>
          </div>
          <p class="text-muted drop-shadow-text-sm max-w-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, in minus labore rerum esse doloribus ullam
            aspernatur voluptates, aliquam similique cupiditate ipsa laudantium cum dignissimos! Nihil ut quia eum
            numquam.
            At reprehenderit, eius doloremque dolorum commodi deleniti! Eius, maiores? Doloribus quis libero architecto
            delectus, dolore modi corrupti harum cupiditate consectetur repellat ratione eligendi ut adipisci, blanditiis
            nam laborum in officia!
          </p>
        </article>
      </section>
      <Cta />
    </main>
  </div>
</template>

<script setup>
import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";
import Cta from "../components/Cta.vue";
import { PhArrowCircleLeft, PhArrowCircleRight } from "@phosphor-icons/vue";
import { provide, ref } from "vue";

const carouselRef = ref();
const nextSlide = () => carouselRef.value.nextSlide();
const prevSlide = () => carouselRef.value.prevSlide();


const carouselSlides = [{
  id: 1,
  title: "Professor/Student",
  image: "/assets/pexels-mart-production-8472879-min.jpg"
}, {
  id: 2,
  title: "Parent/Child",
  image: "/assets/pexels-august-de-richelieu-4260325-min.jpg"
}, {
  id: 3,
  title: "Manager/Assistant",
  image: "/assets/pexels-kampus-production-5940713-min.jpg"
}, {
  id: 4,
  title: "Mentor/Mentee",
  image: "/assets/pexels-ketut-subiyanto-4308096-min.jpg"
}, {
  id: 5,
  title: "Teacher/Child",
  image: "/assets/pexels-karolina-grabowska-7692549-min.jpg"
}]

provide("color", "#171819")
provide("size", 36)
provide("weight", "bold")
provide("mirrored", false)
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("/assets/hero-bg.png");
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

  .carousel {
    position: relative;
  }

  .slide-info {
    position: absolute;
  }


  #featured {
    text-align: center;
    padding-top: 4.5rem;
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

.carousel-image {

  @media (min-width: 700px) {
    display: flex;
    align-self: center;
    width: 100%;
    height: 65vh;
    object-fit: cover;
    object-position: center;
  }
}
</style>
