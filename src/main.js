import { createApp } from 'vue'
import BaseTemplate from './layouts/BaseTemplate'

import router from './router'

createApp(BaseTemplate).use(router).mount('#app')
