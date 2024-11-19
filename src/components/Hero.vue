<template>
    <div class="bg-secondary flex justify-center mt-10 rounded-lg border-tertiary border">
        <div class="md:w-4/5 md:h-80 py-10 md:py-0 flex flex-col md:flex-row items-center">
            <div class="w-full md:w-1/3 mr-5 mb-10 md:mb-0 flex justify-center">
                <img class="shadow-genz rounded-full border border-genz" src="https://genz-nextjs-v3.vercel.app/assets/imgs/page/homepage4/banner.png" alt="">
            </div>
            <div class="w-full md:w-2/3 px-5 md:px-0">
                <p class=" font-nunito font-bold text-lightBlue">Hello Everyone</p>
                <h1 class="text-balance my-3 leading-0 genz-gradient-text text-2xl font-[900] capitalize">I'm Steven, a lover of technology, business and experiencing new things</h1>
                <ul class="">
                    <li class="list-none inline-block p-1 mr-1 w-8 h-8 rounded-full bg-tertiary"><a href="#"><img class="inline-block" src="../assets/icons/facebook.png" alt=""></a></li>
                    <li class="list-none inline-block p-1 mr-1 w-8 h-8 rounded-full bg-tertiary"><a href="#"><img class="inline-block" src="../assets/icons/instagram.png" alt=""></a></li>
                    <li class="list-none inline-block p-1 mr-1 w-8 h-8 rounded-full bg-tertiary"><a href="#"><img class="inline-block" src="../assets/icons/snap.png" alt=""></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .genz-gradient-text{
        background: linear-gradient(90deg,#0ea5ea,#0bd1d1 51%,#0ea5ea) var(--x,0)/200%;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>