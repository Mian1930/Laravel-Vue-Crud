import { createWebHistory, createRouter} from "vue-router"

import Home from "../pages/Home"
import EditProduct from "../pages/EditProduct"
import CreateProduct from "../pages/CreateProduct"
import AllProduct from "../pages/AllProduct"

export const routes =[
    {
        name:'home',
        path:'/',
        component:Home
    },
    {
        name:'editProduct',
        path:'/editProduct/:id',
        component:EditProduct
    },
    {
        name:'createProduct',
        path:'/createProduct',
        component:CreateProduct
    },
    {
        name:'allproduct',
        path:'/allproduct',
        component:AllProduct
    },
];
const  router = createRouter({
history:createWebHistory(),
routes:routes,
});
export default router;
