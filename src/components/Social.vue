<template>
    <div class="w-full mt-10 px-0 md:px-10 flex justify-center items-center flex-col">
        <ul class="social flex justify-center mb-4">
            <li class="list-none inline-block p-1 mr-1 w-12 h-12 rounded-full bg-tertiary hover:bg-primary"><a href="#"><img class="inline-block" src="../assets/icons/facebook.png" alt=""></a></li>
            <li class="list-none inline-block p-1 mr-1 w-12 h-12 rounded-full bg-tertiary hover:bg-primary"><a href="#"><img class="inline-block" src="../assets/icons/instagram.png" alt=""></a></li>
            <li class="list-none inline-block p-1 mr-1 w-12 h-12 rounded-full bg-tertiary hover:bg-primary"><a href="#"><img class="inline-block" src="../assets/icons/snap.png" alt=""></a></li>
        </ul>
        <div class="w-full md:w-10/12 lg:w-1/2 px-2 border border-genz rounded-lg py-2 bg-secondary">
            <input class=" w-2/3 focus-visible:outline-none bg-transparent" placeholder="type your email address" type="email" name="" id="">
            <input class="w-1/3 px-2 py-2 rounded-lg" type="submit" value="Subscribe">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    input[type="submit"] {
        background: linear-gradient(90deg,#0ea5ea,#0bd1d1 51%,#0ea5ea) var(--x,0)/200%;
    }
</style>