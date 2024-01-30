export const setIntersectionObserver = (e) => {
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                e.scroller1.start();
                e.scroller2.start();
            } else {
                e.scroller1.stop();
                e.scroller2.stop();
            }
        })
    })

    observer.observe(e.node1)
}