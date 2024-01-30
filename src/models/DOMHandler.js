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

export const Sections = (() => {

})();


export const scrollNode = (node1, node2) => {
    let scrollValues = ScrollValues(-3, 5);
    let scroller1 = Scroller(node1, scrollValues);
    let scroller2 = Scroller(node2, scrollValues);
    return { node1, node2, scroller1, scroller2 };
}