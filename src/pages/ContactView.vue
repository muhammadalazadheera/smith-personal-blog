<template>
    <Heading heading="Contact Me" />
    <iframe class="mt-10 rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.96777964963!2d2.2646340597621943!3d48.858825491760314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sbd!4v1730457598485!5m2!1sen!2sbd"
        width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    <div class="text-center mt-10 text-genzTextDark">
        <div class="inline-block support text-start">(48) 654-430-309<br>(01) 6532-430-309</div>
        <div class="inline-block location text-start">contact@genz.com<br>sales@genz.com</div>
        <div class="inline-block plane text-start">11567 E Broadview Dr<br>Colorado(CO), 80117</div>
    </div>
    <div class="text-center py-2 my-5 text-xl">
        <h1 class="text-balance my-3 leading-0 genz-gradient-text text-3xl font-[900] capitalize">Drop Us A Line</h1>
    </div>
    <form class="p-4 sm:p-0 font-din text-black text-lg my-5">
        <div class="w-full flex mb-3">
            <div class="mr-3 w-1/2">
                <input class="input"
                    type="text" id="fname" placeholder="First Name">
            </div>
            <div class="w-1/2">
                <input class="input"
                    type="text" id="lname" placeholder="Last Name">
            </div>
        </div>
        <div class="mb-3">
            <input class="input"
                type="email" id="email" placeholder="Email">
        </div>
        <div class="mb-3">
            <input class="input"
                    type="text" id="subject" placeholder="Subject">
        </div>
        <textarea class="w-full border border-tertiary bg-secondary rounded-lg p-3 focus-visible:outline-none focus-visible:border-gray-100/50" id="message"
            rows="3" placeholder="Message"></textarea>
        <button class="w-full h-12 genZButton rounded-lg font-extrabold font-din-medium mr-4 bg-black text-white">Send Message</button>
    </form>
    <FacebookComments :href="this.$route.currentRoute" />
    <Social />

</template>

<script>
import Social from '../components/Social.vue'
import Heading from '../components/Heading.vue'
import FacebookComments from '../components/FacebookComments.vue';
export default {
    components: {
        Social,
        Heading,
        FacebookComments
    }
}
</script>

<style>
.support {
    background: url(https://genz-nextjs-v3.vercel.app/_next/static/media/headset.e73b83c4.svg) no-repeat 0;
    padding: 10px 30px 10px 50px;
}

.location {
    background: url(https://genz-nextjs-v3.vercel.app/_next/static/media/marker.8111e4f5.svg) no-repeat 0;
    padding: 10px 30px 10px 50px;
}

.plane {
    background: url(https://genz-nextjs-v3.vercel.app/_next/static/media/paper-plane.51832a16.svg) no-repeat 0;
    padding: 10px 30px 10px 50px;
}
</style>