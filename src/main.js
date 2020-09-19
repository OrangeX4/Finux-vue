import { createApp, use } from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'



createApp(App).mount('#app')


use(VueClipboard)