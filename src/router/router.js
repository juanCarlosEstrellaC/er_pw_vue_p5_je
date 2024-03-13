import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/crear',
        component: () => import('../pages/CrearProducto.vue')
    },
    {
        path: '/consultar',
        component: () => import('../pages/ConsultarProducto.vue')
    },

]

const router = createRouter({history: createWebHashHistory(), routes})
export default router