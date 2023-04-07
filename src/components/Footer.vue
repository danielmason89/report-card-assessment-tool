<template>
  <footer class="border-t border-accent mt-10 sm:mt-24 lg:mt-5 py-1 sm:py-8 md:py-1">
    <div class="container flex flex-wrap md:justify-between items-center md:items-start gap-12 md:gap-4 sm:gap-4">
      <div class="grid gap-2 sm:gap-1 grow justify-items-center md:justify-items-start basis-full md:basis-1/4">
        <router-link :to="{ name: 'Home' }" title="Home" class="branding">
          <img class="w-12 sm:w-12 lg:w-12 hero-img rounded-full" src="/assets/logo.png" alt="landing-page-logo"
            aria-label="Assessify Logo/Home" />
          <span class="pr-2 pl-1 ml-0 tracking-wide navigation font-logoText drop-shadow-text-sm">Assessify</span>
        </router-link>
        <p class="text-muted text-sm text-center md:text-left">We curate unique assessment solution<br />for modern global
          organizations.</p>
      </div>
      <nav aria-label="Footer navigation"
        class="text-sm flex flex-col items-center sm:items-start sm:flex-row text-center sm:text-left gap-6 sm:gap-1 justify-between md:justify-around grow basis-full md:basis-1/2 mt-2">
        <div class="grid gap-3">
          <p class="font-bold underline decoration-accent decoration-4 underline-offset-2 tracking-wide px-0">About Us</p>
          <ul aria-label="About Assessify">
            <li>
              <router-link
                class="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-0 ring-accent rounded-full"
                :to="{ name: 'About' }" title="About Us">Our Story</router-link>
            </li>
            <li>
              <router-link
                class="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-0 ring-accent rounded-full"
                :to="{ name: 'About' }" title="About Us">Press</router-link>
            </li>
            <li>
              <router-link
                class="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-0 ring-accent rounded-full"
                :to="{ name: 'About' }" title="About Us">News</router-link>
            </li>
          </ul>
        </div>
        <div class="grid gap-3">
          <p class="font-bold underline decoration-accent decoration-4 underline-offset-2 tracking-wide px-0">Locations
          </p>
          <ul aria-label="Assessify's Office Locations">
            <li>
              <p class="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-0 ring-accent rounded-full"
                title="North America">North America</p>
            </li>
            <li>
              <p class="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-0 ring-accent rounded-full"
                title="Central Europe">Central Europe</p>
            </li>
            <li>
              <p class="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-0 ring-accent rounded-full"
                title="South Korea">South Korea</p>
            </li>
          </ul>
        </div>
        <div class="grid gap-3">
          <p class="font-bold underline decoration-accent decoration-4 underline-offset-2 tracking-wide px-0">Contact Us
          </p>
          <ul aria-label="Contact Assessify">
            <li>
              <a href="#"
                class="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-0 ring-accent rounded-full">
                {{ mail }}</a>
            </li>
            <li>
              <p
                class="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-0 ring-accent rounded-full">
                {{ phone }}</p>
            </li>
            <li>
              <a href="#"
                class="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-0 ring-accent rounded-full">
                Instagram
              </a>
            </li>
            <li>
              <a href="#"
                class="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-0 ring-accent rounded-full">
                Facebook
              </a>
            </li>
            <li>
              <a href="#"
                class="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-0 ring-accent rounded-full">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </nav>

    </div>
    <div id="mentions" class="copyright">
      <p>{{ mention }}</p>
    </div>

  </footer>
</template>

<script setup>
import { ref } from 'vue';

const mail = ref('Email | info@assessify.com');
const phone = ref('Phone | 06.00.00.00.00');
const mention = ref('Copyright Assessify - 2023 | All rights reserved');
</script>

<style>
footer {
  width: 100%;
  background-color: rgba(0, 0, 0);
  /* color: white; */
  position: sticky;
  left: 0;
  bottom: 0;
  color: white;
  text-align: center;
}

.copyright {
  color: rgb(178, 162, 162);
}


.branding {
  display: flex;
  align-items: center;
}

#contacts--social {
  width: 20%;
  display: flex;
  justify-content: space-between;
}

#contacts--social div {
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: 50%;
}

#mentions p {
  font-size: 0.5em;
}
</style>