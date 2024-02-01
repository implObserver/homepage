export const ScrollValues = (top = 0, bottom = 0, left = 0, right = 0) => {
    return { top, bottom, left, right };
}

export const Scroller = (e) => {
    let pixels = 0;
    let oldScrollTopPosition = 0;
    let node = e.title;

    const start = () => {
        window.addEventListener('scroll', scroll);
        e.panel.addEventListener('click', click);
    }

    const stop = () => {
        window.removeEventListener('scroll', scroll);
    }

    const scroll = () => {
        console.log('www')
        const scrollTopPosition = document.documentElement.scrollTop;
        if (oldScrollTopPosition > scrollTopPosition) {
            if (pixels < e.scrollValues.bottom) {
                pixels = 3;
            }
        } else {
            if (pixels > e.scrollValues.top) {
                pixels = -3;
            }
        }
        console.log(node)
        e.title.style.transform = `translateY(${pixels}rem)`;
        e.panel.style.transform = `translateY(${pixels}rem)`;
        oldScrollTopPosition = scrollTopPosition;
    }

    const click = () => {
        if (pixels < e.scrollValues.bottom) {
            pixels = 3;
        } else {
            pixels = -3;
        }
        e.title.style.transform = `translateY(${pixels}rem)`;
        e.panel.style.transform = `translateY(${pixels}rem)`;
    }

    const getNode = () => {
        return node;
    }

    return { start, stop, getNode }
}