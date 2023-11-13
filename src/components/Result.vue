<template>
    <div class="result">
        <div class="rounded-t-md title">{{ results[resultIndex]?.title }}</div>
        <div class="rounded-b-md desc">
            {{ results[resultIndex]?.desc }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
const { results, totalCorrect } = defineProps(['results', 'totalCorrect']);

interface Result {
    min: number;
    max: number;
    title: string;
    desc: string;
}

let resultIndex = ref(0);
watchEffect(() => {
    results.forEach((e: Result, i: number) => {
        if (e.min <= totalCorrect && e.max >= totalCorrect) {
            resultIndex.value = i;
        }
    });
});

</script>

<style lang="scss" scoped>
.title {
    width: 100%;
    padding: 20px;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    background-color: var(--background-color-primary);
    color: var(--text-primary-color);
    box-sizing: border-box;
}

.desc {
    border: 1px solid #8e959f;
    padding: 20px;
    font-size: 18px;
    width: 100%;
    background-color: var(--text-primary-color);
    transition: 0.4s linear all;
    text-align: center;
}

.result {
    width: 100%;
}

.reset-btn:active,
.reset-btn:focus,
.reset-btn:hover {
    border: 0;
    outline: 0;
}
</style>