import { setIntersectionObserver } from "./observer";
import { ScrollValues, Scroller } from "./scroller";

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
