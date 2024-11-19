<template>
    <div class="h-32 p-4 w-full flex items-center justify-center border border-tertiary mt-10 rounded-lg">
        <h1 class="text-balance my-3 leading-0 genz-gradient-text text-2xl font-[900] capitalize">{{
            BlogStore.blog.blog.title }}</h1>
    </div>
    <div class="w-full flex justify-between mt-10">
        <div class="w-full md:w-3/5">
            <div class="bg-gray-500/50 mb-2 inline-block px-10 py-2 rounded-lg border border-genz">
                <p class="font-bold">{{ BlogStore.blog.category.title }}</p>
            </div>
            <img v-if="BlogStore.blog.blog.featured_image" class="w-full h-96 object-cover mb-10 rounded-xl" :src="BlogStore.blog.blog.featured_image">
            <div v-html="BlogStore.blog.blog.body"></div>
        </div>
        <div class="px-3 pb-3 w-2/6 border border-genz h-fit bg-tertiary rounded-lg hidden md:block">
            <!-- Single Blog Starts -->
            <div v-for="blog in BlogStore.blogs"
                class="rounded-sm shadow-sm mt-3 flex flex-col p-4 sm:p-0 md:p-2 sm:flex-row justify-between bg-secondary border-b border-tertiary">
                <div class="md:w-2/5 sm:w-4/5 pr-4 pt-3">
                    <img v-if="blog.featured_image" style="width: 100px; height: 100px;" class="sbb-img rounded-full object-cover"
                        :src="blog.featured_image">
                </div>
                <div class="w-full md:w-3/5 flex flex-col">
                    <div class="flex">
                        <div class="w-8 h-8"><img class="rounded-full w-full h-full shadow-lg"
                                src="https://genz-nextjs-v3.vercel.app/assets/imgs/page/homepage1/author.jpg" alt="">
                        </div>
                        <div class="text-xs mx-2 text-genzTextDark">
                            <p class="flex">Steven Smith<svg xmlns="http://www.w3.org/2000/svg" width="19"
                                    viewBox="0 0 19 19" class="blog-post-homepage-description-fill"
                                    style="fill-rule: evenodd;">
                                    <path
                                        d="M15.3812,6.495914 L12.6789333,8.77258837 C12.6191333,8.84477644 12.5099333,8.85722265 12.4354,8.79997005 C12.4215333,8.79001308 12.4094,8.77756686 12.3998667,8.76429089 L9.78686667,6.14327115 C9.67766667,5.99225704 9.46186667,5.95491839 9.305,6.05863687 C9.26946667,6.08186981 9.23913333,6.11091099 9.21573333,6.14493065 L6.60013333,8.81075677 C6.5464,8.88626383 6.43893333,8.90534803 6.3592,8.85390366 C6.34446667,8.84394669 6.33146667,8.83233022 6.32106667,8.81905425 L3.61966667,6.50587098 C3.5018,6.36149485 3.28426667,6.33577266 3.13346667,6.44861837 C3.0494,6.51167921 3,6.60792997 3,6.70998895 L4,14 L15,14 L16,6.70169148 C16,6.51831719 15.8448667,6.36979232 15.6533333,6.36979232 C15.5476,6.36979232 15.4470667,6.41625821 15.3812,6.495914 Z">
                                    </path>
                                </svg></p>
                            <p class="">a month ago</p>
                        </div>
                    </div>
                    <RouterLink class="block mt-5 hover:text-blue-500 text-sm font-bold text-genzTextDark text-blance"
                        :to="{ name: 'SingleBlog', params: { id: blog.id } }">
                        {{ blog.title }}
                    </RouterLink>
                </div>
            </div>
            <!-- Single Blog Ends -->
        </div>
    </div>
</template>

<script>
import { useBlogStore } from '../store/BlogStore';
export default {
    async beforeRouteUpdate(to, from, next) {
        const BlogStore = useBlogStore();
        await BlogStore.getBlog(to.params.id);
        next();
    },
    data() {
        const BlogStore = useBlogStore()
        return {
            BlogStore
        }
    }
}
</script>