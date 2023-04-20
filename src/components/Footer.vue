<template>
  <footer class="py-1 mt-10 border-t border-accent sm:mt-24 lg:mt-5 sm:py-8 md:py-1">
    <div class="container flex flex-wrap items-center gap-12 md:justify-between md:items-start md:gap-4 sm:gap-4">
      <div class="grid gap-2 sm:gap-1 grow justify-items-center md:justify-items-start basis-full md:basis-1/4">
        <router-link :to="{ name: 'Home' }" title="Home" class="branding">
          <img class="w-12 rounded-full sm:w-12 lg:w-12 hero-img" src="/assets/logo.png" alt="landing-page-logo"
            aria-label="Assessify Logo/Home" />
          <span class="pl-1 pr-2 ml-0 tracking-wide navigation font-logoText drop-shadow-text-sm">Assessify</span>
        </router-link>
        <p class="text-sm text-center text-muted md:text-left">We curate unique assessment solution<br />for modern global
          organizations.</p>
      </div>
      <nav aria-label="Footer navigation"
        class="flex flex-col items-center justify-between gap-6 mt-2 text-sm text-center sm:items-start sm:flex-row sm:text-left sm:gap-1 md:justify-around grow basis-full md:basis-1/2">
        <div class="grid gap-3">
          <p class="px-0 font-bold tracking-wide underline decoration-accent decoration-4 underline-offset-2">About Us</p>
          <ul aria-label="About Assessify">
            <li>
              <router-link
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent"
                :to="{ name: 'About' }" title="About Us">Our Story</router-link>
            </li>
            <li>
              <router-link
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent"
                :to="{ name: 'About' }" title="About Us">Press</router-link>
            </li>
            <li>
              <router-link
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent"
                :to="{ name: 'About' }" title="About Us">News</router-link>
            </li>
          </ul>
        </div>
        <div class="grid gap-3">
          <p class="px-0 font-bold tracking-wide underline decoration-accent decoration-4 underline-offset-2">Locations
          </p>
          <ul aria-label="Assessify's Office Locations">
            <li>
              <p class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent"
                title="North America">North America</p>
            </li>
            <li>
              <p class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent"
                title="Central Europe">Central Europe</p>
            </li>
            <li>
              <p class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent"
                title="South Korea">South Korea</p>
            </li>
          </ul>
        </div>
        <div class="grid gap-3">
          <p class="px-0 font-bold tracking-wide underline decoration-accent decoration-4 underline-offset-2">Contact Us
          </p>
          <ul aria-label="Contact Assessify">
            <li>
              <a href="#"
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent">
                {{ mail }}</a>
            </li>
            <li>
              <p
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent">
                {{ phone }}</p>
            </li>
            <li>
              <a href="#"
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent">
                Instagram
              </a>
            </li>
            <li>
              <a href="#"
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent">
                Facebook
              </a>
            </li>
            <li>
              <a href="#"
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent">
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
  min-height: 10svh;
  padding-top: auto;
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