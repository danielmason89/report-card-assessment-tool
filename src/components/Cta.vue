<template>
    <section aria-labelledby="cta" class="container grid gap-4 text-center max-w-prose">
        <div>
            <small class="tracking-widest uppercase text-accent">
                It's time to explore, the future of assessment.
            </small>
            <h2 id="cta" class="text-3xl font-bold tracking-wide">
                Assessify.<br /> The professional assessment solution.
            </h2>
        </div>
        <p class="max-w-2xl mx-auto text-muted drop-shadow-text-sm">
            Not sure what you need?, or where to start?<br /> We can help you find the right solution for your organization.
            <br /> Drop us a line, and we'll send you the information to help you get started.
        </p>
        <form @submit.prevent id="contact-form"
            class="flex items-center justify-between max-w-md p-1 mx-auto border-4 rounded-full bordder-accent">
            <input type="email" id="email" required placeholder="Email Address"
                class="flex-1 w-full p-2 mx-4 text-sm bg-transparent border-b-2 border-transparent rounded-none caret-accent placeholder:text-black focus:placeholder:text-muted focus:outline-none focus:border-accent">
            <label class="sr-only" for="email">Enter your email address</label>
            <button
                class="flex px-8 py-3 space-x-2 font-medium border rounded-full shrink-0 bg-accent text-bkg border-bkg focus:outline-none focus-visible:ring-4 ring-accent ring-offset-bkg ring-offset-2 hover:bg-accent/90 active:bg-accent/50 hover:drop-shadow-none "
                id="contact-btn"><span class="font-bold tracking-wide uppercase">Signup</span>
                <PhPaperPlaneTilt height="24" width="24" class="pointer-events-none" />
            </button>
        </form>
    </section>
</template>

<script setup>
import { PhPaperPlaneTilt } from "@phosphor-icons/vue";

</script>

<style lang="scss" scoped></style>
