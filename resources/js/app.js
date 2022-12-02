import {createApp} from 'vue'
import Notifications from '@kyvg/vue3-notification'
require('./bootstrap');
import App from './App.vue'
import axios from 'axios';
import router from './router';
const app = createApp(App)
app.config.globalProperties.$axios=axios
app.use(router)
app.use(Notifications)
app.mount('#app')
