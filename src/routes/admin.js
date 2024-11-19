import BackBase from "../pages/base/BackBase.vue";
import Blogs from "../pages/admin/blog/Blogs.vue";
import NewBlog from "../pages/admin/blog/NewBlog.vue";
import EditBlog from "../pages/admin/blog/EditBlog.vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import Categories from "../pages/admin/categories/Categories.vue";
import NewCategory from "../pages/admin/categories/NewCategory.vue";
import EditCategory from "../pages/admin/categories/EditCategory.vue";
import { useBlogStore } from "../store/BlogStore";
import { useCategoryStore } from "../store/CategoryStore";

export default [
    {
        path: '/admin',
        component: BackBase,
        redirect: 'admin/blogs',
        beforeEnter: (to, from, next) => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    next()
                } else {
                    next({path: '/login'})
                }
            })
        },
        children: [
            {
                name: 'Blogs',
                path: 'blogs',
                component: Blogs
            },
            {
                name: 'NewBlog',
                path: 'create-new-blog',
                component: NewBlog
            },
            {
                name: 'EditBlog',
                path: 'edit-blog/:id',
                component: EditBlog,
                beforeEnter: async (to, from, next) => {
                    const BlogStore = useBlogStore();
                    await BlogStore.getBlog(to.params.id)
                    next()
                }
            },
            // Category Routes
            {
                name: 'Categories',
                path: 'categories',
                component: Categories
            },
            {
                name: 'NewCategory',
                path: 'create-new-category',
                component: NewCategory
            },
            {
                name: 'EditCategory',
                path: 'edit-category/:id',
                component: EditCategory
            },
        ]
    }
]

