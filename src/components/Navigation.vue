<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav>
            <router-link :to="{ name: 'Home' }" title="Home" class="branding" aria-label="Primary Navigation">
                <img class="p-.5 m-4 mr-1 focus:outline-none focus-visible:ring-4 rounded-full transition-shadow"
                    src="/windows11/StoreLogo.scale-150.png" aria-label="Go Home" alt="Assessify-Logo">
                <h1 class="pr-2 ml-0 tracking-wide navigation font-logoText drop-shadow-text-sm">Assessify</h1>
            </router-link>
            <ul v-show="!mobile" class="navigation not-mobile-nav">
                <li><router-link title="Login" class="link" :to="{ name: 'Login' }">Login</router-link></li>
                <li><router-link title="Assessment" class="link" :to="{ name: 'Assessment' }">Assessments</router-link></li>
                <li><router-link title="Teacher" class="link" :to="{ name: 'TeacherClasslist' }">Teacher</router-link></li>
                <li><router-link title="Parent" class="link" :to="{ name: 'Parent' }">Parent</router-link></li>
                <li><router-link title="About" class="link" :to="{ name: 'About' }">About Us</router-link></li>
                <li><router-link title="Contact" class="link" :to="{ name: 'Contact' }">Contact</router-link></li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{ 'icon-active': mobileNav }"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <router-link :to="{ name: 'Home' }" title="Home" class="branding">
                        <img class="p-.5" src="/assets/logo.png" alt="report-card-tool">

                    </router-link>
                    <li><router-link title="Login" class="link" :to="{ name: 'Login' }">Login</router-link></li>
                    <li><router-link title="About" class="link" :to="{ name: 'About' }">About Us</router-link></li>
                    <li><router-link title="Assessment" class="link" :to="{ name: 'Assessment' }">Assessments</router-link>
                    </li>
                    <li><router-link title="Teacher" class="link" :to="{ name: 'TeacherClasslist' }">Teacher</router-link>
                    </li>
                    <li><router-link title="Parent" class="link" :to="{ name: 'Parent' }">Parent</router-link></li>
                    <li><router-link title="Contact" class="link" :to="{ name: 'Contact' }">Contact</router-link></li>
                </ul>
            </transition>
            <span class="flex items-center switch">
                <Switch v-model:done="enabled.done" v-model:priority="enabled.priority" as="template" v-slot="{ checked }">
                    <button class="relative inline-flex items-center h-6 rounded-full w-11"
                        :class="checked ? 'bg-dark' : 'bg-accent'">
                        <span class="sr-only">Enable notifications</span>
                        <span :class="checked ? 'translate-x-6' : 'translate-x-1'"
                            class="inline-block w-4 h-4 transition transform bg-white rounded-full" />
                    </button>
                </Switch>
            </span>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Switch } from '@headlessui/vue'

const enabled = ref(false)
const scrolledNav = ref(null);
const mobile = ref(null);
const mobileNav = ref(null);
const windowWidth = ref(null);

const toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value;
};

const updateScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        scrolledNav.value = true;
        return;
    }
    scrolledNav.value = false;
};

const checkScreen = () => {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value <= 940) {
        mobile.value = true;
        return;
    }
    mobile.value = false;
    mobileNav.value = false;
    return;
};

onMounted(async () => {
    await window.addEventListener("resize", checkScreen);
    checkScreen();
    await window.addEventListener("scroll", updateScroll);
});

onUnmounted(() => {
    window.removeEventListener("resize", checkScreen);
    window.removeEventListener("scroll", updateScroll);
});
</script>

<style lang="scss" scoped>
header {
    background-color: #000;
    z-index: 99;
    width: 100%;
    position: fixed;
    top: 0;
    transition: 0.5s ease all;

    h1 {
        color: rgb(178, 162, 162);
        font-size: 1.5rem;
    }

    nav {
        display: flex;
        flex-direction: row;
        padding: 12px 0;
        transition: .5s ease all;
        width: 95%;
        position: relative;
        margin: 0 auto;

        @media (min-width: 1140px) {
            max-width: 100%;
        }

        ul,
        .link {
            font-weight: 500;
            color: #fff;
            list-style: none;
            text-decoration: none;
            margin-right: .5rem;
        }

        li {
            text-transform: uppercase;
            padding: 10px;
            margin-left: 15px;
        }

        .link {
            font-size: .9rem;
            transition: .5s ease all;
            padding-bottom: 4px;
            border-bottom: 1px solid transparent;
            color: rgb(178, 162, 162);

            &:hover,
            &:focus {
                color: #00afea;
                border-color: #00afea;
            }
        }

        .branding {
            display: flex;
            align-items: center;

            img {
                width: 40px;
                transition: 0.5s ease all;
                margin-left: 0rem;
            }
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
            position: absolute;
            top: 0;
            right: 24px;
            height: 100%;
            color: #5e95a8;

            i {
                cursor: pointer;
                font-size: 2rem;
                transition: 0.8s ease all;
            }
        }

        .icon-active {
            transform: rotate(180deg);
        }

        .dropdown-nav {
            display: flex;
            flex-direction: column;
            position: fixed;
            width: 100%;
            max-width: 250px;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            top: 0;
            left: 0;

            li {
                margin-left: 0;

                .link {
                    color: #ffffff;
                }
            }
        }

        .mobile-nav-enter-active,
        .mobile-nav-leave-active {
            transition: 1s ease all;
        }

        .mobile-nav-enter-from,
        .mobile-nav-leave-to {
            transform: translateX(-250px)
        }

        .mobile-nav-enter-to {
            transform: translateX(0px)
        }
    }
}

@media only screen and (max-width: 940px) {
    .not-mobile-nav {
        visibility: hidden
    }

    .switch {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 100px;
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
                width: 40px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
        }
    }
}
</style>