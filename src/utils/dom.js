export function getOffset(el, relativeNode = document.body) {
    let offsetLeft = 0;
    let offsetTop = 0;
    let parent = el;
    while (parent !== null && parent !== relativeNode) {
        offsetLeft += parent.offsetLeft;
        offsetTop += parent.offsetTop;
        parent = parent.offsetParent;
    }
    return {
        offsetLeft,
        offsetTop
    };
}