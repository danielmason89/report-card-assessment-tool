<template>
    <div class="slide">
        <transition-group name="slide">
            <slot />
        </transition-group>
    </div>
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            required: true,
        },
    },
    inject: ['currentSlide'],
    computed: {
        isVisible() {
            return this.index === this.currentSlide.value.value;
        },
    },
};
</script>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
    transition: opacity 0.7s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
    opacity: 1;
}
</style>
