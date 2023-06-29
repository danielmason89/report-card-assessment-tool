
<template>
    <div>
        <p v-if="!isAuthenticated">
            <button class="bn39" @click="handleLogin"><span class="bn39span">Login</span></button>
        </p>
        <p class="flex items-center" v-if="isAuthenticated">
            <button class="bn39" @click="handleLogout"><span class="bn39span">Logout</span></button>
            <span class="pl-2 text-xs text-white ">Welcome to Assessify!<br /> You are successfully logged in {{ user.name
            }}!</span>
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
                }
            });
        });

        async function handleLogin() {
            if (isLoggingIn.value) return;
            isLoggingIn.value = true;
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
                    router.push({ path: "/dashboard" });
                }
            } catch (err) {
                console.log(err);
            } finally {
                isLoggingIn.value = false;
            }
        }

        async function signup() {
            // Similar to login, you can handle signup as per your business needs
            // Azure B2C supports sign-up and sign-in policy which can be used
        }

        async function handleLogout() {
            try {
                router.push({ path: "/" });
                authInstance.value.logout();
                user.value = null;
                isAuthenticated.value = false;
                store.dispatch("logoutAction");
                router.push({ path: "/dashboard" });
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
            isLoggingIn
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
    width: 3.85rem;
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
</style>