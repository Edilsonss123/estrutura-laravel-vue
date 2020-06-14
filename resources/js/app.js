import "./bootstrap";
import Vue from "vue";
import vuetify from "@/js/plugins/vuetify";
import Route from "@/js/routes.js";
import App from "@/js/views/App";

const app = new Vue({
    router:Route, // replace routes with router
    vuetify,
    mounted() {
        console.log(vuetify)
    },
    render: h => h(App), //indicate the App component inside render function
}).$mount("#app");

export default app;
