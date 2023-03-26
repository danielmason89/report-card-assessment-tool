<template>
    <main>
        <header>
            <transition appear @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
                @before-leave="beforeLeave" @leave="leave" @after-appear="afterLeave">
                <h1 v-if="showTitle">Computer Science Teacher Class List</h1>
            </transition>
        </header>
        <section v-if="teacherClasslist.length">
            <transition name="list" @before-enter="pageBeforeEnter" @enter="pageEnter" appear>
                <div class="overflow-hidden classlist">
                    <router-link :to="{ name: 'AddStudent' }" title="Add a student to Classlist" tag="button"
                        class="material-icons students">
                        <h3>Add Student to Class</h3>add
                    </router-link>
                </div>
            </transition>
            <transition-group name="list" @before-enter="pageBeforeEnter" @enter="pageEnter" appear>
                <div v-for="(student, index) in teacherClasslist" :key="student.id" :data-index="index" class="classlist">
                    <router-link :to="{ name: 'TeacherClasslistDetails', params: { id: student.id } }">
                        <h2 @delete="handleDelete">{{ student.studentId }}</h2>
                    </router-link>
                </div>
            </transition-group>
        </section>
        <div v-else>
            <p>Loading Teacher Class List...</p>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { useRoute } from 'vue-router';

const router = useRoute();
const teacherClasslist = ref([]);
const showTitle = ref(true);

const beforeEnter = (el) => {
    el.style.transform = 'translateY(-60px)';
    el.style.opacity = 0;
};
const enter = (el, done) => {
    gsap.to(el, {
        y: 0,
        autoAlpha: 1,
        duration: 0.75,
        ease: "bounce.out",
        onComplete: done
    });
};
const afterEnter = () => {
    setTimeout(() => showTitle.value = false, 2000);
};
const beforeLeave = () => { };
const leave = () => { };
const afterLeave = () => { };

const pageEnter = (el, done) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(0px)";
    gsap.to(el, {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        delay: el.dataset.index * 0.2,
        ease: "bounce.out",
        onComplete: done
    });
};

const pageBeforeEnter = (el) => { };

const fetchTeacherClasslist = async () => {
    try {
        const res = await fetch('http://localhost:3000/teacherClasslist');
        const data = await res.json();
        teacherClasslist.value = data;
    } catch (err) {
        console.log(err.message);
    }
};

onMounted(() => {
    fetchTeacherClasslist();
});

const handleDelete = async (id) => {
    try {
        teacherClasslist.value = teacherClasslist.value.filter((student) => {
            return student.id !== id;
        });
        await fetch(`http://localhost:3000/teacherClasslist/${id}`, {
            method: 'DELETE'
        });
        router.push('/teacher-classlist');
    } catch (err) {
        console.log(err);
    }
};

defineExpose({
    teacherClasslist,
    handleDelete,
    beforeEnter,
    enter,
    afterEnter,
    showTitle,
    beforeLeave,
    leave,
    afterLeave,
    pageEnter,
    pageBeforeEnter
});
</script>

<style lang="scss" scoped>
main {
    padding: 10rem 2.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0;
    min-height: 94vh;

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
    gap: 1.5rem 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /* overflow: auto; */
    list-style: none;
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

.material-icons {
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
    border: .25px #000 solid;
}

.classlist a:hover {
    background: #add;
}


.material-icons {
    font-size: 1rem;
    margin-left: 10px;
    color: rgb(95, 79, 79);
    cursor: pointer;
}
</style>