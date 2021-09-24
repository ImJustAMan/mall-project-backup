import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home/index.vue";
import Mall from "@/views/Mall/index.vue";
import Cart from "@/views/Cart/index.vue";
import Mine from "@/views/Mine/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/mall",
    name: "Mall",
    component: Mall
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/mine",
    name: "Mine",
    component: Mine
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
