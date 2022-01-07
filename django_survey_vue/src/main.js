import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AudioVisual from 'vue-audio-visual'

require('@/assets/main.scss');

createApp(App).use(store).use(router).use(AudioVisual).mount('#app')
