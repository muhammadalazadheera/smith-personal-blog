import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createNotivue } from 'notivue';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

import './style.css';
import router from './routes/routes';
import App from './App.vue';

import 'notivue/notification.css'
import 'notivue/animations.css'
import 'notivue/notification-progress.css'

const notivue = createNotivue({
    position: 'top-right',
    notifications: {
        global: {
          duration: 10000
        }
    }
})

nProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  nProgress.start();
  next();
});

router.afterEach(() => {
  nProgress.done();
});

const app = createApp(App);
const pinia = createPinia();

app.use(pinia)
app.use(router)
app.use(notivue)


app.mount('#app')
