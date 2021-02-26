import { createApp } from 'vue'
import App from './App.vue'
import less from 'less';
import router from './router/index.js';

createApp(App).use(router).use(less).mount('#app');
// app.use(router);
// app.use(less);
// app.mount('#app');
