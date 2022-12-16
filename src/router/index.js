import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import AboutView from "../views//About/AboutView.vue";
import Shop from "../views/Shop/Shop.vue";
import Contact from "../views/Contact/Contact.vue";
import Blog from "../views/Blog/Blog.vue";
import BlogDetail from "../views/Blog-Detail/Blog-Detail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/blog-detail",
    name: "blog-detail",
    component: BlogDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
