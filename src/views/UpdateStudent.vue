<template>
  <main>
    <header>
      <h1>Update Student Details </h1>
    </header>
    <vee-form class="form" @submit="handleSubmit" :validation-schema="schema">
      <label>Student Name:</label>
      <input type="studentId" v-model="studentId" required>
      <div v-if="text2Error" class="error">{{ text2Error }}</div>
      <label>Student Gender:</label>
      <select v-model="gender" required>
        <option disabled value>Please Select a Gender to update, if needed</option>
        <option value="Girl">Girl</option>
        <option value="Boy">Boy</option>
        <option value="Non-Binary">Non-Binary</option>
        <option value="LGBTQ+">LGBTQ+</option>
      </select>
      <label>Student Grade:</label>
      <select v-model="grade" name="grade" required>
        <option disabled value>Please Update Grade, if needed</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
      </select>
      <label>Class Subject:</label>
      <select v-model="subject" required>
        <option disabled value>Please Select A Subject</option>
        <option value="Computer Science">Computer Science</option>
      </select>
      <label>Student Mark:</label>
      <select v-model="mark" required>
        <option disabled value>Please Select A Mark or Update, if needed</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="F">F</option>
        <option value="other">Other</option>
        <option value="Not Completed">Not Completed</option>
      </select>
      <div class="terms">
        <vee-field class="checkbox" type="checkbox" value="1" name="tos" />
        <label>All Options are Checked</label>
        <br />
        <ErrorMessage class="p-2 text-red-600 error-text" name="tos" />
      </div>
      <div class="flex items-center justify-center space-x-[20px]">
        <button class="hover:shadow-xl" title="click here to reset details" type="button"
          @click.prevent="resetForm">Reset</button>
        <button class="hover:shadow-xl" title="click here to update details">Update</button>
      </div>
    </vee-form>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useForm } from 'vee-validate';

const props = defineProps(['id']);
const router = useRouter();

const studentId = ref(undefined);
const mark = ref("");
const grade = ref();
const subject = ref("");
const gender = ref("");
const text2Error = ref(null);
const { handleSubmit: handleVeeSubmit } = useForm();
const uri = `http://localhost:3000/teacherClasslist/${props.id}`;

let schema = {
  name: "requiredStudentName|min:3|max:15|alpha_spaces|excluded:name|excluded:test",
  grade: "requiredStudent|min_value:8|max_value:11|excluded:Please Select A Grade",
  subject: "requiredStudent|excluded:Please Select A Subject",
  gender: "requiredStudent|excluded:Please Select A Gender",
  "tos": "AllOptionsRequired"
}

const fetchStudent = async () => {
  try {
    const response = await fetch(uri);
    const data = await response.json();
    studentId.value = data.studentId;
    grade.value = data.grade;
    gender.value = data.gender;
    subject.value = data.subject;
    mark.value = data.mark;
  } catch (err) {
    console.error(err);
  }
};

const resetForm = async () => {
  grade.value = "";
  subject.value = "";
  mark.value = "";
}

const handleSubmit = async (e) => {
  try {
    text2Error.value = studentId.value.length >= 2 ? '' : 'Please Update with a Valid Student Name';
    e.preventDefault();
    if (!text2Error.value) {
      const student = {
        studentId: studentId.value,
        gender: gender.value,
        grade: grade.value,
        mark: mark.value,
        subject: subject.value,
      };
      await fetch(uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student),
      });
    }
    router.push('/teacher-classlist');
  } catch (err) {
    console.error(err);
  }
};

onMounted(fetchStudent);

defineExpose({
  studentId,
  mark,
  grade,
  subject,
  gender,
  text2Error,
  handleSubmit,
});
</script>

<style lang="scss" scoped>
main {
  padding: 10rem 2.5rem;
  padding-bottom: 0rem;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 105svh;
  width: 100%;

  header h1 {
    font-size: 2rem;
    font-style: bold;
    margin-bottom: .5rem;
  }
}

.form {
  border-left: .5rem #add solid;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgb(0 0 0 / 50%);
}

form {
  max-width: 420px;
  margin: .75rem auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 15px 0 5px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 20px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
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
  margin-bottom: 0px;
  margin-top: 15px;
  color: white;
  border-radius: 20px;

  &:active {
    transform: translateY(1px);
  }
}

.error-text {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.65rem;
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
</style>