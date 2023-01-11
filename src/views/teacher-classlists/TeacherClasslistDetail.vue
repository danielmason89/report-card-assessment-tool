<template>
<h1>Student Details</h1>
<div class="student" v-if="teacherClasslist">
  <div  class="actions">
    <h3>Name: {{ teacherClasslist.studentId }}</h3>
    <div class="icons">
      <span @click="updateStudent" class="material-icons">update</span>
      <span @click="deleteStudent" class="material-icons">delete</span>
      <!-- Having issue with delete functionality -->
      <span @click="showDetails = !showDetails" class="material-icons">expand_more</span>
    </div>
  </div>
  <div v-if="showDetails" class="details">
    <p>Student Id: {{ teacherClasslist.id}}</p>
    <p>Gender: {{ teacherClasslist.gender}}</p>
    <p>Grade: {{ teacherClasslist.grade}}</p>
  </div>
</div>
<div v-else>
  <p>Loading Student Id...</p>
</div>
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
  .student{
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.5);
    border-left: 4px solid #e90074;
  }

  h2 {
    cursor: pointer;
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