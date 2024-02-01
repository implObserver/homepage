import { timeout } from "../helper/helper"

export const setIntersectionObserver = (scroller) => {
    let observer = new IntersectionObserver(async entries => {
        entries.forEach(async entry => {
            if (entry.isIntersecting) {
                await timeout(100);
                scroller.start();
            } else {
                scroller.stop();
            }
        })
    })

    observer.observe(scroller.getNode())
}