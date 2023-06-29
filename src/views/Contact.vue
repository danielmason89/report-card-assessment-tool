<template>
    <main class="antialiased bg-gray-100">
        <div class="flex items-center justify-center">
            <div
                class="flex flex-col w-full max-w-4xl p-8 space-y-6 overflow-hidden text-white bg-black shadow-lg rounded-xl md:flex-row md:space-x-6 md:space-y-0 sm:p-12">
                <div class="flex flex-col justify-between space-y-8">
                    <header>
                        <h1 class="text-2xl font-bold tracking-wide text-center md:text-left">Contact Us</h1>
                        <p class="pt-2 text-center sm:text-sm md:text-left">Feel free to contact us with any questions or
                            concerns.</p>
                    </header>
                    <section class="flex flex-col space-y-6">
                        <div class="inline-flex items-center space-x-2">
                            <font-awesome-icon class="items-start justify-between pr-2 text-xl font-awesome-icon max-w-fit"
                                icon="phone" />
                            <span class="font-awesome-icon">555-555-5555</span>
                        </div>
                        <div class="inline-flex items-center space-x-2">
                            <font-awesome-icon class="items-start justify-between pr-2 text-xl font-awesome-icon max-w-fit"
                                icon="envelope" />
                            <span class="font-awesome-icon">info@reportcardsoftware.com</span>
                        </div>
                        <div class="inline-flex items-center space-x-2">
                            <font-awesome-icon class="items-start justify-between pr-2 text-xl font-awesome-icon max-w-fit"
                                icon="location-dot" />
                            <span class="font-awesome-icon">123 Lisgar St, Ontario, Canada</span>
                        </div>
                    </section>
                    <section class="flex space-x-4 text-lg">
                        <a href="https://www.twitter.com/" target=”_blank”>
                            <font-awesome-icon class="text-xl text-dark" :icon="['fab', 'twitter']" />
                        </a>
                        <a href="https://www.linkedin.com/" target=”_blank”>
                            <font-awesome-icon class="text-xl text-white" :icon="['fab', 'linkedin']" />
                        </a>
                        <a href="https://www.instagram.com/" target=”_blank”>
                            <font-awesome-icon class="text-xl text-accent" :icon="['fab', 'instagram']" />
                        </a>
                        <a href="https://www.facebook.com/" target=”_blank”>
                            <font-awesome-icon class="text-xl text-dark" :icon="['fab', 'facebook']" />
                        </a>
                    </section>
                </div>
                <span class="relative">
                    <span class="absolute z-0 w-40 h-40 rounded-full circles -right-28 -top-28"></span>
                    <span class="absolute z-0 w-40 h-40 rounded-full circles -left-28 -bottom-20"></span>
                    <section class="relative z-10 p-8 text-gray-600 bg-white shadow-lg rounded-xl md:w-70">
                        <form action="" class="flex flex-col space-y-4">
                            <div>
                                <label for="name" class="text-sm font-bold font-awesome-icon">Your Name</label>
                                <input type="text" placeholder="Your Name"
                                    class="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-accent">
                            </div>
                            <div>
                                <label for="name" class="text-sm font-bold font-awesome-icon">Email Address</label>
                                <input type="email" multiple placeholder="Your Email Address"
                                    class="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-accent">
                            </div>
                            <div>
                                <label for="name" class="text-sm font-bold font-awesome-icon">Message</label>
                                <textarea rows="4" maxlength="100" minlength="50" placeholder="Your Name"
                                    class="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-accent"></textarea>
                            </div>
                            <button
                                class="self-center inline-block px-6 py-2 text-sm font-bold text-white rounded-lg md:self-start bg-accent">Submit
                                Message</button>
                        </form>
                    </section>
                </span>
            </div>
        </div>
        <section></section>
    </main>
</template>
  
<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>
  
<style lang="scss" scoped>
main {
    padding: 10rem 2.5rem;
    padding-bottom: 3rem;
    min-height: 75vh;
}

h1 {
    color: var(--text-primary-color);
}

p {
    color: var(--text-primary-color);
}

.font-awesome-icon {
    color: var(--text-primary-color);
}

.circles {
    background-color: var(--text-primary-color);
}

button {
    background-color: var(--background-color-primary);
    color: var(--text-primary-color);
    transition: background-color 0.3s, box-shadow 0.3s;

    &:hover {
        background-color: var(--background-color-secondary);
        box-shadow: 0 0 0 2px var(--background-color-primary);
    }

    &:active {
        transform: translateY(1px);
    }
}
</style>
  