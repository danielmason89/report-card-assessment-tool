<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav>
            <router-link :to="{name: 'Home'}" title="Home" class="branding">
                <img class="p-.5" src="@/assets/logo.png" alt="report-card-tool">
            </router-link>
            <ul v-show="!mobile" class="navigation">
                <li><router-link title="About" class="link" :to="{name: 'About'}">About</router-link></li>
                <li><router-link title="Teacher" class="link" :to="{name: 'TeacherClasslist'}">Teacher</router-link></li>
                <li><router-link title="Parent" class="link" :to="{name: 'Parent'}">Parent</router-link></li>
                <li><router-link title="Contact" class="link" :to="{name: 'Contact'}">Contact</router-link></li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active' : mobileNav }"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                <router-link :to="{name: 'Home'}" title="Home" class="branding">
                    <img class="p-.5" src="@/assets/logo.png" alt="report-card-tool">
                </router-link>
                <li><router-link title="About" class="link" :to="{name: 'About'}">About</router-link></li>
                <li><router-link title="Teacher" class="link" :to="{name: 'TeacherClasslist'}">Teacher</router-link></li>
                <li><router-link title="Parent" class="link" :to="{name: 'Parent'}">Parent</router-link></li>
                <li><router-link title="Contact" class="link" :to="{name: 'Contact'}">Contact</router-link></li>
            </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
            scrolledNav: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null
            }
        },
       async created() {
        await window.addEventListener("resize", this.checkScreen);
            this.checkScreen();
        },
       async mounted() {
        await window.addEventListener("scroll", this.updateScroll)
        },
        methods: {
          async toggleMobileNav() {
                this.mobileNav = !this.mobileNav
            },
           async updateScroll() {
                const scrollPosition = window.scrollY;
                if (scrollPosition > 50) {
                    this.scrolledNav = true;
                    return; 
                }
                this.scrolledNav = false;
            },
        async checkScreen() {
                this.windowWidth = window.innerWidth;
                if (this.windowWidth <= 750) {
                    this.mobile = true;
                    return;
                }
                this.mobile = false;
                this.mobileNav = false;
                return;
            }
        }
    };
</script>

<style lang="scss" scoped>

header {
    background-color: rgba(0,0,0,0.8);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
    color: #fff;


    nav {
        display: flex;
        flex-direction: row;
        padding: 12px 0;
        transition: .5s ease all;
        width: 90%;
        position: relative;
        margin: 0 auto;
        @media (min-width: 1140px) {
            max-width: auto;
        }


    ul,
    .link {
        font-weight: 500;
        color: #fff;
        list-style:none;
        text-decoration: none;
        margin-right: .5rem;
    }

    li {
        text-transform: uppercase;
        padding: 16px;
        margin-left: 15px;
    }

    .link {
        font-size: 1.05rem;
        transition: .5s ease all;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;

        &:hover{
            color: #00afea;
            border-color: #00afea;
        }
    }

    .branding {
        display: flex;
        align-items: center;

        img {
            width: 50px;
            transition: 0.5s ease all;
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

        i {
            cursor: pointer;
            font-size: 24px;
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
        background-color: rgba(0,0,0,0.8);
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

.scrolled-nav {
    background-color: #000;
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