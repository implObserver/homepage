import { setEventListenersForCarousel } from "../../controllers/listeners/carousel";
import { timeout } from "../../helper/helper";
import { setIntersectionObserver } from "../../models/observer";
import { HeaderScroller, ScrollValues, Scroller } from "../../models/scroller";

const header = document.querySelector('header');
const firstName = document.querySelector('.firstname');
const secondName = document.querySelector('.secondname');
const profession = document.querySelector('.profession');
const main = document.querySelector('html');
const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const contacts = document.querySelector('.contacts');
const footer = document.querySelector('footer');
const frontPanels = document.querySelectorAll('.front__panel');
const titles = document.querySelectorAll('.description>h3');


export const setPreset = async () => {
    setVisibleSections();
    setDescriptionsScroller();
    setHeaderScroller();
    setEventListenersForCarousel();
}

const setVisibleSections = async () => {
    await timeout(200);
    header.classList.add('visible__section');

    await timeout(100);
    main.classList.add('visible__main');

    await timeout(200);
    firstName.classList.add('show__hero')

    await timeout(100);
    secondName.classList.add('show__hero')

    await timeout(100);
    profession.classList.add('show__hero')

    await timeout(1000);
    about.classList.add('visible__section');

    await timeout(100);
    projects.classList.add('visible__section');

    await timeout(100);
    contacts.classList.add('visible__section');

    await timeout(100);
    footer.classList.add('visible__section');
}

const setDescriptionsScroller = () => {
    for (let i = 0; i < frontPanels.length; i++) {
        let descriptionElements = { title: titles[i], panel: frontPanels[i], scrollValues: ScrollValues(-3, 3) };
        setIntersectionObserver(Scroller(descriptionElements));
    }
}

const setHeaderScroller = () => {
    let headerScroller = HeaderScroller();
    headerScroller.start();
}