<template>
    <div class="container flex items-center" aria-labelledby="testimonials">
        <span class="flex items-center justify-center m-0 overflow-hidden" v-for="panel in panels" :key="panel.id"
            :class="{ 'rounded-md panel': true, 'active': activePanel === panel.id }"
            :style="`background-image: url('${panel.image}')`" @click="setActivePanel(panel.id)">
            <section class="flex flex-col">
                <div class="user">
                    <img id="testimonial-image" :src="panel.userImage" alt="picture of user"
                        class="top-0 left-0 user-image rounded-4xl p-14">
                </div>
                <div class="quote-container">
                    <div class="fas fa-quote-right fa-quote" />
                    <p class="relative p-2 text-black testimonials">{{ panel.testimonial }}</p>
                    <div class="fas fa-quote-left fa-quote" />
                </div>
            </section>
            <span class="mb-14 text-container">
                <h3 id="name" :title="panel.name">{{ panel.name }}</h3>
            </span>
            <span class="text-container">
                <p class="text-white" :title="panel.profession">{{ panel.profession }}</p>
            </span>
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const panels = ref([
    { id: 0, profession: "Educational Data Analyst", image: "/assets/topography.svg", testimonial: "Donec sit amet pretium nulla, id sagittis." },
    { id: 1, profession: "Special Education Coordinator", image: "/assets/bubbles.svg", testimonial: "In ultrices vitae justo a finibus." },
    { id: 2, profession: "District Assessment Coordinator", image: "/assets/topography.svg", testimonial: "ultrices vitae facilisis leo facilisis leo." },
    { id: 3, profession: "School Technology Integration Specialist", image: "/assets/bubbles.svg", testimonial: "Phasellus ultrices vitae mattis." },
    { id: 4, profession: "Student Counselor", image: "/assets/topography.svg", testimonial: "testtesttesttesttesttesttesttesttest" },
]);
const activePanel = ref(panels.value.length > 0 ? panels.value[0]?.id : null);
const setActivePanel = (id) => {
    if (activePanel.value === id) {
        activePanel.value = null;
    } else {
        activePanel.value = id;
    }
}

async function getRandomUser() {
    const res = await fetch(`https://randomuser.me/api/?results=${panels.value.length}`);
    const { results } = await res.json();

    results.forEach((user, index) => {
        panels.value[index].userImage = user.picture.large;
        panels.value[index].name = `${user.name.first} ${user.name.last}`;
    });
}
getRandomUser();
</script>

<style lang="scss" scoped>
.container {
    min-width: 80vw;
    min-height: 70vh;
}

.text-container {
    position: absolute;
    bottom: 5%;
    left: 10px;
    display: flex;
    flex-direction: column;
    max-width: 90%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.2s ease-in 0s;
}

.panel {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 82.5vh;
    flex: 1;
    margin: 10px;
    position: relative;
    border: 1px solid #323131;

    &:hover {
        cursor: pointer;
        border: 1px solid var(--text-primary-color);
        background-color: whitesmoke;
        transition: border 0.2s ease-in;
    }
}

.panel h3 {
    font-size: 1.25rem;
    opacity: 0;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    transition: flex 0.2s ease-in 0s;
}

.panel p {
    font-size: 1rem;
    margin: 0;
    opacity: 0;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    transition: flex 0.2s ease-in 0s;

    .transition-element {
        opacity: 0;
        transition: opacity 0.3s ease-in 0.4s; // Define the transition here
    }
}

.panel.active {
    flex: 3;
    width: 100vw;
}

.panel.active .text-container h3,
.panel.active .text-container p {
    opacity: 1;
    transition: opacity 0.3s ease-in-out 0.4s;
}


.panel.active .fa-quote-left,
.panel.active .fa-quote-right,
.panel.active .user,
.panel.active .testimonials {
    opacity: 1;
    transition: opacity 0.3s ease-in 0.4s;
}


.panel .fa-quote-left,
.panel .fa-quote-right,
.panel .user,
.panel .testimonials,
.panel .text-container {
    opacity: 0;
}

.panel.active .text-container {
    opacity: 1;
    color: #000000;
    transition: opacity 0.3s ease-in-out 0.4s;
}

.user {
    color: rgba(0, 0, 0, 0.6);
    font-size: 2rem;
    position: relative;
    top: -100px;
    padding: 0.25rem;
}

.user-image {
    border-radius: 20%;
}

.quote-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.fa-quote {
    font-size: 3rem;
    position: relative;
    top: -70px;
    color: rgba(0, 0, 0, 0.6);
}

.testimonials {
    flex: 1;
    padding: 1rem 1rem;
    text-align: center;
    bottom: 33px;
}

.fa-quote-left {
    top: 5px;
    left: -60px;
}

.fa-quote-right {
    right: -60px;
}

@media(max-width: 720px) {
    .container {
        min-width: 100vw;
    }

    .panel:nth-of-type(3),
    .panel:nth-of-type(4) {
        display: none;
    }

}
</style>