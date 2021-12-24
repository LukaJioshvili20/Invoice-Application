import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import InvoiceView from "../views/InvoiceView";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/invoice/:invoiceId',
    name: 'Invoice',
    component: InvoiceView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from,next)=>{
  document.title = `${process.env.VUE_APP_TITLE}  -  ${to.name} `
  next()
});
export default router
