import Vue from "vue";
import Router from "vue-router";
import RouterPrefetch from "vue-router-prefetch";

import Work from "./views/Work.vue";

Vue.use(Router);
Vue.use(RouterPrefetch);

export default new Router({
  routes: [
    {
      path: "/",
      name: "work",
      component: Work
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "contact" */ "./views/Contact.vue")
    }
  ]
});
