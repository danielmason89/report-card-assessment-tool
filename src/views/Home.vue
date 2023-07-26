<template>
  <div class="min-h-screen overflow-hidden content top-1/3">
    <header class="inset-0 hero content bg-gradient-to-b bottom-3/4 from-accent to-transparent">
      <div class="container inset-0 hero-text ">
        <section>
          <h1 class="mt-4 text-5xl tracking-wide font-logoText drop-shadow-text-sm lg:drop-shadow-text-lg">Assessify</h1>
          <hr />
          <h2 class="font-medium tracking-small drop-shadow-text-sm lg:drop-shadow-text-lg">
            Your Report Card. <br />
            Digitalization Solution.
          </h2>
        </section>
        <section class="grid-container">
          <article id="featured">
            <img class="object-cover w-full hero-img" src="/assets/group.png" alt="landing-page-logo"
              aria-label="Assessify Logo/Home" />
            <button title="Quiz" @click="startQuiz()"
              class="flex items-center px-8 py-3 space-x-2 font-bold tracking-wide uppercase transition-shadow border rounded-full branding bg-muted text-bkg border-bkg focus:outline-none focus-visible:ring-4 ring-accent ring-offset-bkg ring-offset-2 hover:bg-accent/90 active:bg-accent/50 hover:drop-shadow-none">
              Get started Today
            </button>
          </article>
        </section>
      </div>
    </header>
    <main class="relative grid gap-16 pb-16 mt-16 -mb-16 overflow-hidden text-base sm:mt-24 lg:mt-10 sm:gap-24 lg:gap-20">
      <section class="container grid min-h-full gap-4 text-center max-w-prose" aria-label="headline">
        <div>
          <small class="tracking-widest uppercase text-accent drop-shadow-text-sm">Industry-Grade Assessment Tooling.
          </small>
          <h2 id="headline" class="text-3xl font-bold tracking-wide drop-shadow-text-md">Digital Solution for Today's
            Digital Organizations</h2>
        </div>
        <p class="text-muted drop-shadow-text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
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
            <p class="pb-4 text-muted md:max-w-xl drop-shadow-text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Esse adipisci
              molestiae,
              quia possimus illum excepturi facere autem similique?
              Velit pariatur exercitationem eum optio aliquam veritatis ducimus repudiandae eveniet. Rem dolorum expedita
              quas tempore! Maxime,
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
      <div class="container -mt-10 sm:-mt-20 lg:-mt-46 xs:w-90">
        <Carousel ref="carouselRef" class="flex transition-transform duration-500 carousel" v-slot="{ currentSlide }">
          <Slide v-show="currentSlide === id + 1" v-for="(slide, id) in carouselSlides" :key="id" :index="id"
            :image="slide.image" :title="slide.title"
            class="relative flex-grow flex-shrink-0 w-full slide-info xs:w-auto xs:basis-96">
            <img loading="lazy"
              class="carousel-image rounded-md object-cover h-full [@media(hover:hover)]:grayscale-0 hover:grayscale-50 transition-all peer"
              :src="slide.image" alt="slide.title" />
            <p
              class="absolute bottom-4 py-2 px-4 left-4 bg-bkg text-muted font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-100 peer-hover:opacity-0 transition-opacity">
              {{ slide.title }}</p>
          </Slide>
        </Carousel>
      </div>
      <section aria-labelledby="info"
        class="container flex flex-wrap items-start justify-between md:flex-nowrap md:space-y-0 ">
        <article class="grid gap-4 pb-4 text-center md:text-left grow md:flex-1">
          <div class="relative">
            <div class="absolute hidden w-8 h-full md:block bg-accent/10 -left-4"></div>
            <h2 id="info" class="text-3xl font-bold tracking-wide">
              Hello <br /> there
            </h2>
            <small class="tracking-widest uppercase text-accent">
              Hello
            </small>
          </div>
          <p class="max-w-2xl text-muted drop-shadow-text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, in minus labore rerum esse doloribus ullam
            aspernatur voluptates, aliquam similique cupiditate ipsa laudantium cum dignissimos!
          </p>
        </article>
        <img src="/assets/pexels-august-de-richelieu-4260325-min.jpg" alt="a mentor and their mentee" width="100"
          class="rounded-md grow md:flex-1 md:order-1 w-fit h-fit lg:items-center" loading="lazy" />
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
import { useRouter } from 'vue-router';

const router = useRouter();
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

let startQuiz = () => {
  router.push({ path: '/quiz' });
};

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
  height: 100vh;
  object-fit: fill;
  padding-top: 5rem;

  .hero-img {
    position: relative;
    border-radius: 35%;
    padding: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    zoom: .65;
    border: 5px solid rgb(23, 25, 26);
    background-color: rgb(42, 104, 132);

    @media (min-width: 1200px) {
      object-fit: fit;
      border-radius: 25%;
      margin-left: 2rem;
      margin-right: 2rem;
      zoom: .65;
    }
  }

  button {
    transition: background-color 0.3s, box-shadow 0.3s;
    color: var(--text-primary-color);

    &:active {
      transform: translateY(1px);
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
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero-text {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    padding: 0 3rem;
    padding-top: 8rem;


    h1 {
      text-transform: uppercase;
      font-size: 2.5rem;
      padding-bottom: 4px;
      margin-top: -8.75rem;

    }

    h2 {
      font-size: 1.5rem;

      @media (min-width: 550px) {
        font-size: 2.5rem;
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

  .hero .hero-text {
    display: flex;
    flex-direction: column;
    padding-top: 14.5rem;
    font-size: 3rem;
  }

  #featured {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


}

@media (max-width: 0px) {
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

  .hero-img {
    display: flex;
    position: relative;
    border-radius: 35%;
    padding: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    zoom: .65;
    border: 5px solid rgb(23, 25, 26);
    background-color: rgb(42, 104, 132);
  }
}

.carousel-image {

  @media (min-width: 700px) {
    display: flex;
    align-self: center;
    width: 90vw;
    height: 65vh;
    object-fit: cover;
    object-position: center;
    align-items: center;
  }
}

@media (min-width: 768px) {
  section[aria-labelledby="info"] {
    article {
      margin: -1rem 2rem;
    }

    img {
      width: 25vw;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
</style>
