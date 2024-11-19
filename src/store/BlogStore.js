import { defineStore } from "pinia";
import { collection, doc, getDocs, where, addDoc, getDoc, deleteDoc, updateDoc, query, orderBy, limit } from 'firebase/firestore'
import { push } from "notivue";
import { db } from "../firebase/config";

export const useBlogStore = defineStore('BlogStore', {
    state: () => ({
        blogs: [],
        blog: ''
    }),
    actions: {
        // Create Blog
        async addBlog(title, body, featured_image, category) {
            const notification = push.promise('Please wait...')
            const colRef = collection(db, 'blogs')
            const catRef = doc(db, 'categories', category);
            try {
                await addDoc(colRef, {
                    title: title,
                    body: body,
                    featured_image: featured_image,
                    created_at: Date.now(),
                    category: catRef
                })
                notification.resolve('Blog successfully added!')
            } catch (error) {
                notification.reject(`${error}`)
            }
        },
        // Read all Blog
        async getBlogs() {
            const colRef = collection(db, 'blogs')
            const latestBlogQuery = query(colRef, orderBy('created_at', 'asc'), limit(10));
            try {
                const blogsSnapshot = await getDocs(latestBlogQuery)
                this.blogs = []
                blogsSnapshot.forEach((doc) => {
                    this.blogs.push({ ...doc.data(), id: doc.id });
                });
            } catch (error) {
                push.error(`${error}`)
            }

        },
        // Blogs by category
        async getBlogsByCategory(id) {
            const catRef = doc(db, 'categories', id);
            const blogsQuery = query(
                collection(db, 'blogs'),
                where('category', '==', catRef)
            );
            try {
                const blogsSnapshot = await getDocs(blogsQuery)
                if (blogsSnapshot) {
                    this.blogs = []
                    blogsSnapshot.forEach((doc) => {
                        this.blogs.push({ ...doc.data(), id: doc.id })
                    })
                }
            } catch (error) {
                console.log(`Something went wrong: ${error}`)
            }
        },
        // Read a singleblog
        async getBlog(id) {
            try {
                let categoryData = null
                let categoryId = null
                const docRef = doc(db, 'blogs', id);
                const blogSnap = await getDoc(docRef);
                if (blogSnap.exists()) {
                    const blogData = blogSnap.data();
                    const categoryRef = blogData.category;
                    try {
                        const categoryDoc = await getDoc(categoryRef);
                        categoryId = categoryDoc.id
                        if (categoryDoc.exists()) {
                            categoryData = categoryDoc.data();
                        } else {
                            console.log('Something went wrong!')
                        }
                    } catch (error) {
                        push.error(`${error}`)
                    }
                    this.blog = { blog: blogData, category: categoryData, catId: categoryId }
                } else {
                    return null;
                }
            } catch (error) {
                push.error(`${error}`)
            }
        },
        // Update Blog
        async updateBlog(id, title, body, featured_image, category) {
            const notification = push.promise('Please wait...')
            const docRef = doc(db, 'blogs', id);
            const catRef = doc(db, 'categories', category);
            try {
                await updateDoc(docRef, {
                    title: title,
                    body: body,
                    featured_image: featured_image,
                    category: catRef
                })
                notification.resolve('Blog successfully Edited!')
            } catch (error) {
                notification.reject(`${error}`)
            }
        },
        // Delete Blog
        async deleteBlog(id) {
            const notification = push.promise('Please wait...')
            const docRef = doc(db, 'blogs', id);
            try {
                await deleteDoc(docRef)
                this.blogs = []
                this.getBlog()
                notification.resolve('Blog successfully deleted!')
            } catch (error) {
                notification.reject(`${error}`)
            }
        }
    }
})