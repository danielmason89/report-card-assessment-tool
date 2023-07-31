<template>
  <main>
    <header>
      <transition appear @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave"
        @leave="leave" @after-appear="afterLeave">
        <h1 class="light" title="Search Student Class List">Search Student Class List</h1>
      </transition>
    </header>
    <section>
      <vee-form class="form" @submit="handleSubmit" :validation-schema="schema">
        <label title="Student Name">Student Name:</label>
        <vee-field class="select" as="select" v-model="teacherClasslist" name="name" required>
          <option value="" disabled selected>Please Select A Student</option>
          <option :title="student.studentId" v-for="student in studentsList" :key="student.studentId"
            :value="student.studentId">
            {{ student.studentId }}
          </option>
        </vee-field>
        <ErrorMessage class="p-2 text-red-600" name="name" />
        <div class="terms">
          <vee-field type="checkbox" value="1" v-model="isChecked" name="options not checked" />
          <label>I'm not a robot 🤖 </label>
          <br />
          <ErrorMessage class="p-2 text-red-600" name="options not checked" />
        </div>
        <div class="flex items-center justify-center space-x-[20px]">
          <button class="hover:shadow-xl" title="Reset" type="button" @click="resetForm">Reset</button>
          <button type="submit" class="transition duration-300 ease-out transform hover:bg-opacity-50 hover:shadow-xl"
            title="Search Classlist For Child">Search Classlist</button>
        </div>
      </vee-form>
    </section>
    <section @click="showDetails = !showDetails" v-if="results" class="report-card">
      <header>
        <h3 title="Student Report Card" class="text-xl text-black-400">Student Report Card</h3>
        <span v-if="!showDetails" title="open student's report card" class="material-icons">expand_more</span>
        <span v-else-if="showDetails" title="close student's report card" class="material-icons">expand_less</span>
      </header>
      <transition name="fade" mode="out-in">
        <div v-if="showDetails" class="details">
          <p :title="results.studentId" class="font-bold">{{ results.studentId }}</p>
          <p :title="results.id"><span title="Student ID">Student ID:</span> {{ results.id }}</p>
          <p :title="results.grade"><span title="Student Grade">Student Grade:</span> {{ results.grade }}</p>
          <p :title="results.mark"><span :title="results.subject">{{ results.subject }}</span> : {{ results.mark }}</p>
        </div>
      </transition>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';



const teacherClasslist = ref("");
const studentsList = ref([]);
const formData = ref({
  mark: '',
  studentId: '',
  grade: '',
  subject: '',
});
const showDetails = ref(false);
const results = ref(false);
const isChecked = ref(false);

let schema = {
  name: "required",
  "options not checked": "required"
}

const beforeEnter = (el) => {
  el.style.transform = 'translateY(-60px)';
  el.style.opacity = 0;
};
const enter = (el, done) => {
  gsap.to(el, {
    y: 0,
    autoAlpha: 1,
    duration: 0.75,
    ease: "bounce.out",
    onComplete: done
  });
};
const afterEnter = () => {
  setTimeout(() => showTitle.value = false, 2000);
};
const beforeLeave = () => { };
const leave = () => { };
const afterLeave = () => { };

const fetchTeacherClasslist = async () => {
  try {
    const response = await fetch('http://localhost:3000/teacherClasslist');
    const data = await response.json();
    studentsList.value = data;
  } catch (err) {
    console.log(err.message);
  }
};

const resetForm = async () => {
  formData.value = {
    mark: '',
    studentId: '',
    grade: '',
    subject: '',
  };
  teacherClasslist.value = "";
  isChecked.value = false;
  results.value = null;
  showDetails.value = false;
}

const handleSubmit = async () => {
  try {
    const response = await fetch(`http://localhost:3000/teacherClasslist?studentId=${teacherClasslist.value}`);
    const data = await response.json();
    results.value = data[0];
  } catch (err) {
    console.log(err.message);
  }
};

onMounted(fetchTeacherClasslist);

defineExpose({
  teacherClasslist,
  formData,
  showDetails,
  results,
  handleSubmit,
  beforeEnter,
  enter,
  afterEnter,
  beforeLeave,
  leave,
  afterLeave
});
</script>

<style lang="scss" scoped>
main {
  padding: 10rem 2.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 95svh;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    h1 {
      font-size: 2rem;
      font-style: bold;
    }
  }
}

.form {
  border-left: .5rem #add solid;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgb(0 0 0 / 50%);
}

form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

.report-card {
  margin: 1rem 2.5rem;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 4px solid #e90074;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
.select {
  display: block;
  padding: 20px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

header {
  display: flex;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 16px 0 0;
  position: relative;
  top: 2px;
}

button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  font-size: .8rem;

  &:active {
    transform: translateY(1.25px);
    border-color: var(--background-color-primary);
    color: var(--background-color-secondary);
    background-color: var(--background-color-primary);
  }
}

.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: bold;
}

.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: rgb(95, 79, 79);
  cursor: pointer;
}

.material-icons:hover {
  color: #add;
}

/* Animations */
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}

.fade-leave-to {
  opacity: 0;
}
</style>