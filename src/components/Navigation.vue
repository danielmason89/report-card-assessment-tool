<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav role="navigation" aria-label="main navigation" :class="{ 'is-active': showMobileMenu }">
            <router-link :to="{ name: 'Home' }" title="Home" class="branding">
                <img class="p-.5 m-4 mr-1 focus:outline-none focus-visible:ring-4 rounded-full transition-shadow"
                    src="/windows11/StoreLogo.scale-150.png" aria-label="Go Home" alt="Assessify-Logo">
            </router-link>
            <ul v-show="!mobile" class="navigation not-mobile-nav">
                <li><router-link v-show="isAuthenticated" title="Dashboard" class="link"
                        :to="{ name: 'Dashboard' }">Dashboard</router-link></li>
                <li><router-link v-show="isAuthenticated" title="Teacher" class="link"
                        :to="{ name: 'TeacherClasslist' }">Teacher</router-link></li>
                <li><router-link v-show="isAuthenticated" title="Parent" class="link"
                        :to="{ name: 'Parent' }">Parent</router-link></li>
                <li><router-link :to="{ name: 'Contact' }" title="Contact" class="link"><font-awesome-icon
                            icon="address-card" class="fa-icon" aria-hidden="true" />Contact</router-link></li>
                <li><router-link :to="{ name: 'Home' }" title="Home" class="link"><font-awesome-icon icon="home"
                            class="fa-icon" aria-hidden="true" />Home</router-link></li>
            </ul>
            <div class="icon">
                <span class="sr-only">Open main menu</span>
                <a v-if="mobile" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample" :class="{ 'is-active': showMobileMenu }"
                    @click.prevent.stop="toggleMobileMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <transition name="ShowMobileMenu slide">
                <ul v-show="showMobileMenu" class="pt-20 pb-3 pl-6 mb-5 dropdown-nav">

                    <li><router-link :to="{ name: 'Home' }" title="Home" class="link"><font-awesome-icon icon="home"
                                class="fa-icon" aria-label="Home Link" aria-hidden="true" />Home</router-link></li>
                    <li><router-link :to="{ name: 'Contact' }" title="Contact" class="link"><font-awesome-icon
                                icon="address-card" class="fa-icon" aria-hidden="true" />Contact</router-link></li>
                    <li><router-link v-if="isAuthenticated" title="Dashboard" class="link"
                            :to="{ name: 'Dashboard' }">Dashboard</router-link>
                    </li>
                    <li><router-link v-if="isAuthenticated" title="Teacher" class="link"
                            :to="{ name: 'TeacherClasslist' }">Teacher</router-link>
                    </li>
                    <li><router-link v-if="isAuthenticated" title="Parent" class="link"
                            :to="{ name: 'Parent' }">Parent</router-link></li>
                </ul>
            </transition>
            <span class="flex items-center xxs:px-4 lg:pr-4 xxs:mr-10 switch lg:mr-12">
                <Login />
            </span>
            <span class="flex items-center py-2 switch">
                <DarkModeToggle />
            </span>
        </nav>
    </header>
</template>

<script setup>
import DarkModeToggle from "./DarkModeToggle.vue"
import Login from "./Login.vue"
import { useLoginStore } from '@/store/loginStore.js';
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const enabled = ref(false)
const store = useLoginStore()
const scrolledNav = ref(null);
const mobile = ref(null);
const windowWidth = ref(null);
const isAuthenticated = computed(() => {
    return store.loggedIn;
});
const showMobileMenu = ref(false);
const toggleMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value;
}

const updateScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        scrolledNav.value = true;
        return;
    }
    scrolledNav.value = false;
};

const closeMenu = (event) => {
    if (showMobileMenu.value && !event.target.closest('ul.dropdown-nav')) {
        showMobileMenu.value = false;
    }
}

const checkScreen = () => {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value <= 1240) {
        mobile.value = true;
        return;
    }
    mobile.value = false;
    showMobileMenu.value = false;
    return;
};

watch(route, () => {
    showMobileMenu.value = false
})

onMounted(async () => {
    await window.addEventListener("resize", checkScreen);
    checkScreen();
    await window.addEventListener("scroll", updateScroll);

    // Close the mobile menu when clicking outside of it
    window.addEventListener('click', closeMenu)
});

onUnmounted(() => {
    window.removeEventListener("resize", checkScreen);
    window.removeEventListener("scroll", updateScroll);
    window.removeEventListener('click', closeMenu)
});
</script>

<style lang="scss" scoped>
@import "bulma/css/bulma.min.css";

header {
    background-color: #000;
    z-index: 100;
    width: 100%;
    position: fixed;
    top: 0;
    transition: 0.5s ease all;

    h1 {
        color: rgb(178, 162, 162);
        font-size: 1.35rem;
    }

    nav {
        display: flex;
        flex-direction: row;
        padding: 12px 0;
        transition: .5s ease all;
        width: 95%;
        position: relative;
        margin: 0 auto;

        @media (min-width: 1340px) {
            max-width: 100%;
        }

        ul,
        .link {
            font-weight: 500;
            color: var(--text-primary-color);
            list-style: none;
            text-decoration: none;
            margin-right: .5rem;
            display: flex;
        }

        li {
            text-transform: uppercase;
            padding: 10px;
            margin-left: 15px;
            padding-bottom: 0.5rem;
            ;
        }

        .link {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: .8rem;
            font-weight: bold;
            transition: .5s ease all;
            padding-bottom: 4px;
            border-bottom: 1px solid transparent;
            color: var(--text-primary-color);
            white-space: nowrap;

            &:focus,
            &:hover {
                color: var(--text-primary-color);
                border-color: var(--text-primary-color);
            }
        }

        .branding {
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;

            &:hover {
                transition: 0.2s ease-in all;
                background-color: #2d2d30;
                border-radius: 25px;
            }

        }

        img {
            width: 50px;
            transition: 0.5s ease all;
            margin-left: 0rem;
            z-index: 1;
            border-radius: 25px;
            background: whitesmoke;
        }

        .navigation {
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
        }

        .icon {
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            position: absolute;
            top: 0;
            right: 24px;
            height: 100%;
            color: var(--text-primary-color);

            &:hover {
                color: var(--accent-color);
            }

            i {
                cursor: pointer;
                font-size: 2rem;
                transition: 0.8s ease all;
            }
        }

        .fa-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 0.45rem;
        }

        .dropdown-nav {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            position: fixed;
            width: 100%;
            max-width: 240px;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.8);
            top: 0;
            left: 0;
            padding-top: 7rem;

            li {
                margin-left: 0;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                .link {
                    color: var(--text-primary-color);
                    font-weight: bold;
                    line-height: 2rem;
                }
            }
        }

        .slide-nav-enter-active,
        .slide-nav-leave-active {
            transition: 1s ease all;
        }

        .slide-nav-enter-from,
        .slide-nav-leave-to {
            transform: translateX(-250px)
        }

        .slide-nav-enter-to {
            transform: translateX(0px)
        }
    }

}


@media only screen and (max-width: 1240px) {
    .not-mobile-nav {
        visibility: hidden
    }

    header nav .icon-active {
        transform: none;
    }

    .navbar-burger span {
        width: 25px;
        height: 0.15rem;
    }

    .navbar-burger {
        display: block;
        color: whitesmoke;

        &:focus,
        &:hover {
            color: var(--text-primary-color);
            border-color: var(--text-primary-color);
        }
    }

    .switch {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 4rem;
        height: 100%;
    }
}

.scrolled-nav {
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    nav {
        padding: 8px 0;

        .branding {
            img {
                width: 45px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
        }
    }
}
</style>