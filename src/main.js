import { createApp, use } from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'
import store from './store'



createApp(App).use(store).mount('#app')


use(VueClipboard)