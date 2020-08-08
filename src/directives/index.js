import VueAutoscroll from "./autoscroll";

VueAutoscroll.install = function(Vue) {
    Vue.directive('autoscroll', VueAutoscroll);
}

if (typeof window !== 'undefined' && window.Vue) {
    VueAutoscroll.install(window.Vue)
}

export default VueAutoscroll