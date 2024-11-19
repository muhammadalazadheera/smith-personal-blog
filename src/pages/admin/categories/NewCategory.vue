<template>
    <div class="w-full font-din">
        <!-- Hidden Top Bar -->
        <div class="hidden-top-bar w-full h-14"></div>
        <!-- Hidden Top Bar -->

        <!-- Heading -->
        <div class="py-4">
            <div class="w-full px-4 py-2">
                <h1 class="font-din-regular text-xl text-blue-500">New Category</h1>
                <small class="text-blue-800">Fill all the fields to add a new category.</small>
            </div>
        </div>
        <!-- Heading -->

        <!-- Body -->
        <div class="px-4">
            <form id="form" class="bg-blue-50 p-4 rounded-sm shadow-sm border border-blue-300" @submit.prevent="addNewCategory"
                novalidate>
                <div class="flex mb-4">
                    <label class="w-32 text-md pt-2 text-blue-500" for="title">Title</label>
                    <input v-model="title" class="border focus-visible:outline-none w-full h-10 rounded px-2" id="title"
                        type="text" placeholder="Title">
                </div>

                <div class="flex mb-4">
                    <label class="w-32 text-md pt-2 text-blue-500" for="image">Category Image</label>
                    <input v-model="image" class="border focus-visible:outline-none w-full h-10 rounded px-2" id="image"
                        type="text" placeholder="Category Image">
                </div>

                <div class="flex">
                    <div class="w-32"></div>
                    <input type="submit" value="ADD CATEGORY"
                        class="w-full h-10 p-2 bg-black font-din-regular text-md border font-bold text-white rounded">
                </div>
            </form>
        </div>
        <!-- Body -->
    </div>
</template>

<script>
import { useCategoryStore } from '../../../store/CategoryStore';
import { push } from 'notivue';

export default {
    data() {
        const CategoryStore = useCategoryStore();
        return {
            title: '',
            image: '',
            errorMessage: null,
            CategoryStore
        }
    },
    methods: {
        addNewCategory() {
            try {
                if (!this.title) throw push.error('Title is required!')
                if (!this.image) throw push.error('Category image is required!')

                this.CategoryStore.addNewCategory(this.title, this.image)
                document.getElementById("form").reset();
                this.title = ''
                this.image = ''
            } catch (error) {
                push.error('Category image is required!')
            }
        }
    }
}
</script>

<style scoped></style>