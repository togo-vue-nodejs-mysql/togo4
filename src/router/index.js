import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/client/home/Home.vue'







import ServerMain from '../views/server/ServerMain.vue'
import WorkSpace from '../views/server/WorkSpace.vue'
import Handle from "@/views/server/Handle";

import TableUser from '../views/server/Table/TableUser.vue'
import TableHotel from '../views/server/Table/TableHotel.vue'
import TableTraffic from '../views/server/Table/TableTraffic.vue'
import TableRoom from '../views/server/Table/TableRoom.vue'
import TableCity from '../views/server/Table/TableCity.vue'
import TableGuide from "@/views/server/Table/TableGuide";




Vue.use(VueRouter)

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    // },
    {
        path: '/ServerMain',
        name: 'ServerMain',
        component: ServerMain
    },
    {
        path: '/',
        name: 'WorkSpace',
        component: WorkSpace,
    },
    {
        path: '/Handle',
        name: 'Handle',
        component: Handle,
    },


    {
        path: '/TableUser',
        name: 'TableUser',
        component: TableUser
    },

    {
        path: '/TableTraffic',
        name: 'TableTraffic',
        component: TableTraffic
    },
    {
        path: '/TableHotel',
        name: 'TableHotel',
        component: TableHotel
    },
    {
        path: '/TableRoom',
        name: 'TableRoom',
        component: TableRoom
    },
    {
        path: '/TableCity',
        name: 'TableCity',
        component: TableCity
    },
    {
        path: '/TableGuide',
        name: 'TableGuide',
        component: TableGuide
    },



]

const router = new VueRouter({
    routes
})

export default router
