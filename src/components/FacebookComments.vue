<template>
    <div class="fb-comments" :data-href="href" :data-width="width" :data-numposts="numPosts">
    </div>
</template>

<script>
export default {
    name: 'FacebookComments',
    props: {
        href: {
            type: String,
            required: true
        },
        width: {
            type: String,
            default: '100%'
        },
        numPosts: {
            type: Number,
            default: 5
        }
    },
    created() {
        setTimeout(() => {
            this.loadFacebookSDK();
        }, 1500);
    },
    methods: {
        loadFacebookSDK() {
            if (window.FB) {
                this.initializeFBComments();
            } else {
                window.fbAsyncInit = () => {
                    window.FB.init({
                        appId: '1667678073803338',
                        xfbml: true,
                        version: 'v21.0'
                    });
                    this.initializeFBComments();
                };
            }
        },
        initializeFBComments() {
            window.FB.XFBML.parse();
        }
    }
};
</script>

<style scoped>
.fb-comments {
    margin-top: 20px;
}
</style>