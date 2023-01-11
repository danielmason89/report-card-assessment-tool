<template>
<h1>Teacher Class List</h1>
<div v-for="student in teacherClasslist" :key="student.id" class="job">
    <router-link :to="{ name: 'TeacherClasslistDetails', params: {id: student.id}}">
        <h2>{{ student.studentId}}</h2>
    </router-link>
</div>
</template>

<script>
export default {
    data() {
        return {
            teacherClasslist: [
                {studentId: "Mark", id:1, grade: "A"},
                {studentId: "Phuong", id:2, grade: "A+"},
                {studentId: "Joan", id:3, grade: "B+"},
            ]
        }
    }
}
</script>

<style>
.job h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}

.job h2:hover {
    background: #add;
}

.job a{
    text-decoration: none;
}

</style>