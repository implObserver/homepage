import './views/css/style.css';
import { Carousel } from './models/carousel';

const c = Carousel();
let left = document.querySelector('.prev');
let right = document.querySelector('.next');

left.addEventListener('click', e => {
    c.left()
    left.style.pointerEvents = 'none';
    right.style.pointerEvents = 'none';
    setTimeout(() => {
        left.style.pointerEvents = 'auto';
        right.style.pointerEvents = 'auto';
    }, 600);
})

right.addEventListener('click', e => {
    c.right()
    right.style.pointerEvents = 'none';
    setTimeout(() => {
        right.style.pointerEvents = 'auto';
    }, 600);
})