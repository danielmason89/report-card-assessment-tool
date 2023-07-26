
<template>
    <div>
        <p v-if="!isAuthenticated">
            <button class="bn39" @click="handleLogin"><span class="bn39span">Login</span></button>
        </p>
        <p class="flex items-center" v-if="isAuthenticated">
            <button class="bn39" @click="handleLogout"><span class="bn39span">Logout</span></button>
            <transition name="fade">
                <span v-if="showWelcomeMessage" class="pl-2 text-xs text-white ">Welcome back to Assessify!<br /> You are
                    successfully logged in {{
                        user.name
                    }}!</span>
            </transition>
        </p>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { PublicClientApplication } from "@azure/msal-browser";
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const router = useRouter();
        const authInstance = ref(null);
        const user = ref(null);
        const isAuthenticated = ref(false);
        const store = useStore();
        const isLoggingIn = ref(false);
        const showWelcomeMessage = ref(false);
        const lastLoginAttempt = ref(0);
        const delay = 2000;

        const config = {
            auth: {
                clientId: "6f19ee71-38e7-4264-921e-c07f0b300efb", // your application id here
                authority:
                    "https://assessify.b2clogin.com/assessify.onmicrosoft.com/B2C_1_SignUp_SignIn",
                knownAuthorities: ["assessify.b2clogin.com"],
                redirectUri: "http://localhost:5173",
            },
            cache: {
                cacheLocation: "localStorage",
                storeAuthStateInCookie: false,
            },
        };

        onMounted(async () => {
            authInstance.value = new PublicClientApplication(config);
            await authInstance.value.handleRedirectPromise().then(resp => {
                if (resp && resp.account) {
                    user.value = resp.account;
                    isAuthenticated.value = true;
                    store.dispatch("loginAction", user.value);
                    router.push({ path: "/dashboard" });
                    showWelcomeMessage.value = true;
                    setTimeout(() => {
                        showWelcomeMessage.value = false;
                    }, 5000);
                    isLoggingIn.value = false;
                }
            });
        });

        async function handleLogin() {
            const now = Date.now();
            if (isLoggingIn.value || now - lastLoginAttempt.value < delay) {
                return;
            }
            isLoggingIn.value = true;
            lastLoginAttempt.value = now;
            if (isLoggingIn.value)
                try {
                    const response = await authInstance.value.loginRedirect({
                        scopes: ["openid", "profile"],
                    });
                    if (response) {
                        user.value = response.account;
                        isAuthenticated.value = true;
                        store.dispatch("loginAction", user.value);
                        localStorage.setItem("user", JSON.stringify(user.value));
                        localStorage.setItem("isAuthenticated", isAuthenticated.value);
                    }
                } catch (err) {
                    console.log(err);
                }
        }

        async function signup() {
            // Similar to login, you can handle signup as per your business needs
            // Azure B2C supports sign-up and sign-in policy which can be used
        }

        async function handleLogout() {
            try {
                authInstance.value.logout();
                user.value = "";
                store.dispatch("logoutAction");
            }
            catch (err) {
                console.log(err);
            }
        }

        return {
            handleLogin,
            signup,
            handleLogout,
            user,
            isAuthenticated,
            isLoggingIn,
            showWelcomeMessage
        };
    }
};
</script>

<style lang="scss" scoped>
.bn39 {
    background-image: linear-gradient(135deg, #00afea, rgb(178, 162, 162));
    border-radius: 6px;
    box-sizing: border-box;
    color: #ffffff;
    display: block;
    height: 50px;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 2px;
    position: relative;
    text-decoration: none;
    width: 4.5rem;
    z-index: 2;

    &:active {
        transform: translateY(1px);
    }
}

.bn39:hover {
    color: #fff;
}

.bn39 .bn39span {
    align-items: center;
    background: #0e0e10;
    border-radius: 0.15rem;
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 0 0.5rem;
    transition: background 0.5s ease;
    width: 100%;
}

.bn39:hover .bn39span {
    background: transparent;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>