<template>
<h1>Science Class List</h1>
<div v-if="teacherClasslist.length">
    <div v-for="student in teacherClasslist" :key="student.id" class="classlist">
        <router-link :to="{ name: 'TeacherClasslistDetails', params: {id: student.id}}">
            <h2 @delete="handleDelete">{{ student.studentId }}</h2>
            <!-- <SingleStudent :student="student"/> -->
        </router-link>
    </div>
</div>
<div v-else>
    <p>Loading Teacher Class List...</p>
</div>
</template>

<script>
import SingleStudent from "../../components/SingleStudent";
export default {
    name: "TeacherClasslist",
    components: { },
    data() {
        return {
            teacherClasslist: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/teacherClasslist')
        .then((res) => res.json())
        .then((data) => this.teacherClasslist = data)
        .catch(err => console.log(err.message))
    },
    methods: {
        handleDelete(id) {
            this.id = this.id.filter((id) => {
                return id !== id
            }).then(() => {
        this.$router.push('/teacher-classlist')
      }).catch((err) => console.log(err))
        }
    }
}
</script>

<style>
.classlist h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}

.classlist h2:hover {
    background: #add;
}

.classlist a{
    text-decoration: none;
}

</style>