import Vue from "vue";
import Router from "vue-router";

import Work from "./views/Work.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  scrollBehavior() {
    return { x: 0, y: 0 };
  },

  routes: [
    {
      path: "/",
      name: "work",
      component: Work
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
});
