<template>
    <div class="h-screen py-40 ctr height">
        <Questions v-if="questionsAnswered < questionsList.length" :questions="questionsList"
            :questionsAnswered="questionsAnswered" @question-answered="questionAnswered" />
        <Result v-else :results="results" :totalCorrect="totalCorrect" />
        <div class="flex">
            <button v-if="questionsAnswered === 0" type="button" class="rounded-md reset-btn"
                @click.prevent="goToHome">Home</button>
            <button v-if="questionsAnswered > 0 && questionsAnswered < questionsList.length" type="button"
                class="rounded-md reset-btn" @click.prevent="previousQuestion()">Previous</button>
            <button v-if="questionsAnswered === questionsList.length" type="button" class="rounded-md reset-btn"
                @click.prevent="resetQuiz()">Finish</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Questions from "../components/Questions.vue";
import Result from "../components/Result.vue";
import { useRouter } from 'vue-router';

const router = useRouter();
let questionsList = ref([]);
let questionsAnswered = ref(0);
let totalCorrect = ref(0);
let results = ref([]);

let questionAnswered = (is_correct: boolean) => {
    if (is_correct) {
        totalCorrect.value++;
    }
    questionsAnswered.value++;
}

let previousQuestion = () => {
    questionsAnswered.value--;
}

let resetQuiz = () => {
    questionsAnswered.value = 0;
    totalCorrect.value = 0;
}

const fetchQuestionsList = async () => {
    try {
        const res = await fetch('http://localhost:3000/questionsList');
        const data = await res.json();
        questionsList.value = data;
    } catch (err) {
        console.log(err.message);
    }
};

const fetchResultsList = async () => {
    try {
        const res = await fetch('http://localhost:3000/results');
        const data = await res.json();
        results.value = data;
    } catch (err) {
        console.log(err.message);
    }
};

const goToHome = () => {
    router.push('/');
}

onMounted(async () => {
    fetchQuestionsList();
    fetchResultsList();
});

defineExpose({
    questionsList,
    totalCorrect,
    questionsAnswered,
    results
});
</script>

<style lang="scss" scoped>
.ctr {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
    box-sizing: border-box;
    position: relative;
}

.questions-ctr {
    position: relative;
    width: 100%;
}

.question {
    width: 100%;
    padding: 20px;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    background-color: var(--background-color-secondary);
    color: var(--text-primary-color);
    box-sizing: border-box;
}

.single-question {
    position: relative;
    width: 100%;
}

.answer {
    border: 1px solid #8e959f;
    padding: 20px;
    font-size: 18px;
    width: 100%;
    background-color: var(--background-color-secondary);
    transition: 0.2s linear all;
}

.answer span {
    display: inline-block;
    margin-left: 5px;
    font-size: 0.75em;
    font-style: italic;
}

.progress {
    height: 50px;
    margin-top: 10px;
    background-color: var(--background-color-secondary);
    position: relative;
}

.bar {
    height: 50px;
    background-color: var(--background-color-secondary);
    transition: all 0.3s linear;
}

.status {
    position: absolute;
    top: 15px;
    left: 0;
    text-align: center;
    color: var(--text-primary-color);
    width: 100%;
}

.answer:not(.is-answered) {
    cursor: pointer;
}

.answer:not(.is-answered):hover {
    background-color: var(--background-color-secondary);
    border-color: var(--background-color-secondary);
    color: var(--text-primary-color);
}

.title {
    width: 100%;
    padding: 20px;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    background-color: var(--background-color-secondary);
    color: var(--text-primary-color);
    box-sizing: border-box;
}

.desc {
    border: 1px solid #8e959f;
    padding: 20px;
    font-size: 18px;
    width: 100%;
    background-color: var(--background-color-secondary);
    transition: 0.4s linear all;
    text-align: center;
}

.fade-enter-from {
    opacity: 0;
}

.fade-enter-active {
    transition: all 0.3s linear;
}

.fade-leave-active {
    transition: all 0.3s linear;
    opacity: 0;
    position: absolute;
}

.fade-leave-to {
    opacity: 0;
}

.reset-btn {
    background-color: #ff6372;
    border: 0;
    font-size: 22px;
    color: #fff;
    padding: 10px 25px;
    margin: 10px auto;
    transition: .3s;

    &:hover {
        background-color: #ff6372;
        color: var(--text-secondary-color);
        transition: 0.3s linear all;
        box-shadow: 8px 8px #8a9099;
    }

    &:active {
        transition: transform 0.3s;
    }
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