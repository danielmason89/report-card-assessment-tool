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
        <div class="terms">
          <input type="checkbox" required>
          <label>All Options are Checked</label>
        </div>
        <div class="submit">
          <button title="click here to search classlist for child">Search Classlist</button>
        </div>
      </form>
    </section>
      <section class="report-card" >
      <header>
        <h3>Student Report Card</h3>
        <span @click="showDetails = !showDetails" title="see student details/report card" class="material-icons">expand_more</span>
      </header>
      <div v-if="showDetails" class="details">
        <p>{{ results.studentId }}</p>
        <p>Student ID: {{ results.id }}</p>
        <p>Student Grade: {{ results.grade }}</p>
        <p>Student Mark: {{ results.mark }}</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      teacherClasslist: [],
      formData: {
      mark: "",
      studentId: "",
      grade: "",
      },
      showDetails: null,
      results: [],
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
      await fetch(`http://localhost:3000/teacherClasslist?studentId=${this.teacherClasslist.studentId}`)
        .then((res) => res.json())
        .then(data => {
          this.results = data[0]
        })
        .catch(err => console.log(err.message))
      result: []
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

.report-card {
  margin: 1rem 2.5rem;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.5);
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
    input, select {
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