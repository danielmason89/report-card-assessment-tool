<template>
  <main>
    <header>
        <h1>Student Details</h1>
    </header>
    <section class="student" v-if="teacherClasslist">
      <div @click="showDetails = !showDetails"  class="actions">
        <h2 class="font-bold">{{ teacherClasslist.studentId }}</h2>
        <div class="icons">
          <router-link :to="{ name: 'UpdateStudent', params: { id: teacherClasslist.id  } }">
            <span @click="updateStudent" class="material-icons" title="click here to update student details">edit</span>
          </router-link>
          <span @click="deleteStudent" class="material-icons" title="click here to delete student from class list">delete</span>
          <span title="see student details/report card" class="material-icons">expand_more</span>
        </div>
      </div>
      <transition name="fade">
      <sub-section v-if="showDetails" class="details">
        <p>Student Id: {{ teacherClasslist.id}}</p>
        <p>Gender: {{ teacherClasslist.gender}}</p>
        <p>Grade: {{ teacherClasslist.grade}}</p>
        <p>{{teacherClasslist.subject }} : {{ teacherClasslist.mark}}</p>
      </sub-section>
    </transition>
    </section>
    <div v-else>
      <p>Loading Student Id...</p>
    </div>
</main>
</template>

<script>
import axios from 'axios';

export default {
  name: "TeacherClasslistDetails",
    props: ["id"],
    data() {
      return {
        teacherClasslist: null,
        showDetails: false,
        uri: 'http://localhost:3000/teacherClasslist/' + this.id
      }
    },
    methods: {
      async deleteStudent() {
       try { this.teacherClasslist = null;
        
        await axios.delete(this.uri)
        .then(() => { this.$router.push('/teacher-classlist');
      })
       } catch (err) { console.log(err)
       }
      }
    },
    async created() {
    try {
      const response = await axios.get('http://localhost:3000/teacherClasslist/' + this.id)
      this.teacherClasslist = response.data
    } catch (err) { console.log(err.message)
    }
    },
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

    header h1 {
    font-size: 2rem;
    font-style: bold;
}
  }

  .student{
    margin: 1rem 2.5rem;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.5);
    border-left: 4px solid #e90074;
    margin-bottom: 0.5rem;
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
    color: #add;
  }

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