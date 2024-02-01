import './views/css/style.css';
import { setEventListenersForCarousel } from './controllers/listeners/carousel';
import { timeout } from './helper/helper';
import { ScrollValues, Scroller } from './models/scroller';
import { isVisible, setIntersectionObserver } from './models/observer';
import { ProjectsSection, Section, scrollNode } from './models/DOMHandler';

setEventListenersForCarousel();

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

document.querySelector('html').style.overflowY = 'hidden';
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
document.querySelector('html').style.overflowY = 'auto';
about.classList.add('visible__section');
await timeout(100);
projects.classList.add('visible__section');
await timeout(100);
contacts.classList.add('visible__section');
await timeout(100);
footer.classList.add('visible__section');

for (let i = 0; i < frontPanels.length; i++) {
    let descriptionElements = { title: titles[i], panel: frontPanels[i], scrollValues: ScrollValues(-3, 3) };
    setIntersectionObserver(Scroller(descriptionElements));
    
}