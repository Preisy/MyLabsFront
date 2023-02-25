import {createRouter, createWebHistory} from 'vue-router'
import AdminPanelView from '@/components/AdminPanelView.vue'
import OrdersView from '@/components/orders/OrdersPage.vue'
import LabsView from '@/components/LabsPage.vue'

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
                    component: OrdersView
                },
                {
                    path: '/labs',
                    name: 'labs',
                    component: LabsView
                },
            ]
        }
    ]
})

export default router
