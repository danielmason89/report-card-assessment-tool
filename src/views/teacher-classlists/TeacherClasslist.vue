<template>
    <main>
    <header>
        <h1>Computer Science Teacher Class List</h1>
    </header>
    <section v-if="teacherClasslist.length">
        <div class="classlist">
        <router-link :to="{ name: 'AddStudent' }" title="add student to classlist" tag="button" class="material-icons students">
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
        async handleDelete() {
           try { this.id = this.id.filter((id) => {
                return id !== id
            }).then(() => { this.$router.push('/teacher-classlist')
      })} catch(err) { console.log(err)
      }
    }
    }
}
</script>

<style lang="scss" scoped>

main {
    padding: 10rem 2.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    overflow: auto;
        header h1 {
        font-size: 2rem;
        font-style: bold;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        margin-bottom: 1.5rem;
    }
}

section {
    display: grid;
    gap: 1rem 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding-bottom: auto;
}

section h3 {
    font-size: .95rem;
    font-style: bold;
    color: #444;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 2;
}

.material-icons{
    font-size: 1rem;
}


.students h2 {
    text-align: center;
}


.classlist a {
    background: #f4f4f4;
    padding: 1rem;
    border-radius: 10px;
    margin: 1rem;
    cursor: pointer;
    color: #444;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.classlist a:hover {
    background: #add;
    border: .5px #000 solid
}
</style>