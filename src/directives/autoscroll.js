import { getOffset } from "../utils/dom";
import { merge } from "../utils/helper";

class AutoScrollHelper {
    constructor(el, options) {
        const defaultOptions = {
            triggerDistance: 150,
            step: 6
        };
        this.options = merge(defaultOptions, options);
        this.el = el;
        this.isOverflow = false;
        this.isTranslating = false;
        this.translateDirection = ''; // left代表向左滑动
        this.translateMin = 0;
        this.currentTranslateValue = 0;
        this.rafId = null;
        this.firstChild = null;
    }

    handleInserted() {
        this.el.addEventListener('mouseenter', e => {
            this.checkNodes();
        });
        this.el.addEventListener('mouseleave', e => {
            this.stopTranslate();
        });
        this.el.addEventListener('mousemove', e => {
            if (this.isOverflow) {
                const { offsetLeft } = getOffset(this.el);
                if (e.clientX - offsetLeft < this.options.triggerDistance) {
                    this.translateDirection = 'right';
                    if (!this.isTranslating) {
                        this.startTranslate();
                    }
                } else if ((this.containerWidth + offsetLeft - e.clientX) < this.options.triggerDistance) {
                    this.translateDirection = 'left';
                    if (!this.isTranslating) {
                        this.startTranslate();
                    }
                }
            }
        });
    }

    handleUnbind() {
        this.stopTranslate();
    }

    checkNodes() {
        const firstChild = this.el.firstChild;
        if (firstChild) {
            this.firstChild = firstChild;
            this.containerWidth = this.el.clientWidth;
            this.scrollListWidth = this.firstChild.clientWidth;
            this.translateMin = this.containerWidth - this.scrollListWidth;
            if (this.scrollListWidth > this.containerWidth) {
                // 发生溢出
                this.isOverflow = true;
                // console.log('检测到溢出', this.containerWidth, this.scrollListWidth);
            } else {
                // 没有溢出的情况
                this.isOverflow = false;
                // console.log('未检测到溢出');
            }
        } else {
            // console.log('子节点还没初始化');
        }
    }

    stopTranslate() {
        window.cancelAnimationFrame(this.rafId);
        this.isTranslating = false;
    }

    startTranslate() {
        const transformValue = this.firstChild.style.transform;
        this.currentTranslateValue = !transformValue || transformValue === 'none' ? 0 : Number(transformValue.replace(/[a-zA-z]+\((-?\d+)px\)/, '$1'));
        this.isTranslating = true;
        if (this.translateDirection === 'left') {
            this.doTranslateLeft();
        } else {
            this.doTranslateRight();
        }
    }

    doTranslateLeft() {
        let nextValue = this.currentTranslateValue - this.options.step;
        if (nextValue > this.translateMin) {
            this.rafId = window.requestAnimationFrame(this.doTranslateLeft.bind(this));
        } else {
            nextValue = this.translateMin;
            this.isTranslating = false;
        }
        // 更新行为
        this.firstChild.style.transform = `translateX(${nextValue}px)`;
        this.currentTranslateValue = nextValue;
    }

    doTranslateRight() {
        let nextValue = this.currentTranslateValue + this.options.step;
        if (nextValue < 0) {
            this.rafId = window.requestAnimationFrame(this.doTranslateRight.bind(this));
        } else {
            nextValue = 0;
            this.isTranslating = false;
        }
        // 更新行为
        this.firstChild.style.transform = `translateX(${nextValue}px)`;
        this.currentTranslateValue = nextValue;
    }
}

export default {
    bind(el, binding, vnode) {
        const { value: options } = binding;
        el.autoScrollHelper = new AutoScrollHelper(el, options);
    },
    inserted(el, binding, vnode, oldVnode) {
        el.autoScrollHelper.handleInserted();
    },
    unbind(el) {
        el.autoScrollHelper.handleUnbind();
    }
};
