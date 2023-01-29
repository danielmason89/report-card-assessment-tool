<template>
<main>
  <header>
    <h1>Add New Student to Class List</h1>
  </header>
    <form class="form" @submit.prevent="handleSubmit">
        <label>Student Name:</label>
        <input type="studentId" v-model="studentId"  required>
        <div v-if="text2Error" class="error">{{ text2Error }}</div>
        <label>Student Gender:</label>
        <select v-model="gender" required>
        <option disabled value>Please Select A Gender</option>
        <option value="Girl">Girl</option>
        <option value="Boy">Boy</option>
        <option value="Non-Binary">Non-Binary</option>
        <option value="LGBTQ+">LGBTQ+</option>
        </select>
        <label>Student Grade:</label>
        <select v-model="grade" required>
        <option disabled value>Please Select A Grade</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        </select>
        <label>Class Subject:</label>
        <select v-model="subject" required>
        <option disabled value>Please Select a Subject</option>
        <option value="Computer Science">Computer Science</option>
        </select>
        <div class="terms">
        <input type="checkbox" required>
        <label>All Options are Checked</label>
        </div>
        <div class="submit">
        <button title="click here to add student to classlist">Add Student</button>
        </div>
    </form>
</main>
</template>

<script>
import * as axios from "axios";

export default {
  name: "AddStudent",
  data() {
    return {
      studentId: "",
      gender:"",
      subject:"",
      grade: "",
      mark: "Not Completed",
      text2Error:null
    }
  },
  methods: {
    async handleSubmit() {
    try {this.text2Error = this.studentId.length >= 2 ? '' : "Please Enter a Valid Student Name"
      if(!this.text2Error) {
       let student = {
        "studentId": this.studentId,
        "gender": this.gender,
        "grade": this.grade,
        "mark": this.mark,
        "subject": this.subject,
       }
     await fetch("http://localhost:3000/teacherClasslist", {
       method: "POST",
       headers: {"Content-Type" : "application/json"},
       body: JSON.stringify(student)
      }).then(() => {
        this.$router.push('/teacher-classlist')
        }
      )} 
    }
    catch(err) { console.log(err)}
    }
  }
}
</script>

<style lang="scss" scoped>

    main {
        padding: 8rem 2.5rem;
        display: flex;
        flex-direction: column;
        position: relative;
        height: 110vh;
        width: 100%;

     header h1 {
    font-size: 2rem;
    font-style: bold;
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

    .material-icons{
    font-size: 24px;
    margin-left: 10px;
    color: rgb(95, 79, 79);
    cursor: pointer;
  }
  
.material-icons:hover {
    color: #add;
  }
</style>