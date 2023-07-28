<template>
  <main>
    <header>
      <h1 class="text-center text-md sm:text-left">Add New Student to Class List</h1>
    </header>
    <vee-form class="form" @submit="onSubmit" :validation-schema="schema" :initial-values="userData">
      <section>
        <label>Student Name:</label>
        <vee-field :bails="false" name="name" v-slot="{ field, errors }">
          <input type="text" placeholder="Enter Student's Name" class="vee-field" v-model="studentId"
            title="Enter Student's Name" aria-label="Enter Student's Name" v-bind="field" />
          <div class="p-2 text-xs text-red-600" v-for="error in errors" :key="error">{{ error }}</div>
        </vee-field>
      </section>
      <section>
        <label>Student Gender:</label>
        <vee-field as="select" class="select" name="gender" v-model="gender">
          <option disabled value="">Please Select A Gender</option>
          <option value="Girl">Girl</option>
          <option value="Boy">Boy</option>
          <option value="Non-Binary">Non-Binary</option>
          <option value="LGBTQ+">LGBTQ+</option>
        </vee-field>
        <ErrorMessage class="p-2 text-xs text-red-600" name="gender" />
      </section>
      <section>
        <label>Student Grade:</label>
        <vee-field as="select" class="select" v-model="grade" name="grade">
          <option disabled value>Please Select A Grade</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
        </vee-field>
        <ErrorMessage class="p-2 text-xs text-red-600" name="grade" />
      </section>
      <section>
        <label>Class Subject:</label>
        <vee-field as="select" class="select" v-model="subject" name="subject">
          <option disabled value>Please Select a Subject</option>
          <option value="Computer Science">Computer Science</option>
        </vee-field>
        <ErrorMessage class="p-2 text-xs text-red-600" name="subject" />
      </section>
      <div class="terms">
        <vee-field class="checkbox" type="checkbox" value="1" name="tos" />
        <label>All Options are Checked</label>
        <br />
        <ErrorMessage class="p-2 text-xs text-red-600" name="tos" />
      </div>
      <div class="submit space-x-[20px]">
        <button class="hover:shadow-xl" title="Reset" type="button" @click.prevent="resetForm">Reset</button>
        <button title="click here to add student to classlist">Add Student</button>
      </div>
    </vee-form>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useForm } from 'vee-validate';

const router = useRouter();
const studentId = ref('');
const gender = ref('');
const subject = ref('');
const grade = ref('');
const mark = ref('Not Completed');
const { handleSubmit: handleVeeSubmit } = useForm();

let schema = {
  name: "requiredStudentName|min:3|max:15|alpha_spaces|excluded:name|excluded:test",
  grade: "requiredStudent|min_value:8|max_value:11|excluded:Please Select A Grade",
  subject: "requiredStudent|excluded:Please Select A Subject",
  gender: "requiredStudent|excluded:Please Select A Gender",
  "tos": "AllOptionsRequired"
}

let userData = {
  grade: "Please Select A Grade",
  subject: "Please Select A Subject",
  gender: "Please Select A Gender"
}

const onSubmit = handleVeeSubmit(async () => {
  const student = {
    studentId: studentId.value,
    gender: gender.value,
    subject: subject.value,
    grade: grade.value,
    mark: mark.value
  };
  try {
    await axios.post('http://localhost:3000/teacherClasslist', student);
    router.push('/teacher-classlist');
  } catch (error) {
    console.error("Error while adding student:", error);
  }
})

const resetForm = async () => { }
</script>

<style lang="scss" scoped>
main {
  padding: 8.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  header h1 {
    font-size: 2rem;
    font-style: normal;
  }

}

.form {
  border-left: .5rem #add solid;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgb(0 0 0 / 50%);
  width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
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

.vee-field,
.select {
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
  margin-top: 20px;
  color: white;
  border-radius: 20px;

  &:active {
    transform: translateY(1px);
  }
}

.submit {
  text-align: center;
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
</style>