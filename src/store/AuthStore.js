import { defineStore } from "pinia";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { push } from "notivue";

export const useAuthStore = defineStore('AuthStore', {
    state: () => {
        return {
            user: null,
            isLogged: false
        }
    },
    actions: {
        // SignIn An User
        async signin(email, password) {
            const notification = push.promise('Please wait...')
            try {
                const res = await signInWithEmailAndPassword(auth, email, password)
                if(res && res.user) {
                    notification.resolve({title:'Welcome', message:`You are logged in as: ${res.user.email}`})
                    this.user = res.user
                }else{
                    notification.reject('Something went wrong. Could not sing in.')
                }
            } catch (error) {
                notification.reject(`${error}`)
            }
        },

        // LogOut An User
        async signout(){
            await signOut(auth);
            this.user = null
        }
    }
})