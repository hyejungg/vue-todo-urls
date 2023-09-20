<template>
    <div id="app">
        <div id="content">
            <router-view v-if="!isMobile" />
            <router-view v-else name="mobile" />
        </div>
        <footer-component />
    </div>
</template>

<script>
import FooterComponent from "@/components/Footer.vue";
export default {
    name: "App",
    components: { FooterComponent },
    data: () => ({
        isMobile: false,
    }),

    beforeDestroy() {
        if (typeof window !== "undefined") {
            window.removeEventListener("resize", this.onResize, {
                passive: true,
            });
        }
    },

    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize, { passive: true });
    },

    methods: {
        onResize() {
            this.isMobile = window.innerWidth < 600;
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#content {
    height: auto;
    min-height: 100%;
    padding-bottom: 10px;
}
#footer {
    height: 10px;
    position: relative;
    transform: translateY(-100%);
}
</style>
