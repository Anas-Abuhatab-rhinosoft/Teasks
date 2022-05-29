import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import SamaMagazin from '../components/SamaMagazin.vue';
import WallCoating from '../components/WallCoating.vue';
import DesignLab from '../components/DesignLab.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/1',
        name: 'samamagazin',
        component: SamaMagazin
    }, {
        path: '/2',
        name: 'designlab',
        component: DesignLab
    }, {
        path: '/3',
        name: 'wallcoating',
        component: WallCoating
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
