export const Carousel = () => {
    let wrapper = document.querySelector('.gallery');
    let carousel = document.querySelector('.gallery ul');
    let skills = Array.from(carousel.querySelectorAll('li'));
    console.log(skills)

    const left = () => {
        skills.unshift(skills[skills.length - 1]);
        skills.pop();
        wrapper.style.transition = '';
        carousel.style.transition = '';

        wrapper.style.right = '32.5vh';
        fill();
        setTimeout(() => {
            leftAnimation()
        }, 100);
    }

    const right = () => {
        rightAnimation()

        setTimeout(() => {
            skills[skills.length] = skills[0];
            skills.shift();
            wrapper.style.transition = '';
            carousel.style.transition = '';

            wrapper.style.right = '17.5vh';

            fill();
        }, 600);
    }

    const fill = () => {
        while (carousel.lastElementChild) {
            carousel.removeChild(carousel.lastElementChild);
        }

        skills.forEach(skill => {
            console.log(skills)
            carousel.appendChild(skill);
        })
    }

    const leftAnimation = () => {
        wrapper.style.transition = 'all 500ms ease-out';
        carousel.style.transition = 'all 500ms ease-out';

        wrapper.style.right = '';
    }

    const rightAnimation = () => {
        wrapper.style.transition = 'all 500ms ease-out';
        carousel.style.transition = 'all 500ms ease-out';

        wrapper.style.right = '32.5vh';
    }

    const getNode = () => {
        return wrapper;
    }

    return { left, right, fill, getNode, leftAnimation };
}