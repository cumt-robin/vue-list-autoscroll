
import "./styles/index.css";
import Vue from "vue"
import App from "./App"
// 全局引入
import VueListAutoscroll from "./directives"
Vue.use(VueListAutoscroll)

new Vue({
    el: "#app",
    components: { App },
    render: h => h(App)
})
