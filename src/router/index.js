import { createWebHistory, createRouter } from "vue-router";

import routes from './routes.map'

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router