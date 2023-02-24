<template>
  <main>
    <header>
        <h1 class="light" title="Search Student Class List">Search Student Class List</h1>
    </header>
    <section>
      <form class="form" @submit.prevent="handleSubmit">
        <label title="Student Name">Student Name:</label>
        <select v-model="teacherClasslist.studentId" required>
          <option disabled value>Please Select A Student</option>
          <option :title="studentId.studentId
          " v-for="studentId in teacherClasslist" :key="studentId.studentId" :value="studentId.studentId">
          {{ studentId.studentId }}
          </option>
        </select>
        <div class="terms">
          <input type="checkbox" required>
          <label>All Options are Checked</label>
        </div>
        <div class="submit">
          <button class="transition duration-300 ease-out transform hover:scale-125 hover:bg-opacity-50 hover:shadow-xl" title="click here to search classlist for child">Search Classlist</button>
        </div>
      </form>
    </section>
      <section  @click="showDetails = !showDetails" v-if="results" class="report-card" >
      <header>
        <h3 title="Student Report Card" class="text-xl text-black-400">Student Report Card</h3>
        <span  title="see student details/report card" class="material-icons">expand_more</span>
      </header>
      <transition name="fade">
      <div v-if="showDetails" class="details">
        <p :title="results.studentId" class="font-bold">{{ results.studentId }}</p>
        <p :title="results.id"><span title="Student ID">Student ID:</span> {{ results.id }}</p>
        <p :title="results.grade"><span title="Student Grade">Student Grade:</span> {{ results.grade }}</p>
        <p :title="results.mark"><span :title="results.subject">{{results.subject}}</span> : {{ results.mark }}</p>
      </div>
    </transition>
    </section>
  </main>
</template>

<script>
export default {
  name: "Parent",
  props: ["id"],
  data() {
    return {
      teacherClasslist: "",
      formData: {
      mark: "",
      studentId: "",
      grade: "",
      subject: "",
      },
      showDetails: null,
      results: false,
    }
  },

  async created() {
    try { 
      await fetch('http://localhost:3000/teacherClasslist')
        .then((res) => res.json())
        .then((data) => this.teacherClasslist = data)
    }  catch (err) { console.log(err.message)
    }
    },

  methods: {
  async handleSubmit() {
      await fetch(`http://localhost:3000/teacherClasslist?studentId=${this.teacherClasslist.studentId}`)
        .then((res) => res.json())
        .then(data => {
          this.results = data[0]
        })
        .catch(err => console.log(err.message))
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
    height: 100vh;
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
      font-size: .8rem;
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

/* Animation */

/* Animations */
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active, 
.fade-leave-active {
  transition: all .5s ease;
}

.fade-leave-to{
  opacity: 0;
}
</style>