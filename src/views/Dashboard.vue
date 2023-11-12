<template>
    <main>
        <section class="container mx-auto mt-6">
            <div class="md:grid md:grid-cols-3 md:gap-4">
                <div class="col-span-1">
                    <Upload ref="upload" :addClassList="addClassList" />
                </div>
                <div class="col-span-2">
                    <div class="relative flex flex-col bg-white border border-gray-200 rounded">
                        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
                            <h1 class="card-title">My ClassLists
                            </h1>
                            <i :class="'float-right text-2xl text-green-400 fa fa-compact-disc'"></i>
                        </div>
                        <div class="p-6">
                            <CompositionItem :updateClassList="updateClassList" index="i" :classLists="classLists"
                                :removeClassList="removeClassList" :updateUnsavedFlag="updateUnsavedFlag" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import Upload from '../components/Upload.vue';
import CompositionItem from '../components/CompositionItem.vue';
import { ref } from 'vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const classLists = ref([]);
const unsavedFlag = ref(false);

const updateClassList = (i, values) => {
    classLists.value[i].class_modified_title = values.class_modified_title;
    classLists.value[i].genre = values.genre;
};

const removeClassList = (i) => {
    classLists.value.splice(i, 1);
};

const addClassList = (values) => {
    classLists.value.push(values);
};

const updateUnsavedFlag = (value) => {
    unsavedFlag.value = value;
};

const beforeRouteLeave = (to, from, next) => {
    if (!unsavedFlag) {
        next();
    } else {
        const leave = confirm("You have unsaved changes. Are you sure you want to leave this page?");
        next(leave);
    }
};

// const beforeRouteLeave = (to, from, next) => {
//     this.$refs.upload.cancelUploads();
//     next();
// }

// const beforeRouteEnter = (to, from, next) => {
//     if (store.state.userLoggedIn) {
//         next();
//     } else {
//         next({ name: 'home' });
//     }

</script>

<style lang="scss" scoped>
main {
    padding: 10rem 2.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100vh;
    overflow: auto;
}
</style> 