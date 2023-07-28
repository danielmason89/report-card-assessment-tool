
<template>
    <div>
        <p v-if="!loginStore.loggedIn">
            <button class="w-34 auth-button" @click="handleLogin"><span class="auth-buttonspan">Login /
                    Register</span></button>
        </p>
        <p class="flex items-center" v-if="loginStore.loggedIn">
            <transition name="fade">
                <span v-if="showWelcomeMessage" class="pr-2 text-xs text-white">Welcome back to Assessify!<br /> You are
                    successfully logged in {{ username }}!</span>
            </transition>
            <button class="auth-button" @click="handleLogout"><span class="auth-buttonspan">Logout</span></button>
        </p>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { PublicClientApplication } from "@azure/msal-browser";
import { ref, onMounted, watch, computed } from 'vue';
import { useLoginStore } from "@/store/loginStore.js"

export default {
    setup() {
        const router = useRouter();
        const authInstance = ref(null);
        const loginStore = useLoginStore();
        const username = computed(() => loginStore.username);
        const showWelcomeMessage = ref(false);
        const lastLoginAttempt = ref(0);
        const delay = 2000;
        const loggedIn = ref(false);

        const config = {
            auth: {
                clientId: "6f19ee71-38e7-4264-921e-c07f0b300efb",
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

        watch(() => loginStore.loggedIn, (newValue) => {
            // console.log("loggedIn value changed:", newValue);
        });

        function setStoredItem(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        }

        function getStoredItem(key) {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        }

        function removeStoredItem(key) {
            localStorage.removeItem(key);
        }

        onMounted(async () => {
            const storedUser = getStoredItem("currentUser");
            const storedLoginState = getStoredItem("loggedIn");
            if (storedUser) {
                loginStore.SET_USER(JSON.parse(storedUser));
            }
            if (storedLoginState !== null && storedLoginState !== undefined) {
                loginStore.SET_LOGIN_STATE(JSON.parse(storedLoginState));
            }
            try {
                authInstance.value = new PublicClientApplication(config);
                const resp = await authInstance.value.handleRedirectPromise();
                if (resp && resp.account) {
                    loginStore.SET_USER(resp.account);
                    setStoredItem("currentUser", JSON.stringify(resp.account));
                    setStoredItem("loggedIn", "true");
                    router.push({ path: "/dashboard" });
                    showWelcomeMessage.value = true;
                    setTimeout(() => {
                        showWelcomeMessage.value = false;
                    }, delay);
                }
            } catch (error) {
                console.error("Error in onMounted:", error);
            }
        });

        async function handleLogin() {
            const now = Date.now();
            if (loggedIn.value || now - lastLoginAttempt.value < delay) {
                return;
            }
            try {
                const response = await authInstance.value.loginRedirect({
                    scopes: ["openid", "profile"],
                });
                if (response && response.account) {
                    loginStore.SET_USER(response.account);
                    setStoredItem("currentUser", JSON.stringify(response.account));
                    setStoredItem("loggedIn", "true");
                }
            } catch (err) {
                loginStore.REMOVE_USER();
                removeStoredItem("currentUser");
                setStoredItem("loggedIn", "false");
            }
        }

        async function signup() {
            // Similar to login, you can handle signup as per your business needs
            // Azure B2C supports sign-up and sign-in policy which can be used
        }

        async function handleLogout() {
            try {
                authInstance.value.logout();
                loginStore.REMOVE_USER();
                localStorage.removeItem("currentUser");
                setStoredItem("loggedIn", "false");
                router.push({ path: '/' });
            }
            catch (err) {
                console.error("Error during logout:", err);
            }
        }

        return {
            handleLogin,
            handleLogout,
            loggedIn,
            loginStore,
            showWelcomeMessage,
            username
        };
    }
};
</script>

<style lang="scss" scoped>
.auth-button {
    background-image: linear-gradient(135deg, #00afea, rgb(178, 162, 162));
    border-radius: 6px;
    box-sizing: border-box;
    color: #f3f3f3;
    display: block;
    height: 50px;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 2px;
    position: relative;
    text-decoration: none;
    z-index: 2;

    &:active {
        transform: translateY(1px);
    }
}

.auth-button:hover {
    color: #fff;
}

.auth-button span {
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

.auth-button:hover span {
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