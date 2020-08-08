
import "./styles/index.css";
import Vue from "vue"
import App from "./App"
// 全局引入
import VueAutoscroll from "./directives"
Vue.use(VueAutoscroll)

new Vue({
    el: "#app",
    components: { App },
    render: h => h(App)
})
