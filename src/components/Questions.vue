<template>
    <div class="ctr">
        <div class="rounded-t-lg questions-ctr">
            <div class="rounded-t-lg progress">
                <div class="bar" :style="{ width: `${(questionsAnswered / questions.length) * 100}%` }"></div>
                <div class="status">{{ questionsAnswered }} out of {{ questions.length }} questions answered</div>
            </div>
            <div class="single-question" v-for="(question, id) in questions" :key="question.id"
                v-show="questionsAnswered === id">
                <div class="question">{{ question.q }}</div>
                <div class="answers">
                    <div class="answer" v-for="answer in question.answers" :key="answer.text"
                        @click.prevent="selectAnswer(answer.is_correct)">
                        {{ answer.text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const { questions = [], questionsAnswered = 0 } = defineProps(['questions', 'questionsAnswered']);
const emit = defineEmits();

const selectAnswer = (is_correct: boolean) => {
    emit('question-answered', is_correct);
}

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
    background-color: var(--background-color-primary);
    color: var(--text-primary-color);
    box-sizing: border-box;
}

.single-question {
    position: relative;
    width: 100%;
}

.answer {
    border: 1px solid #d3d7de;
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
    background-color: #ddd;
    position: relative;
}

.bar {
    height: 50px;
    background-color: #ff6372;
    transition: all 0.3s linear;
}

.status {
    position: absolute;
    top: 15px;
    left: 0;
    text-align: center;
    color: black;
    width: 100%;
}

.answer:not(.is-answered) {
    cursor: pointer;
}

.answer:not(.is-answered):hover {
    background-color: #ff6372;
    border-color: #ff6372;
    color: var(--text-secondary-color);
}

.single-question .answer:last-child {
    border-radius: 0 0 10px 10px;
}

.title {
    width: 100%;
    padding: 20px;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    background-color: #12cbc4;
    color: var(--text-primary-color);
    box-sizing: border-box;
}

.desc {
    border: 1px solid #8e959f;
    padding: 20px;
    font-size: 18px;
    width: 100%;
    background-color: var(--background-color-primary);
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
    color: var(--text-primary-color);
    padding: 10px 25px;
    margin: 10px auto;
    display: block;
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