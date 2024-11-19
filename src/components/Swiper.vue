<template>
    <swiper :slides-per-view="1" :breakpoints="{ 768: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }"
        :space-between="5" :modules="modules" :freeMode="true" :navigation="{
            clickable: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }">
        <swiper-slide v-for="category in CategoryStore.categories">
            <div class="w-full sm:h-48 relative">
                <div class="cardOverlay absolute w-full h-full top-0 left-0 flex flex-col justify-end">
                    <RouterLink :to="{ name: 'BlogByCategory', params: { id: category.id, title: category.title } }"
                        class="text-center p-2 text-genzTextWhite text-lg">{{ category.title }}</RouterLink>
                </div>
                <img class="object-fill w-full h-full" :src="category.image" alt="">
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useCategoryStore } from '../store/CategoryStore';
import { RouterLink } from 'vue-router';
import Blog from './Blog.vue';

export default {
    data() {
        const CategoryStore = useCategoryStore()
        return {
            CategoryStore
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation]
        };
    },
};
</script>

<style scoped>
.cardOverlay {
    background: url(https://wp.alithemes.com/html/genz/demos/assets/imgs/page/homepage1/bg-trans.png);
    background-size: cover;
}
</style>