export const ScrollValues = (top = 0, bottom = 0, left = 0, right = 0) => {
    return { top, bottom, left, right };
}

export const Scroller = (node, scrollValues) => {
    let oldScrollTopPosition = 0;
    let pixels = 0;
    window.addEventListener('scroll', e => {
        const scrollTopPosition = document.documentElement.scrollTop;
        if (oldScrollTopPosition > scrollTopPosition) {
            if(pixels < scrollValues.bottom) {
                pixels += 1;
            }
        } else {
            if(pixels > scrollValues.top) {
                pixels -= 2;
            }
        }
        node.style.top = `${pixels}px`;
        oldScrollTopPosition = scrollTopPosition;
    })
}