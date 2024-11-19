<template>
    <div class="h-32 w-full flex items-center justify-center border border-tertiary mt-10 rounded-md">
        <h1 class="text-balance my-3 leading-0 genz-gradient-text text-2xl font-[900] capitalize">{{ heading }}</h1>
    </div>
</template>

<script>
    export default {
        props: ['heading']
    }
</script>