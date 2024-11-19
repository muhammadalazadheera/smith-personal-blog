<template>
    <Hero />
    <div class="my-0 mx-auto relative mt-10 rounded-lg">
        <div class="my-0 mx-auto p-5">
            <div class="bg-gray-500/50 mb-2 inline-block px-10 py-2 rounded-3xl border border-genz">
                <p class="font-bold">BIO</p>
            </div>
            <p class="text-lg text-genzTextDark text-justify">
                Suspendisse in imperdiet purus. <a href="#" class="text-cyan-500">Maecenas id vestibulum nisl</a>. Maecenas nec pharetra arcu, ac mattis urna. Nunc quis quam augue. Duis porta condimentum mi, id dignissim libero malesuada non. Donec eget volutpat tellus. Sed dapibus mauris a egestas feugiat. Vivamus viverra sed risus sed accumsan. Nulla nisl risus, rutrum non congue et, sagittis at risus. Curabitur mollis odio et mauris feugiat maximus. Mauris condimentum orci vel maximus egestas. Aliquam mollis leo velit, eget auctor tellus condimentum a. Donec nec purus sed leo porta tristique vitae a erat. Donec pharetra et nulla id dictum.
                <br><br>
                In fermentum ligula nec orci porta, et euismod ipsum euismod. In hac habitasse platea dictumst. Donec dictum efficitur elit a egestas. Morbi congue dignissim arcu nec fermentum. Class aptent taciti <a class="text-red-500" href="#">sociosqu ad litora</a> conubia nostra, per inceptos himenaeos. Praesent vitae porttitor lorem, vitae viverra arcu. Curabitur felis turpis, suscipit vitae sapien non, blandit dignissim tellus. Aenean in vehicula turpis. Vestibulum nulla quam, tempus vel tempor eget, pharetra nec dui. Nulla mollis ac eros ut condimentum. Nulla sed urna laoreet, accumsan mauris ut, vestibulum mauris. Phasellus vulputate scelerisque diam venenatis elementum. Fusce vel posuere dolor, in laoreet augue.
            </p>
            <div class="bg-gray-500/50 mt-10 mb-2 inline-block px-10 py-2 rounded-3xl border border-genz">
                <p class="font-bold">EDUCATION</p>
            </div>
            <p class="text-lg text-genzTextDark text-justify">
                Suspendisse in imperdiet purus. <a href="#" class="text-cyan-500">Maecenas id vestibulum nisl</a>. Maecenas nec pharetra arcu, ac mattis urna. Nunc quis quam augue. Duis porta condimentum mi, id dignissim libero malesuada non. Donec eget volutpat tellus. Sed dapibus mauris a egestas feugiat. Vivamus viverra sed risus sed accumsan. Nulla nisl risus, rutrum non congue et, sagittis at risus. Curabitur mollis odio et mauris feugiat maximus. Mauris condimentum orci vel maximus egestas. Aliquam mollis leo velit, eget auctor tellus condimentum a. Donec nec purus sed leo porta tristique vitae a erat. Donec pharetra et nulla id dictum.
            </p>
        </div>
    </div>
    <Social/>
</template>

<script>
    import Hero from '../components/Hero.vue';
    import Social from '../components/Social.vue';

    export default {
       components: {
        Hero,
        Social
       } 
    }
</script>
