import { createRouter, createWebHistory } from "vue-router";
import { HomePage, SubmitRequest, AboutPage, Support, NetworkPage, SharedHostingPage, VpsHostingPage } from "@/views/pages";

const DEFAULT_TITLE = "404";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
      meta: { title: "Home-Page" },
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
      meta: { title: "About-Page" },
    },
    {
      path: "/submit-request",
      name: "submitRequest",
      component: SubmitRequest,
      meta: { title: "Submit-Request" },
    },
    {
      path: "/support",
      name: "support",
      component: Support,
      meta: { title: "Support-Page" },
    },
    {
      path: "/network-page",
      name: "network",
      component: NetworkPage,
      meta: { title: "Network-Page" },
    },
    {
      path: "/shared-hosting-page",
      name: "sharedHostingPage",
      component: SharedHostingPage,
      meta: { title: "Shared-Hosting-Page" },
    },
    {
      path: "/vps-hosting-page",
      name: "vpsHostingPage",
      component: VpsHostingPage,
      meta: { title: "vps-hosting-Page" },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || DEFAULT_TITLE;
  next();
});

export default router;