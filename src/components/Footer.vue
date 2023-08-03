<template>
  <footer class="py-1 border-t border-accent sm:py-0 sm:pt-3 md:py-0 md:pt-5">
    <div class="container flex flex-wrap items-center gap-12 md:justify-between md:items-start md:gap-4 sm:gap-4">
      <div class="grid gap-2 sm:gap-1 grow justify-items-center md:justify-items-start basis-full md:basis-1/4">
        <router-link :to="{ name: 'Home' }" title="Home"
          class="p-2 m-1 mr-1 transition-shadow rounded-full footer-branding focus:outline-none focus-visible:ring-4">
          <img class="w-10 rounded-full sm:w-12 lg:w-12 hero-img" src="/windows11/StoreLogo.scale-150.png"
            alt="landing-page-logo" aria-label="Assessify Logo/Home" />
          <span
            class="pl-1 pr-2 ml-0 tracking-wide text-accent navigation font-logoText drop-shadow-text-sm">Assessify</span>
        </router-link>
        <p class="text-sm text-center text-muted md:text-left">We curate unique assessment solution<br />for modern global
          organizations.</p>
      </div>
      <nav aria-label="Footer navigation"
        class="flex flex-col items-center justify-between gap-6 mt-2 text-sm text-center sm:items-start sm:flex-row sm:text-left sm:gap-1 md:justify-around grow basis-full md:basis-1/2">
        <div class="grid gap-3">
          <p class="px-0 font-bold tracking-wide decoration-accent decoration-4 -offset-2">About Us</p>
          <ul aria-label="About Assessify">
            <li>
              <router-link
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent"
                :to="{ name: 'About' }" title="About Us">Our Story</router-link>
            </li>
            <li>
              <router-link
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent"
                :to="{ name: 'Contact' }" title="Contact Us">Support</router-link>
            </li>
            <li>
              <router-link
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent"
                :to="{ name: 'About' }" title="About Us">News</router-link>
            </li>
          </ul>
        </div>
        <div class="grid gap-3">
          <a class="px-0 font-bold tracking-wide decoration-accent decoration-4 -offset-2">Locations
          </a>
          <ul aria-label="Assessify's Office Locations">
            <li>
              <router-link
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent"
                :to="{ name: 'Home' }" title="North America">North America</router-link>
            </li>
            <li>
              <router-link
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent"
                :to="{ name: 'Home' }" title="Central Europe">Central Europe</router-link>
            </li>
            <li>
              <router-link
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent"
                :to="{ name: 'Home' }" title="South Korea">South Korea</router-link>
            </li>
            <li>
              <router-link
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent"
                :to="{ name: 'Home' }" title="Vietnam">Vietnam</router-link>
            </li>
            <li>
              <router-link
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent"
                :to="{ name: 'Home' }" title="Japan">Japan</router-link>
            </li>
          </ul>
        </div>
        <div class="grid gap-3">
          <p class="px-0 font-bold tracking-wide decoration-accent decoration-4 -offset-2">Contact Us
          </p>
          <ul aria-label="Contact Assessify">
            <li>
              <a href="mailto:info@assessify.com"
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent">
                {{ mail }}</a>
            </li>
            <li>
              <a href="tel:06.00.00.00.00"
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent">
                {{ phone }}</a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target=”_blank” rel=”noopener”
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target=”_blank” rel=”noopener”
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target=”_blank” rel=”noopener”
                class="px-0 transition-colors rounded-full hover:text-accent focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent">
                Linkedin
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
  left: 0;
  bottom: 0;
  color: var(--text-primary-color);
  text-align: center;
  margin-top: auto;
}

.hero-img {
  background: whitesmoke;
}

.copyright {
  color: rgb(178, 162, 162);
}


.footer-branding {
  padding-top: 0.5rem;
  display: flex;
  align-items: center;

  &:hover {
    transition: 0.2s ease-in all;
    background-color: #2d2d30;
    border-radius: 25px;
  }
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