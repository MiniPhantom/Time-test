import { createApp } from 'vue'
import TGameResearchButton from '@/components/research/TGameResearchButton.vue'
import App from './App.vue'

const app = createApp(App)

//todo - not sure why i have to register this one
app.component('TGameResearchButton', TGameResearchButton);

app.mount('#app');