<template>
    <div class="relative flex flex-col bg-white border border-gray-200 rounded">
        <header class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <h1 class="card-title">Upload ClassList</h1>
            <i class="float-right text-2xl text-green-400 fas fa-upload"></i>
        </header>
        <section class="p-6">
            <!-- Upload Dropbox -->
            <div class="w-full px-10 py-20 text-center text-gray-400 transition duration-500 border border-gray-400 border-dashed rounded cursor-pointer hover:text-white hover:bg-green-400 hover:border-green-400 hover:border-solid"
                :class="{ 'bg-green-400 border-green-400 border-solid': is_dragover }" @drag.prevent.stop=""
                @dragstart.prevent.stop="" @dragend.prevent.stop="is_dragover = false"
                @dragover.prevent.stop="is_dragover = true" @dragenter.prevent.stop="is_dragover = true"
                @dragleave.prevent.stop="is_dragover = false" @drop.prevent.stop="upload($event)">
                <h5>Drop your files here</h5>
            </div>
            <input type="file" multiple @change="upload($event)" />
            <hr class="my-6" />
            <!-- Progress Bars -->
            <div class="mb-4" v-for="upload in uploads" :key="upload.name">
                <!-- File Name -->
                <div class="text-sm font-bold" :class="upload.text_class">
                    <i :class="upload.icon"></i> {{ upload.name }}
                </div>
                <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
                    <!-- Inner Progress Bar -->
                    <div class="transition-all progress-bar" :class="upload.variant"
                        :style="{ width: upload.current_progress + '%' }"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const is_dragover = ref(false);
const uploads = ref([]);

const upload = ($event) => {
    is_dragover.value = false;
    const files = $event.dataTransfer ? [...$event.dataTransfer.files] : [...$event.target.files];
    console.log(files);
    files.forEach((file) => {
        if (file.type !== 'application/pdf' || 'audio/mpeg' || 'audio/mp3') {
            return;
        }

        const uploadIndex = uploads.push({
            task,
            current_progress: 0,
            name: file.name,
            variant: 'bg-blue-400',
            icon: 'fas fa-spinner fa-spin',
            text_class: '',
        }) - 1;
    });
    console.log(files);
}

// const cancelUploads = () => {
//     this.uploads.forEach((upload) => {
//         upload.task.cancel();
//     });
// }

// const beforeUnmount = () => {
//     this.uploads.forEach((upload) => {
//         upload.task.cancel();
//     });
// }


// export default {
//     methods: {
//         upload($event) {
//                 const storageRef = storage.ref(); // music-c2596.appspot.com
//                 const songsRef = storageRef.child(`songs/${file.name}`); // music-c2596.appspot.com/songs/example.mp3
//                 const task = songsRef.put(file);

//                 const uploadIndex = this.uploads.push({
//                     task,
//                     current_progress: 0,
//                     name: file.name,
//                     variant: 'bg-blue-400',
//                     icon: 'fas fa-spinner fa-spin',
//                     text_class: '',
//                 }) - 1;

//                 task.on('state_changed', (snapshot) => {
//                     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                     this.uploads[uploadIndex].current_progress = progress;
//                 }, (error) => {
//                     this.uploads[uploadIndex].variant = 'bg-red-400';
//                     this.uploads[uploadIndex].icon = 'fas fa-times';
//                     this.uploads[uploadIndex].text_class = 'text-red-400';
//                     console.log(error);
//                 }, async () => {
//                     const song = {
//                         uid: auth.currentUser.uid,
//                         display_name: auth.currentUser.displayName,
//                         original_name: task.snapshot.ref.name,
//                         modified_name: task.snapshot.ref.name,
//                         genre: '',
//                         comment_count: 0,
//                     };

//                     song.url = await task.snapshot.ref.getDownloadURL();
//                     await songsCollection.add(song);

//                     this.uploads[uploadIndex].variant = 'bg-green-400';
//                     this.uploads[uploadIndex].icon = 'fas fa-check';
//                     this.uploads[uploadIndex].text_class = 'text-green-400';
//                 });
//             });

//             console.log(files);
//         },
//     },
// };
</script>

<style lang="scss" scoped></style>