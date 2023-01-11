<template>
<div v-if="teacherClasslist">
  <h1>Teacher Classlist Details Page</h1>
  <h2>Student Name: {{ teacherClasslist.studentId }}</h2>
  <p>Student Id: {{ teacherClasslist.id}}</p>
  <p>Gender: {{ teacherClasslist.gender}}</p>
  <p>Grade: {{ teacherClasslist.grade}}</p>
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
        teacherClasslist: null
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

</style>