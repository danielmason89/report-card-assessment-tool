<template>
    <div>
        <Switch v-model="enabled.done" v-slot="{ checked }">
            <button class="relative inline-flex items-center h-6 rounded-full w-11"
                :class="checked ? 'bg-accent' : 'bg-dark'">
                <span class="sr-only">Enable dark mode</span>
                <span :class="checked ? 'translate-x-6' : 'translate-x-1'"
                    class="inline-block w-4 h-4 transition transform bg-white rounded-full" />
            </button>
        </Switch>
    </div>
</template>
  
<script>
import { Switch } from "@headlessui/vue";

export default {
    components: {
        Switch
    },
    data() {
        return {
            enabled: {
                done: this.getTheme() === 'dark-theme',
                priority: false // or any initial value you want
            }
        }
    },
    watch: {
        'enabled.done': {
            handler(newVal) {
                const theme = newVal ? 'dark-theme' : 'light-theme';
                this.setTheme(theme);
            },
            immediate: true
        }
    },
    methods: {
        getTheme() {
            return localStorage.getItem("user-theme");
        },

        setTheme(theme) {
            localStorage.setItem("user-theme", theme);
            document.documentElement.className = theme;
        }
    },
    mounted() {
        const initUserTheme = this.getTheme() || this.getMediaPreference();
        this.setTheme(initUserTheme);
    }
};
</script>