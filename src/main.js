import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, FormFilePlugin, IconsPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

import router from "./router/index";

Vue.use("VueRouter");

Vue.use(FormFilePlugin);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
    router: router,
}).$mount("#app");
