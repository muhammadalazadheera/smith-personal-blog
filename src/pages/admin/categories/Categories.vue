<template>
    <div class="w-full font-din p-4">
        <div class="w-full h-14"></div>

        <div class="w-full flex justify-between items-center py-2">
            <div>
                <h1 class="font-din-regular text-xl text-blue-500">Categories</h1>
                <small class="text-blue-800">All the latest categories.</small>
            </div>
            <RouterLink class="font-din-regular text-white px-3 py-1 text-md bg-blue-500 shadow rounded-sm"
                to="create-new-category">New Category</RouterLink>
        </div>


        <div class="p-4 bg-blue-100 rounded-sm border-blue-500">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 shadow-sm shadow-gray-300">
                <thead class="text-md text-white uppercase bg-blue-500">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" class="px-6 py-3 text-right">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody class="text-base text-black">
                    <tr v-for="category in CategoryStore.categories" class="bg-blue-200 border-b border-blue-100">
                        <th scope="row" width="60%" class="px-6 py-2 font-medium text-black-900 whitespace-nowrap">
                            <img width="30" height="30" class="rounded-full inline-block mr-1" :src="category.image" alt="">
                            {{ category.title }}
                        </th>
                        <td class="px-6 py-2 text-right">
                            <RouterLink :to="{ name: 'EditCategory', params: { id: category.id } }"
                                class="font-medium text-blue-600 mr-2 hover:underline">Edit</RouterLink>
                            <a @click="CategoryStore.deleteCategory(category.id)"
                                class="cursor-pointer font-medium text-red-600 hover:underline">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { useCategoryStore } from '../../../store/CategoryStore';
    export default {
        async beforeRouteEnter(to, from, next) {
            const CategoryStore = useCategoryStore();
            await CategoryStore.getCategories()
            next()
        },
        data() {
            const CategoryStore = useCategoryStore();
            return {
                CategoryStore
            }
        }
    }
</script>