export default function isVisible(el: HTMLElement | undefined) {
    if (!el) return false;

    const boundingRect = el.getBoundingClientRect();
    const { top, bottom } = boundingRect;

    return !((bottom < 0) || (window.innerHeight - top < 0));
}