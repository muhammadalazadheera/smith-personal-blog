import { defineStore } from "pinia";
import { push } from "notivue";
import { db } from "../firebase/config";
import { doc, collection, addDoc, query, orderBy, limit, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";


export const useCategoryStore = defineStore('CategoryStore', {
    state: () => ({
        category: '',
        categories: []
    }),
    actions: {
        // Fetch the categories
        async getCategories() {
            const colRef = collection(db, 'categories')
            const latestQuery = query(colRef, orderBy('created_at', 'asc'), limit(10));
            try {
                const docSnapshot = await getDocs(latestQuery)
                this.categories = []
                docSnapshot.forEach((doc) => {
                    this.categories.push({ ...doc.data(), id: doc.id });
                });
            } catch (error) {
                push.error(`${error}`)
            }
        },

        // Fetch a category
        async getCategory(id) {
            try {
                const docRef = doc(db, 'categories', id);
                const querySnap = await getDoc(docRef);
                if (querySnap.exists()) {
                    const queryData = querySnap.data();
                    this.category = queryData
                } else {
                    return null;
                }
            } catch (error) {
                push.error(`${error}`)
            }
        },

        // Edit a category
        async editCategory(id, title, image) {
            const notification = push.promise('Please wait...')
            const docRef = doc(db, 'categories', id);
            try {
                await updateDoc(docRef, {
                    title: title,
                    image: image,
                })
                notification.resolve('Category successfully Edited!')
            } catch (error) {
                notification.reject(`${error}`)
            }
        },

        // Add Category
        async addNewCategory(title, image) {
            const notification = push.promise('Please wait...')
            const colRef = collection(db, 'categories')
            try {
                await addDoc(colRef, {
                    title: title,
                    image: image,
                    created_at: Date.now()
                })
                notification.resolve('Category successfully added!')
            } catch (error) {
                notification.reject(`${error}`)
            }
        },

        // Delete Blog
        async deleteCategory(id) {
            const notification = push.promise('Please wait...')
            const docRef = doc(db, 'categories', id);
            try {
                await deleteDoc(docRef)
                this.categories = []
                this.getCategories()
                notification.resolve('Category successfully deleted!')
            } catch (error) {
                notification.reject(`${error}`)
            }
        }
    }
})