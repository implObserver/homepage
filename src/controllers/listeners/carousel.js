import { Carousel } from "../../models/carousel";
import { changeArrowsAvailability, leftButton, rightButton } from "../../views/nodes/stylePresets/carousel";

export const setEventListenersForCarousel = async () => {
    const carousel = await Carousel();
    const getInterval = () => {
        return setInterval(() => {
            changeArrowsAvailability();
            carousel.right();
        }, 3000);
    }

    let interval = getInterval();

    leftButton.addEventListener('click', async () => {
        clearInterval(interval);
        changeArrowsAvailability();
        carousel.left()
        interval = getInterval();
    })

    rightButton.addEventListener('click', async () => {
        clearInterval(interval);
        changeArrowsAvailability();
        carousel.right();
        interval = getInterval();
    })
}
