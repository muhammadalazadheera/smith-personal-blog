<template>
    <Heading :heading="this.$route.params.title" />
    <Blog />
    <Social />
</template>

<script>
import Blog from '../components/Blog.vue';
import Social from '../components/Social.vue';
import Heading from '../components/Heading.vue';
export default {
    components: {
        Blog,
        Social,
        Heading
    },
    mounted() {
        console.log(this.$route.params.title)
    }

}
</script>