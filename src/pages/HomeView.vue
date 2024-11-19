<template>
    <Hero />
    <div class="bg-secondary flex flex-col md:flex-row p-5 mt-10 border border-genz rounded-lg">
        <div class="w-full md:w-1/3 lg:w-1/6 text-genzTextDark pr-5">
            <h2 class="text-2xl font-[900]">Hot Topics</h2>
            <p class="my-5">Don't miss out on the latest news.</p>
            <div class="flex">
                <div class="text-center swiper-button-prev w-10 h-10 bg-tertiary rounded-full mr-2">
                    <button class="text-2xl font-bold">&#8592;</button>
                </div>
                <div class="text-center swiper-button-next w-10 h-10 bg-tertiary rounded-full">
                    <button class="text-2xl font-bold">&#8594;</button>
                </div>
            </div>
        </div>
        <div class="w-full md:w-2/3 lg:w-10/12 mt-10 md:mt-0">
            <Swiper />
        </div>
    </div>

    <div class="mt-10 px-5 md:px-0">
        <h2 class=" text-4xl font-bold genz-gradient-text">Latest Articles</h2>
        <p class=" text-genzTextWhite">Discover the most recent articles in all topics</p>
    </div>
    <Blog />
    <FacebookComments :href="this.$route.currentRoute" />
    <Social />
</template>

<script>
import Hero from '../components/Hero.vue';
import Social from '../components/Social.vue';
import Swiper from '../components/Swiper.vue';
import Blog from '../components/Blog.vue'
import { useBlogStore } from '../store/BlogStore';
import { useCategoryStore } from '../store/CategoryStore';
import FacebookComments from '../components/FacebookComments.vue';
export default {
    async beforeRouteEnter(to, from, next) {
        const BlogStore = useBlogStore()
        const CategoryStore = useCategoryStore()
        await BlogStore.getBlogs()
        await CategoryStore.getCategories()
        next()
    },
    components: {
        Swiper,
        Hero,
        Social,
        Blog,
        FacebookComments
    }
}
</script>

<style scoped>
.cardOverlay {
    background: url(https://wp.alithemes.com/html/genz/demos/assets/imgs/page/homepage1/bg-trans.png);
    background-size: cover;
}

.ImageInCard {
    transition: all ease 1.1s;
}

.card:hover .ImageInCard {
    transform: scale(1.1);
}
</style>