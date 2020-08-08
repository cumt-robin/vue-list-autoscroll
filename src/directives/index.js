import VueListAutoscroll from "./autoscroll";

VueListAutoscroll.install = function(Vue) {
    Vue.directive('autoscroll', VueListAutoscroll);
}

if (typeof window !== 'undefined' && window.Vue) {
    VueListAutoscroll.install(window.Vue)
}

export default VueListAutoscroll