<template>
    <div class="w-full font-din">
        <!-- Hidden Top Bar -->
        <div class="hidden-top-bar w-full h-14"></div>
        <!-- Hidden Top Bar -->

        <!-- Heading -->
        <div class="py-4">
            <div class="w-full px-4 py-2">
                <h1 class="font-din-regular text-xl text-blue-500">Edit Category</h1>
                <small class="text-blue-800">Fill all the fields to edit the new category.</small>
            </div>
        </div>
        <!-- Heading -->

        <!-- Body -->
        <div class="px-4">
            <form id="form" class="bg-blue-50 p-4 rounded-sm shadow-sm border border-blue-300" @submit.prevent="editCategory"
                novalidate>
                <div class="flex mb-4">
                    <label class="w-32 text-md pt-2 text-blue-500" for="title">Title</label>
                    <input v-model="title" class="border focus-visible:outline-none w-full h-10 rounded px-2" id="title"
                        type="text">
                </div>

                <div class="flex mb-4">
                    <label class="w-32 text-md pt-2 text-blue-500" for="image"><img width="30" height="30" class="rounded-full inline-block mr-1" :src="image" alt=""></label>
                    <input v-model="image" class="border focus-visible:outline-none w-full h-10 rounded px-2" id="image"
                        type="text" placeholder="Category Image">
                </div>

                <div class="flex">
                    <div class="w-32"></div>
                    <input type="submit" value="EDIT CATEGORY"
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
    async beforeRouteEnter(to, from, next) {
        const CategoryStore = useCategoryStore();
        await CategoryStore.getCategory(to.params.id)
        next()
    },
    data() {
        const CategoryStore = useCategoryStore();
        return {
            CategoryStore,
            title: CategoryStore.category.title,
            image: CategoryStore.category.image,
            errorMessage: null
        }
    },
    methods: {
        async editCategory() {
            try {
                if(this.title == '') throw push.error('Title is required!')
                if(this.image == '') throw push.error('Image is required!')
                await this.CategoryStore.editCategory(this.$route.params.id, this.title, this.image)
            } catch (error) {
                push.error(`${error}`)
            }
        }
    },
    mounted() {
        //this.getCategory()
    }
}
</script>

<style scoped></style>