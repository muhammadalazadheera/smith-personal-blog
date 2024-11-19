<template>
    <div class="flex flex-wrap justify-around bg-secondary rounded-lg border border-tertiary mt-10 p-5">
        <div v-for="blog in BlogStore.blogs" class="card w-full min-h-60">
            <img class="ImageInCard w-full h-full object-cover rounded-lg" :src="blog.featured_image" alt="">
            <div
                class="cardOverlay rounded-lg absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4 font-bold">
                <RouterLink :to="{name:'SingleBlog', params:{id: blog.id}}" class="text-genzTextWhite hover:text-hoverColor transition-all text-2xl">{{ blog.title
                    }}</RouterLink>
                <div class="flex w-full h-10 items-center my-3">
                    <img class="h-10 w-10 rounded-full"
                        src="https://genz-nextjs-v3.vercel.app/assets/imgs/page/homepage2/author.png" alt="">
                    <a class="mx-4 text-genzTextWhite font-bold" href="#">Steven Smith</a>
                    <p class="text-genzTextDark">{{ blog.created_at }}</p>
                </div>
            </div>
        </div>
        <button class="w-full h-12 genZButton rounded-lg font-extrabold font-din-medium mr-4 bg-black text-white">Load
            More</button>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { useBlogStore } from '../store/BlogStore';
export default {
    data() {
        const BlogStore = useBlogStore()
        return {
            BlogStore
        }
    }
}
</script>

<style>
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