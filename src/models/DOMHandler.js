import { setIntersectionObserver } from "./observer";

export const Section = (node) => {
    const observer = setIntersectionObserver(node);

    const getObserver = () => {
        return observer.observe(node);
    }

    const getNode = () => {
        return node;
    }

    return { getObserver, getNode }
}
