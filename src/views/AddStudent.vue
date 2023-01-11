<template>
  <form @submit.prevent="handleSubmit">
    <label>Student Name:</label>
    <input type="studentId" v-model="studentId"  required>
    <div v-if="text2Error" class="error">{{ text2Error }}</div>
    <label>Student Gender:</label>
    <select v-model="gender">
      <option value="girl">Girl</option>
      <option value="boy">Boy</option>
      <option value="non-binary">Non-Binary</option>
      <option value="other">Other</option>
    </select>
    <label>Student Grade:</label>
    <select v-model="grade">
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
    </select>
    <label>Student Mark:</label>
    <select v-model="mark">
      <option value="a">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
      <option value="d">D</option>
      <option value="f">F</option>
      <option value="other">Other</option>
      <option value="not-complete">Not Completed</option>
    </select>
    <div class="terms">
      <input type="checkbox" v-model="terms" required>
      <label>All Options are Checked</label>
    </div>
    <div class="submit">
      <button>Add Student</button>
    </div>
  </form>
  <p>Class Name: {{ text1 }}</p>
  <p>Student Name: {{ text2 }}</p>
  <p>Student Gender: {{ gender }}</p>
  <p>Student Grade: {{ grade }}</p>
  <p>Student Mark: {{ mark }}</p>
  <p>Terms Accepted: {{ terms }}</p>
</template>

<script>
export default {
  data() {
    return {
      studentId: "",
      gender:"",
      grade: "",
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.text2Error = this.studentId.length > 5 ? '' : "Student Name must be at least 6 chars long"
      if(!this.text2Error) {
       let student = {
        "studentId": this.studentId,
        "gender": this.gender,
        "grade": this.grade
       }
       fetch("http://localhost:3000/teacherClasslist", {
       method: "POST",
       headers: {"Content-Type" : "application/json"},
       body: JSON.stringify(student)
      }).then(() => {
        this.$router.push({ <Home/> })
      })
      }
    }
  }
}
</script>

<style>
    form {
        max-width: 420px;
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
    input, select {
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
    }

    .submit {
      text-align: center;
    }

    .error{
      color: #ff0062;
      margin-top: 10px;
      font-size: 0.8rem;
      font-weight: bold;
    }
</style>