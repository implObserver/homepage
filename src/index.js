import './views/css/style.css';
import { Carousel } from './models/carousel';
import { setEventListenersForCarousel } from './controllers/listeners/carousel';
import { timeout } from './helper/helper';

setEventListenersForCarousel();

const header = document.querySelector('header');
const firstName = document.querySelector('.firstname');
const secondName = document.querySelector('.secondname');
const profession = document.querySelector('.profession');
const main = document.querySelector('main');
const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const contacts = document.querySelector('.contacts');
const footer = document.querySelector('footer');

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
await timeout(4000);
document.querySelector('html').style.overflowY = 'auto';
about.classList.add('visible__section');
await timeout(100);
projects.classList.add('visible__section');
await timeout(100);
contacts.classList.add('visible__section');
await timeout(100);
footer.classList.add('visible__section');

document.querySelectorAll('section').forEach(section => {
    //section.style.border = 'min(1px) red solid'
})