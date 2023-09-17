import Vue from "vue";
import VueRouter from "vue-router";
import HomeWeb from "../components/web/Home.vue";
import HomeMobile from "../components/mobile/Home.vue";
import TodoMainWeb from "../components/web/TodoMain.vue";
import TodoMainMobile from "../components/mobile/TodoMain.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        components: {
            default: HomeWeb,
            mobile: HomeMobile,
        },
    },
    {
        path: "/user/:nickname/:kind",
        name: "UserTodoMain",
        components: {
            default: TodoMainWeb,
            mobile: TodoMainMobile,
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
