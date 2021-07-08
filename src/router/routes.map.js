import Home from '@/pages/Home.vue';
import Products from '@/pages/Products.vue';
import Cart from '@/pages/Cart.vue';
import Login from '@/pages/auth/Login.vue';
import Register from '@/pages/auth/Register.vue';

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/DefaultTemplate'),
        children: [
            {
                path: '/',
                component: Home,
                name: 'home'
            },
            {
                path: '/loja',
                component: Products,
                name: 'products'
            },
            {
                path: '/carrinho',
                component: Cart,
                name: 'cart'
            },        
        ]
    },
    {
        path: '/',
        component: () => import('@/layouts/AuthTemplate'),
        children: [
            {
                path: 'registrar',
                component: Register,
                name: 'register'
            },
            {
                path: 'entrar',
                component: Login,
                name: 'login'
            },
        ]
    }
]

export default routes