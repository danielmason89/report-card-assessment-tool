<template class="body">
    <main class="faq-container">
        <h1 class="pt-20">Frequently Asked Questions</h1>
        <div v-for="(faq, index) in faqs" :key="index" :class="['faq', { active: faq.active }]" @click="toggleFaq(index)">
            <h3 class="faq-title">{{ faq.title }}</h3>
            <p class="faq-text">{{ faq.text }}</p>
            <button class="faq-toggle" @click.stop="toggleFaq(index)">
                <i class="material-icons faq-expand-more">expand_more</i>
                <i class="material-icons faq-times">close</i>
            </button>
        </div>
    </main>
</template>

<script setup>
import { reactive } from 'vue';

const faqs = reactive([
    { title: "Is Assessify a project for my organization?", text: "Yes, though the implementation will be different depending on your organization.", active: false },
    { title: "Why shouldn't I trust atoms?", text: "They make up everything.", active: false },
]);

function toggleFaq(index) {
    faqs[index].active = !faqs[index].active;
}
</script>

<style lang="scss" scoped>
h1 {
    min-height: 10vh;
    overflow: hidden;
    margin: 0;
    text-align: center;
    margin: 50px 0 30px;
    font-size: 2rem;
    font-weight: bold;
    color: var(--text-primary-color);
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    overflow: hidden;
    margin: 0;
    color: var(--text-primary-color);
    background-color: var(--bg-primary-color);
}

.faq-container {
    max-width: 600px;
    margin: 0 auto;

    h3 {
        font-size: 1.2rem;
        font-weight: bold;
        margin: 0;
    }
}

.faq {
    background-color: transparent;
    border: 1px solid var(--text-primary-color);
    border-radius: 5px;
    margin: 20px 0;
    padding: 30px;
    position: relative;
    overflow: hidden;
    width: 100%;
    transition: 0.3s ease;
}

.faq.active {
    background: #cac2c2;
    box-shadow: 0 8px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}

.faq.active::before,
.faq.active::after {
    content: '\f075';
    font-family: 'Font Awesome 5 Free';
    color: var(--text-primary-color);
    font-weight: 900;
    font-size: 7rem;
    position: absolute;
    opacity: 0.2;
    top: 20px;
    left: 20px;
    z-index: 0;
}

.faq.active::before {
    color: black;
    top: -10px;
    left: -30px;
    transform: rotateY(180deg);
}

.faq-title {
    margin: 0 35px 0;
}

.faq-text {
    margin: 30px 0 0;
    display: none;
}

.faq.active .faq-text {
    display: block;
}

.faq-toggle {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 1;
}

.faq-toggle:focus {
    outline: none;
}

.faq-toggle .faq-times {
    display: none;
}

.faq.active .faq-toggle .faq-times {
    display: block;
}

.faq-expand-more:hover {
    background-color: #bdc2c6;
    border-radius: 50%;
}

.faq.active .faq-toggle .faq-expand-more {
    display: none;
}

.faq.active .faq-toggle {
    background-color: #9fa4a8;
}
</style>