
<template>
    <main class="container">
        <h1 class="title">Welcome back to Assessify!</h1>
        <div class="main">
            <input type="checkbox" id="chk" aria-hidden="true">
            <div class="login">
                <form class="form">
                    <label for="chk" aria-hidden="true">Log in</label>
                    <input class="input" type="email" name="email" placeholder="Email" required="">
                    <input class="input" type="password" name="pswd" placeholder="Password" required="">
                    <button
                        class="font-bold transition ease-out transform text hover:scale-110 hover:bg-opacity-50 hover:shadow-xl"
                        @click="login">Log in</button>
                </form>
            </div>

            <div class="register">
                <form method="POST" class="form">
                    <label for="chk" aria-hidden="true">Register</label>
                    <input class="input" type="text" name="txt" placeholder="Username" required="">
                    <input class="input" type="email" name="email" placeholder="Email" required="">
                    <input class="input" type="password" name="pswd" placeholder="Password" required="">
                    <button>Register</button>
                </form>
            </div>
        </div>
        <p v-if="isAuthenticated">
            You are successfully logged in{{ user.name }}!
            <button
                class="font-extrabold transition duration-300 ease-out transform hover:scale-125 hover:bg-opacity-50 hover:shadow-xl"
                @click="logout">Logout</button>
            <code>{{ user }}</code>
        </p>
        <p v-else>
            <code>{{ user }}</code>
        </p>
    </main>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        let auth0Client = ref();

        onMounted(async () => {
            auth0Client.value = await createAuth0Client({
                domain: config.domain,
                client_id: config.clientId,
                redirect_uri: window.location.origin,
            });

            let userData = await auth0Client.value.getUser();
            store.commit('setUser', userData);
        });

        let authenticated = computed(function () {
            return store.getters.authenticated
        })

        let user = computed(function () {
            return store.state.user
        });


        const { loginWithRedirect, isAuthenticated, logout: auth0Logout } = useAuth0();

        return {
            login: () => {
                loginWithRedirect();
            },
            logout: () => {
                auth0Logout({ returnTo: window.location.origin });
            },
            user,
            isAuthenticated
        };
    }
};
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 82.5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    left: 50%;
}

.title {
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: #333;
}

main {
    padding-top: 6rem;
}

.main {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #240046;
    max-height: 420px;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 7px 7px 10px 3px #24004628;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 23px;
    border-radius: 37px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/*checkbox to switch from sign up to login*/
#chk {
    display: none;
}

/*Login*/
.login {
    position: relative;
    width: 100%;
    height: 100%;
}

.login label {
    margin: 25% 0 5%;
}

label {
    color: #fff;
    font-size: 2rem;
    justify-content: center;
    display: flex;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;
}

.input {
    width: 100%;
    height: 40px;
    background: #e0dede;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 4px;
}

/*Register*/
.register {
    background: #eee;
    border-radius: 60% / 10%;
    transform: translateY(5%);
    transition: .8s ease-in-out;
}

.register label {
    color: #573b8a;
    transform: scale(.6);
}

#chk:checked~.register {
    transform: translateY(-60%);
}

#chk:checked~.register label {
    transform: scale(1);
    margin: 10% 0 5%;
}

#chk:checked~.login label {
    transform: scale(.6);
    margin: 5% 0 5%;
}

/*Button*/
.form button {
    width: 85%;
    height: 40px;
    margin: 12px auto 10%;
    color: #fff;
    background: #573b8a;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: .2s ease-in;
}

.form button:hover {
    background-color: #6d44b8;
}


@media (max-width: 768px) {
    .title {
        font-size: 1.95rem;
    }
}
</style>