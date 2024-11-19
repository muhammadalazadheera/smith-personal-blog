<template>
    <div class="relative">
        <div v-if="mmenu"
            class="absolute w-screen top-0 left-0 z-[999] flex items-center justify-center md:hidden bg-primary text-genzTextWhite">
            <ul class="list-none text-center py-5">
                <li class="mr-5 inline uppercase"><Router-Link to="/">home</Router-Link></li>
                <li class="mr-5 inline uppercase"><Router-Link to="/about">about</Router-Link></li>
                <li class="mr-5 inline uppercase"><Router-Link to="/blog">blog</Router-Link></li>
                <li class="mr-5 inline uppercase"><Router-Link to="/contact">contact</Router-Link></li>
                <li class="mb-5"><a href="#"><img @click="mmenu = !mmenu" class="my-0 mx-auto" width="30px"
                            src="../src/assets/icons/close.png" alt=""></a></li>
            </ul>
        </div>
        <div class="w-full h-14"></div>
        <nav
            class="fixed top-0  z-50 bg-secondary flex justify-center items-center w-full text-genzTextWhite border-b border-genz">
            <div class="w-11/12 flex justify-between h-14 items-center">
                <div class="w-1/3">
                    <h1 class="font-agbalumo leading-none pb-1.5 uppercase text-3xl"><Router-Link
                            to="/">STEVEN</Router-Link></h1>
                </div>
                <div class="md:w-1/3">
                    <ul class="list-none text-center hidden md:block">
                        <li class="mr-5 inline uppercase"><Router-Link class=" hover:text-genzTextDark" to="/">home</Router-Link></li>
                        <li class="mr-5 inline uppercase"><Router-Link class=" hover:text-genzTextDark" to="/about">about</Router-Link></li>
                        <li class="mr-5 inline uppercase"><Router-Link class=" hover:text-genzTextDark" to="/blog">blog</Router-Link></li>
                        <li class="mr-5 inline uppercase"><Router-Link class=" hover:text-genzTextDark" to="/contact">contact</Router-Link></li>
                    </ul>
                    <ul class="list-none md:hidden">
                        <li><img @click="mmenu = !mmenu" width="30px" src="/src/assets/icons/hamburger.png" alt="menu">
                        </li>
                    </ul>
                </div>
                <div class="w-1/3 text-right hidden md:block">
                    <a href="mailto:steven@email.com">steven@email.com</a>
                </div>
            </div>
        </nav>
        <div class="bg-primary flex justify-center font-nunito text-white">
            <div class="w-full px-5 md:px-0 md:w-11/12 lg:w-4/5">
                <main class="mb-10">
                    <RouterView />
                </main>
            </div>
        </div>
        <footer
            class="w-full h-14 bg-secondary flex items-center justify-center text-genzTextWhite border-t border-genz">
            <p class="font-bold">All Rights Reserved; Steven &copy 2024</p>
        </footer>
    </div>
</template>

<script>
import { RouterView } from 'vue-router';
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            mmenu: false
        }
    },
    methods: {

    }
}
</script>

<style scoped>
main {
    min-height: calc(100vh - 112px);
}
</style>