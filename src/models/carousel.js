import { timeout } from "../helper/helper";
import { leftTransition, removeTransitionLeftButton, removeTransitionRightButton, rightTransition, setTransitionLeftButton, setTransitionRightButton } from "../views/nodes/stylePresets/carousel";

export const Carousel = async () => {
    let wrapper = document.querySelector('.gallery');
    let carousel = document.querySelector('.gallery ul');
    let skills = Array.from(carousel.querySelectorAll('li'));

    const left = async () => {
        leftTransition();
        leftMarkup();
        fill();
    }

    const right = async () => {
        await rightTransition();
        rightMarkUp();
        fill();
    }

    const fill = async () => {
        while (carousel.lastElementChild) {
            carousel.removeChild(carousel.lastElementChild);
        }
        skills.forEach(skill => {
            carousel.appendChild(skill);
        })
    }

    const leftMarkup = async () => {
        skills.unshift(skills[skills.length - 1]);
        skills.pop();
    }

    const rightMarkUp = async () => {
        skills[skills.length] = skills[0];
        skills.shift();
    }

    const getNode = () => {
        return wrapper;
    }

    return { left, right, fill, getNode };
}