// Gets the Size and Position of an element (Not Including any transforms an element may have)
export default function getSizeAndPosition(el, scrolls = true) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;

    return {
        width: el.offsetWidth,
        height: el.offsetHeight,
        left: scrolls ? this.getOffset(el, "left") - scrollLeft : this.getOffset(el, "left"),
        top: scrolls ? this.getOffset(el, "top") - scrollTop : this.getOffset(el, "top")
    };
}