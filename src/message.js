import { createApp } from 'vue';  
import message from './message.vue';  
const app = createApp(message);  // 避免命名衝突，使用 app 作為變量名稱
app.mount('#message');