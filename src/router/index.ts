import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import SamaMagazin from '../components/SamaMagazin.vue';
import TindDog from '../components/TindDog .vue';
import DesignLab from '../components/DesignLab.vue';
import WallCoating from '../components/WallCoating.vue'

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
        name: 'tindog',
        component: TindDog
    },
    {
        path: '/4',
        name: 'Wallcoating',
        component: WallCoating
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
