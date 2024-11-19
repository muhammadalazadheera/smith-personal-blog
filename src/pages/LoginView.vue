<template>
    <!-- component -->
    <Toast />
    <div class="min-h-screen flex items-center justify-center w-full bg-primary">
        <div class="border border-genz shadow-md rounded-lg px-8 py-6 max-w-md w-1/2">
            <form @submit.prevent="setUser">
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email
                        Address</label>
                    <input v-model="email" type="email" id="email"
                        class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="your@email.com" required>
                </div>
                <div class="mb-4">
                    <label for="password"
                        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                    <input v-model="password" type="password" id="password"
                        class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your password" required>
                </div>
                <button type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/AuthStore';
import { push } from 'notivue';
import Toast from '../components/Toast.vue';
export default {
    data() {
        return {
            AuthStore: useAuthStore(),
            email: '',
            password: '',
            error: '',
            router: useRouter()
        }
    },
    components: {
        Toast
    },
    methods: {
        async setUser() {
            try {
                if (!this.email || !this.password) throw 'Email And Password Fields Are Required!'
                await this.AuthStore.signin(this.email, this.password)
                if (this.AuthStore.user != null) {
                    this.router.push('/')
                }
            } catch (error) {
                push.warning({
                    title: 'Warning',
                    message: `${error}`
                })
            }
        }
    }
}
</script>