<template>
<main>
  <header>
    <h1>Update Student Details </h1>
  </header>
    <form class="form" @submit.prevent="handleSubmit">
      <label>Student Name:</label>
      <input type="studentId" v-model="studentId"  required>
      <!-- <div v-if="text2Error" class="error">{{ text2Error }}</div> -->
      <label>Student Grade:</label>
      <select v-model="grade" required>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
      </select>
      <label>Student Mark:</label>
      <select v-model="mark" required>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="F">F</option>
        <option value="other">Other</option>
        <option value="not-complete">Not Completed</option>
      </select>
      <div class="terms">
        <input type="checkbox" required>
        <label>All Options are Checked</label>
      </div>
      <div class="submit">
        <button title="click here to update details">Update Student Info</button>
      </div>
    </form>
</main>
</template>

<script>
export default {
    props: ["id"],
    data() {
     return {
      studentId: "",
      mark:"",
      grade: "",
      uri: "http://localhost:3000/teacherClasslist/" + this.id,
    }
},
mounted() {
    fetch(this.uri)
    .then(res => res.json())
    .then(data => {
        this.studentId = data.studentId
        this.grade = data.grade
        this.mark = data.mark
    })
    },
    methods: {
      handleSubmit() {
        fetch(this.uri, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ studentId: this.studentId, grade: this.grade, mark: this.mark})
        }).then(() => {this.$router.push('/teacher-classlist')})
          .catch(err => console.log(err))
      }
    }
}
</script>

<style scoped>

main {
    padding: 8rem 2.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
    width: 100%;
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