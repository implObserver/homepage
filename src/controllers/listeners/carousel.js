import { Carousel } from "../../models/carousel";
import { changeArrowsAvailability, leftButton, rightButton } from "../../views/nodes/stylePresets/carousel";

export const setEventListenersForCarousel = async () => {
    const carousel = await Carousel();

    leftButton.addEventListener('click', async () => {
        changeArrowsAvailability();
        carousel.left()
    })

    rightButton.addEventListener('click', async () => {
        changeArrowsAvailability();
        carousel.right()
    })
}