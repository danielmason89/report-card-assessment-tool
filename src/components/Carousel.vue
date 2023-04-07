<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide" :nextSlide="nextSlide" :prevSlide="prevSlide" />
    </div>
</template>
  
<script>
import { ref, onMounted, watch, provide } from 'vue';

export default {
    setup() {
        const currentSlide = ref(1);
        const slideCount = ref(null);
        const autoPlayEnabled = ref(true);
        const autoPlayInterval = ref(5000);

        function nextSlide() {
            if (currentSlide.value === slideCount.value) {
                currentSlide.value = 1;
                return;
            }
            currentSlide.value += 1;
        }

        function prevSlide() {
            if (currentSlide.value === 1) {
                currentSlide.value = 1;
                return;
            }
            currentSlide.value -= 1;
        };

        const autoPlay = () => {
            setInterval(() => {
                nextSlide();
            }, autoPlayInterval.value)
        }

        if (autoPlayEnabled.value) {
            autoPlay();
        }

        onMounted(() => {
            slideCount.value = document.querySelectorAll('.slide').length;
        });

        watch(currentSlide, () => {
            const prevButton = document.getElementById('prev');
            const nextButton = document.getElementById('next');

            if (prevButton) {
                prevButton.disabled = currentSlide.value === 1;
            }

            if (nextButton) {
                nextButton.disabled = currentSlide.value === slideCount.value;
            }
        });

        provide('currentSlide', { value: currentSlide });
        provide('nextSlide', { value: nextSlide });
        provide('prevSlide', { value: prevSlide });

        return {
            currentSlide,
            nextSlide,
            prevSlide,
        };
    },
};
</script>
  
<style lang="scss" scoped></style>
  