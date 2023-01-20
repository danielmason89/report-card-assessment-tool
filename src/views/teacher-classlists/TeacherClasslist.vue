<template>
    <main>
    <header>
        <h1>Computer Science Teacher Class List</h1>
    </header>
    <section v-if="teacherClasslist.length">
        <div class="classlist">
        <router-link :to="{ name: 'AddStudent' }" title="add student to classlist" tag="button" class="material-icons">
        <h3>Add Student to Class</h3>add
        </router-link>
        </div>
        <div  v-for="student in teacherClasslist" :key="student.id" class="classlist">
            <router-link :to="{ name: 'TeacherClasslistDetails', params: {id: student.id}}" >
                <h2 @delete="handleDelete">{{ student.studentId }}</h2>
            </router-link>
        </div>
    </section>
    <div v-else>
        <p>Loading Teacher Class List...</p>
    </div>
</main>
</template>

<script>
export default {
    name: "TeacherClasslist",
    components: { },
    data() {
        return {
            teacherClasslist: []
        }
    },
    async created() {
      try { await fetch('http://localhost:3000/teacherClasslist')
        .then((res) => res.json())
        .then((data) => this.teacherClasslist = data)
      } catch (err) { console.log(err.message)
      }
    },
    methods: {
       async handleDelete(id) {
           try { this.id = this.id.filter((id) => {
                return id !== id
            }).then(() => {
       this.$router.push('/teacher-classlist')
      })} catch(err) { console.log(err)
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
}

header {
    font-size: 1.5rem;
    font-style: bold;
}

.classlist {
    display: flex;
    flex-direction: row;
}

.classlist a {
    background: #f4f4f4;
    padding: 1rem;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}

.classlist a:hover {
    background: #add;
}

.classlist a {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    border-radius: 2px #000 solid;
}
</style>