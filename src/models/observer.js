export const nodeObserver = (node) => {
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log(entry.target)
            console.log(entry.isIntersecting)
        })
    })

    observer.observe(node);
}