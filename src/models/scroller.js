export const ScrollValues = (top = 0, bottom = 0, left = 0, right = 0) => {
    return { top, bottom, left, right };
}

export const Scroller = (node, scrollValues) => {
    let pixels = 0;
    let oldScrollTopPosition = 0;



    const start = () => {
        window.addEventListener('scroll', scroll);
    }
    const stop = () => {
        window.removeEventListener('scroll', scroll);
    }

    const scroll = () => {
        console.log('www')
        const scrollTopPosition = document.documentElement.scrollTop;
        if (oldScrollTopPosition > scrollTopPosition) {
            if (pixels < scrollValues.bottom) {
                pixels += 0.4;
            }
        } else {
            if (pixels > scrollValues.top) {
                pixels -= 0.4;
            }
        }
        console.log(node)
        node.style.transform = `translateY(min(${pixels}vw, ${pixels}vh)`;
        oldScrollTopPosition = scrollTopPosition;
    }

    return { start, stop }
}