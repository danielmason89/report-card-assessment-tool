<template>
    <section aria-labelledby="cta" class="container grid h-auto gap-4 text-center">
        <div>
            <small class="font-bold tracking-widest uppercase text-accent text-md">
                It's time to explore, the future of assessment.
            </small>
            <h2 id="cta" class="text-3xl font-bold tracking-wide">
                Assessify.<br /> The professional assessment solution.
            </h2>
        </div>
        <p class="max-w-2xl mx-auto text-black drop-shadow-text-sm">
            Not sure what you need?, or where to start?<br /> We can help you find the right solution for your organization.
            <br /> Drop us a line, and we'll send you the information to help you get started.
        </p>
        <form @submit.prevent="handleFormSubmit" id="contact-form"
            class="flex items-center justify-between max-w-md p-1 mx-auto border-4 rounded-full bordder-accent">
            <input v-if="formState !== 'success'" v-show="formState !== 'pending'" type="email" name="email" id="email"
                v-model.lazy.trim="email" required placeholder="Email Address"
                class="flex-1 w-full p-2 mx-4 text-sm bg-transparent border-b-2 border-transparent rounded-none caret-accent placeholder:text-black focus:placeholder:text-black focus:outline-none focus:border-accent">
            <label class="sr-only" for="email">Enter your email address</label>
            <button type="submit" :disabled="formState === 'pending'" :class="{ pulse: formState === 'pending' }"
                class="flex px-8 py-3 space-x-2 font-medium border rounded-full shrink-0 bg-accent text-bkg border-bkg focus:outline-none focus-visible:ring-4 ring-accent ring-offset-bkg ring-offset-2 hover:bg-accent/90 active:bg-accent/50 hover:drop-shadow-none "
                id="contact-btn">
                <template v-if="formState === 'idle'">
                    <span class="font-bold tracking-wide uppercase">Signup</span>
                    <PhPaperPlaneTilt height="24" width="24" class="pointer-events-none" />
                </template>
                <template v-else-if="formState === 'pending'">
                    <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" width="24" height="24" fill="currentColor"
                        viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"></rect>
                        <line x1="128" y1="32" x2="128" y2="64" fill="none" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="24"></line>
                        <line x1="224" y1="128" x2="192" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="24"></line>
                        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                        <line x1="128" y1="224" x2="128" y2="192" fill="none" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="24"></line>
                        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                        <line x1="32" y1="128" x2="64" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="24"></line>
                        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                    </svg>
                    <span class="tracking-wide uppercase animate-pulse">Sending...</span>
                </template>
                <template v-else-if="formState === 'success'">
                    <span class="tracking-wide uppercase">Thank you!</span>
                    <span class="tracking-wide uppercase">✌️</span>
                </template>
            </button>
        </form>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PhPaperPlaneTilt } from "@phosphor-icons/vue";

let email = ref("");
let contactBtnContent = ref("Signup");
let formState = ref("idle");

const postEmailToDatabase = (email: string) => {
    console.info(`Your email is ${email}`);
    return new Promise(resolve => setTimeout(resolve, 2000));
}

const contactBtnOptions = {
    pending: `
    <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="128" y1="32" x2="128" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="224" y1="128" x2="192" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="195.9" y1="195.9" x2="173.3" y2="173.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="128" y1="224" x2="128" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="60.1" y1="195.9" x2="82.7" y2="173.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="32" y1="128" x2="64" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="60.1" y1="60.1" x2="82.7" y2="82.7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
    <span class="tracking-wide uppercase animate-pulse">
    Sending...
    </span>
  `,
    success: `
  <span class="tracking-wide uppercase">
    Thank you!
    </span>
    <span class="tracking-wide uppercase">
    ✌️
    </span>`,
};

const handleFormSubmit = async (e: Event) => {
    formState.value = "idle";
    formState.value = "pending";
    contactBtnContent.value = contactBtnOptions.pending;
    await postEmailToDatabase(email.value);
    formState.value = "success";
    contactBtnContent.value = contactBtnOptions.success;
    setTimeout(() => {
        formState.value = "idle";
        contactBtnContent.value = "Signup";
        email.value = "";
    }, 1000);
}
</script>

<style lang="scss" scoped>
section {
    margin-bottom: 2.5rem;
}

button {
    transition: background-color 0.3s, box-shadow 0.3s;

    &:active {
        transform: translateY(1px);
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }

    25% {
        transform: scale(1.025);
    }

    50% {
        transform: scale(1.04);
    }

    75% {
        transform: scale(1.025);
    }

    100% {
        transform: scale(1);
    }
}

.pulse {
    animation: pulse 2s infinite;
}
</style>
