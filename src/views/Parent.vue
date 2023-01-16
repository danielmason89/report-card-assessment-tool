<template>
  <main>
    <header>
        <h1>Search Student Class List</h1>
    </header>
    <section>
      <form class="form" @submit.prevent="handleSubmit">
        <label>Student Name:</label>
        <select v-model="teacherClasslist.studentId" required>
          <option v-for="studentId in teacherClasslist" :key="studentId.studentId" :value="studentId.studentId">
          {{ studentId.studentId }}
          </option>
        </select>
        <label>Student Gender:</label>
        <select v-model="gender" required>
          <option value="Girl">Girl</option>
          <option value="Boy">Boy</option>
          <option value="Non-Binary">Non-Binary</option>
          <option value="Other">Other</option>
        </select>
        <label>Student Grade:</label>
       <select v-model="grade" required>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
        </select>
        <div class="terms">
          <input type="checkbox" required>
          <label>All Options are Checked</label>
        </div>
        <div class="submit">
          <button title="click here to search classlist for child">Search Classlist</button>
        </div>
      </form>
    </section>
    <header>
      <h3>Student Report Card</h3>
    </header>
    <section>
      <p>Student Name: {{ this.studentId }}</p>
      <p>Student Gender: {{ this.gender }}</p>
      <p>Student Grade: {{ this.grade }}</p>
      <p>Student Mark: {{ this.mark }}</p>
    </section>
  </main>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      teacherClasslist: [],
      studentData : {
      mark: "",
      studentId: "",
      grade: "",
      },
      formData: {
      mark: "",
      studentId: "",
      grade: "",
      },
      results: []
    }
    
  },
  mounted() {
        fetch('http://localhost:3000/teacherClasslist')
        .then((res) => res.json())
        .then((data) => this.teacherClasslist = data)
        .catch(err => console.log(err.message))

    },
  methods: {
  async handleSubmit() {
      try {
      let data =  'http://localhost:3000/teacherClasslist/';
      if(!data.ok) {
        throw Error("Student not in ClassList");
      }
      fetch(`http://localhost:3000/teacherClasslist?{this.formData.studentId}&mark=${this.formData.mark}&gender=${this.formData.gender}`);
        this.results = await response.json(url);
      } catch (err) {err.value = err.message
        console.log(err.value)
      }
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