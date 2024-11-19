import { createWebHistory, createRouter } from 'vue-router'

/**
 * Import the page vues 
*/

import HomeView from '../pages/HomeView.vue';
import AboutView from '../pages/AboutView.vue';
import BlogView from '../pages/BlogView.vue';
import PageNotFound from '../pages/404.vue'
import ContactView from '../pages/ContactView.vue'
import SingleBlogView from '../pages/SingleBlogView.vue';
import LoginView from '../pages/LoginView.vue';
import FrontBase from '../pages/base/FrontBase.vue';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import BlogByCategory from '../pages/BlogByCategory.vue';

/**
 * Import the backend routes from admin.js
*/

import AdminRoutes from './admin'
import { useBlogStore } from '../store/BlogStore';


const router = createRouter({
  history: createWebHistory(),
  routes : [
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound
    },
    {
      path: '/',
      component: FrontBase,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView
        },
        {
          path: '/about',
          component: AboutView
        },
        {
          path: '/blog',
          component: BlogView
        },
        {
          name: 'BlogByCategory',
          path: '/blog-by-categories/:id/:title',
          component: BlogByCategory,
          beforeEnter: async (to, from, next) => {
            const BlogStore = useBlogStore();
            await BlogStore.getBlogsByCategory(to.params.id)
            next()
          }
        },
        {
          path: '/contact',
          component: ContactView
        },
        {
          path: '/singleblog/:id',
          component: SingleBlogView,
          name: 'SingleBlog',
          beforeEnter: async (to, from, next) => {
            const BlogStore = useBlogStore();
            await BlogStore.getBlogs()
            await BlogStore.getBlog(to.params.id)
            next()
          }
        }
      ]
    },
    {
      path: '/login',
      component: LoginView,
      beforeEnter: (to, from, next) => {
        onAuthStateChanged(auth, (user) => {
          if(user){
            next({path: 'admin/blogs'})
          }else{
            next()
          }
        })
      }
    },
    ...AdminRoutes
  ]
})

export default router;