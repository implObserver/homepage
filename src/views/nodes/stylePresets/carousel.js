import { timeout } from "../../../helper/helper";

export const animationSpeed = 500;
export const leftButton = document.querySelector('.prev');
export const rightButton = document.querySelector('.next');

const wrapper = document.querySelector('.gallery');
const carousel = document.querySelector('.gallery ul');

export const rightTransition = async () => {
    setTransitionRightButton();
    await timeout(animationSpeed);
    removeTransitionRightButton();
}

export const leftTransition = async () => {
    removeTransitionLeftButton();
    await timeout(1);
    setTransitionLeftButton();
}

export const removeTransitionLeftButton = async () => {
    wrapper.style.transition = '';
    carousel.style.transition = '';
    wrapper.style.right = '32.5vh';
}

export const setTransitionLeftButton = async () => {
    wrapper.style.transition = `all ${animationSpeed}ms ease-out`;
    carousel.style.transition = `all ${animationSpeed}ms ease-out`;
    wrapper.style.right = '';
}

export const removeTransitionRightButton = async () => {
    wrapper.style.transition = '';
    carousel.style.transition = '';
    wrapper.style.right = '17.5vh';
}

export const setTransitionRightButton = async () => {
    wrapper.style.transition = `all ${animationSpeed}ms ease-out`;
    carousel.style.transition = `all ${animationSpeed}ms ease-out`;
    wrapper.style.right = '32.5vh';
}

export const removeArrowsPointerEvents = async () => {
    leftButton.style.pointerEvents = 'none';
    rightButton.style.pointerEvents = 'none';
}

export const setArrowsPointerEvents = async () => {
    leftButton.style.pointerEvents = 'auto';
    rightButton.style.pointerEvents = 'auto';
}

export const changeArrowsAvailability = async () => {
    removeArrowsPointerEvents();
    await timeout(animationSpeed);
    setArrowsPointerEvents();
}