<template>
    <div>
        <Heading heading="Blogs" />
        <Blog />
        <Social />
    </div>
</template>

<script>
import Blog from '../components/Blog.vue';
import Heading from '../components/Heading.vue';
import Social from '../components/Social.vue';
import { useBlogStore } from '../store/BlogStore';
import FacebookComments from '../components/FacebookComments.vue';
export default {
    async beforeRouteEnter(to, from, next) {
        const BlogStore = useBlogStore()
        await BlogStore.getBlogs()
        next()
    },
    data() {
        const BlogStore = useBlogStore()
        return {
            BlogStore
        }
    },
    components: {
        Blog,
        Social,
        Heading,
        FacebookComments
    }
}
</script>