<template>
  <main>
      <header>
        <h1>Student Details</h1>
      </header>
    <div class="student" v-if="teacherClasslist">
      <div  class="actions">
        <h2>{{ teacherClasslist.studentId }}</h2>
        <div class="icons">
          <router-link :to="{ name: 'UpdateStudent', params: { id: teacherClasslist.id  } }">
            <span @click="updateStudent" class="material-icons">edit</span>
          </router-link>
          <span @click="deleteStudent" class="material-icons">delete</span>
          <!-- Having issue with delete functionality -->
          <span @click="showDetails = !showDetails" class="material-icons">expand_more</span>
        </div>
      </div>
      <div v-if="showDetails" class="details">
        <p>Student Id: {{ teacherClasslist.id}}</p>
        <p>Gender: {{ teacherClasslist.gender}}</p>
        <p>Grade: {{ teacherClasslist.grade}}</p>
        <p>Mark: {{ teacherClasslist.mark}}</p>
      </div>
    </div>
    <div v-else>
      <p>Loading Student Id...</p>
    </div>
</main>
</template>

<script>
export default {
    props: ["id"],
    data() {
      return {
        teacherClasslist: null,
        showDetails: false,
        uri: 'http://localhost:3000/teacherClasslist/' + this.id
      }
    },

  
    methods: {
      deleteStudent() {
        this.teacherClasslist = null;
        this.$router.push('/');
        fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.id))
        .catch((err) => console.log(err))
      }
    },
    mounted() {
      fetch('http://localhost:3000/teacherClasslist/' + this.id)
        .then((res) => res.json())
        .then((data) => this.teacherClasslist = data)
        .catch(err => console.log(err.message))


    },
      

    

}
</script>

<style>

  main {
    padding: 8rem 2.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
    width: 100%;
  }

  .student{
    margin: 1rem 2.5rem;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.5);
    border-left: 4px solid #e90074;
  }

  header {
    font-size: 1.5rem;
    font-style: bold;
  }

  h2 {
    padding-bottom: .25rem;
  }
  

.actions{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-icons{
  font-size: 24px;
  margin-left: 10px;
  color: rgb(95, 79, 79);
  cursor: pointer;
}

.material-icons:hover {
  color: rgb(142, 133, 133);
}

</style>