import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'

const keniaFont = new FontFace('kenia', 'url(/fonts/kenia.woff) format("woff")');

keniaFont.load().then(() => {
  document.fonts.add(keniaFont);
  // Font is loaded, now create and mount the app
  createApp(App).use(router).mount('#app')
}).catch((error) => {
  console.error('Error loading font:', error);
});