<template>
    <section class="p-3 mb-4 border border-gray-200 rounded">
        <div v-show="!showForm">
            <h4 class="inline-block text-2xl font-bold">Class Name</h4>
            <button class="float-right px-2 py-1 ml-1 text-sm text-white bg-red-600 rounded"
                @click.prevent="deleteClassList">
                <i class="fa" v-icon="'times'"></i>
            </button>
            <button class="float-right px-2 py-1 ml-1 text-sm text-white bg-blue-600 rounded"
                @click.prevent="showForm = !showForm">
                <i class="fa" v-icon="'pencil-alt'"></i>
            </button>
        </div>
        <div v-show="showForm">
            <div class="p-4 mb-4 font-bold text-center text-white" v-if="show_alert" :class="alert_variant">
                {{ alert_message }}
            </div>
            <vee-form :validation-schema="schema" @submit="edit">
                <div class="mb-3">
                    <label class="inline-block mb-2">Class Title</label>
                    <vee-field type="text" name="class_modified_title" class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                        transition duration-500 focus:outline-none focus:border-black rounded"
                        placeholder="Enter Class Title" @input="updateUnsavedFlag(true)" />
                    <ErrorMessage class="p-2 text-xs text-red-600" name="class_modified_title" />
                </div>
                <div class="mb-3">
                    <label class="inline-block mb-2">Genre</label>
                    <vee-field type="text" name="class_genre" class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                        transition duration-500 focus:outline-none focus:border-black rounded"
                        placeholder="Enter Genre" @input="updateUnsavedFlag(true)" />
                    <ErrorMessage class="p-2 text-xs text-red-600" name="class_genre" />
                </div>
                <button type="submit" class="py-1.5 px-3 rounded text-white bg-green-600" :disabled="in_submission">
                    Submit
                </button>
                <button type="submit" class="py-1.5 px-3 rounded text-white bg-gray-600" @click.prevent="showForm = false"
                    :disabled="in_submission">
                    Go Back
                </button>
            </vee-form>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const showForm = ref(false);
const in_submission = ref(false);
const show_alert = ref(false);
const alert_variant = 'bg-blue-600';
const alert_message = 'Please wait! Updating ClassList Info...';

const classlist = {
    type: Object,
    required: true,
}
const updateClassList = {
    type: Function,
    required: true,
}
const removeClassList = {
    type: Function,
    required: true,
}
const updateUnsavedFlag = {
    type: Function
}
const index = {
    type: Number,
    required: true,
}
const schema = {
    class_modified_title: "required",
    class_genre: "required|alpha_spaces",
}

const edit = async () => {
    in_submission.value = true;
    show_alert.value = true;
    alert_variant.value = 'bg-blue-600';
    alert_message.value = 'Please wait! Updating ClassList Info...';
    console.log(' classlist was edited');
    try {

    } catch (error) {
        in_submission.value = false;
        alert_variant.value = 'bg-red-600';
        alert_message.value = 'Something went wrong! Try again later...';
    }
    updateClassList(index, values);
    in_submission.value = false;
    alert_variant.value = 'bg-green-600';
    alert_message.value = 'ClassList Info Updated Successfully!';
}

const deleteClassList = async () => {
    console.log(' classlist was deleted');
    removeClassList(index);
}


</script>

<style lang="scss" scoped></style>