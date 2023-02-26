import {createRouter, createWebHistory} from 'vue-router'
import AdminPanelView from '@/components/AdminPanelView.vue'
import OrdersPage from '@/components/orders/OrdersPage.vue'
import LabsPage from '@/components/labs/LabsPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/admin',
            name: 'admin',
            component: AdminPanelView,
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () => import('../views/AboutView.vue')
            children: [
                {
                    path: '/orders',
                    name: 'orders',
                    component: OrdersPage
                },
                {
                    path: '/labs',
                    name: 'labs',
                    component: LabsPage
                },
            ]
        }
    ]
})

export default router
