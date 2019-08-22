/**
 *Created by Shinelon on 2019/7/27
 */
import VueRouter from 'vue-router';
import Index from '@/components/Index';
import Lists from '@/components/Lists';
import Another from '@/components/Another';
import Sync from '@/components/Sync';

import Vue from 'vue'
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: Index,
    },
    {
      path: '/index',
      name: Index.name,
      component: Index,
    },
    {
      path: '/lists',
      name: Lists.name,
      component: Lists,
    },
    {
      path: '/another',
      name: Another.name,
      component: Another,
    },
    {
      path: '/sync',
      name: Sync.name,
      component: Sync,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return {x: 0, y: 0}
  }
});

router.beforeEach((to, from, next) => {
  next();
})

router.beforeResolve((to, from, next) => {
  next();
})

export default router;
