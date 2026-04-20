var imgPopupContainer: Element | null;
var imgPopup: HTMLElement | null;
var callingImages: NodeListOf<Element>;
var carouselSocketContainer: Element | null;
var carouselSockets: NodeListOf<Element>;

var scrollIndex = 0;
var images: string[] = [];

export function initPopup() {
    imgPopupContainer = document.querySelector('.image-popup-container-overlay');
    imgPopup = document.getElementById('image-popup');
    callingImages = document.querySelectorAll('.image-popup-item');
    carouselSocketContainer = document.querySelector('.carousel-socket-container');
    carouselSockets = document.querySelectorAll('.carousel-socket');

    document.querySelector('.carousel-bttn-first')?.addEventListener('click', () => carouselScroll(false, true));
    document.querySelector('.carousel-bttn-previous')?.addEventListener('click', () => carouselScroll(false));
    document.querySelector('.carousel-bttn-next')?.addEventListener('click', () => carouselScroll(true));
    document.querySelector('.carousel-bttn-last')?.addEventListener('click', () => carouselScroll(true, true));
    document.querySelector('.image-popup-container-exit')?.addEventListener('click', () => setPopupVisibility(false));

    callingImages.forEach((cImg: Element) => {
        cImg.addEventListener('click', () => togglePopup(cImg));
    });

    if (carouselSocketContainer != null) {
        carouselSockets.forEach((cSocket) => {
            cSocket.addEventListener('click', () => showCarouselImg(cSocket))
        })
    }
}

function setPopupVisibility(show: boolean) {
    if (imgPopupContainer == null) {
        return;
    }

    const showClass = 'image-popup-container-show';
    const hideClass = 'image-popup-container-hide';

    let focus = showClass;
    let focusInvert = hideClass;
    if (!show) {
        focus = hideClass;
        focusInvert = showClass;
        scrollIndex = 0;
    }

    imgPopupContainer.classList.remove(focusInvert);
    if (!imgPopupContainer.classList.contains(focus)) {
        imgPopupContainer.classList.add(focus);
    }
}

function setCarouselVisibility(show: boolean) {
    if (carouselSocketContainer) {
        const hideClass = 'carousel-socket-container-hide';
        if (show) {
            carouselSocketContainer.classList.remove(hideClass)
        } else {
            carouselSocketContainer.classList.add(hideClass)
        }
    }
}

function showCarouselImg(carouselImg: Element) {
    const imgSrc = carouselImg.getAttribute('src');
    if (imgPopup && imgSrc) {
        imgPopup.setAttribute('src', imgSrc);
    }
}

function togglePopup(callingImg: Element) {
    if (imgPopup == null) {
        return;
    }

    const imgSrc = callingImg.getAttribute('src');
    if (imgSrc == null) {
        return;
    }
    imgPopup.setAttribute('src', imgSrc);
    setPopupVisibility(true);
    if (carouselSocketContainer == null) {
        return;
    }

    images = [];
    const callingImgId = callingImg.getAttribute('id');
    if (callingImgId == null) {
        setCarouselVisibility(false);
        return;
    }

    const callingImgPool = document.querySelectorAll(`.${callingImgId}`);

    if (callingImgPool.length > 1) {
        for (let i = 0; i < carouselSockets.length; i++) {

            if (i < callingImgPool.length) {
                const otherImgSrc = callingImgPool.item(i).getAttribute('src');
                if (otherImgSrc != null) {
                    carouselSockets.item(i).setAttribute('src', otherImgSrc);
                    images.push(otherImgSrc);
                }
            } else {
                // TODO: clear the old display and hide it, happens if total images < total sockets
            }
        }
    }
    setCarouselVisibility(callingImgPool.length > 1);
}

function carouselScroll(scrollRight: boolean, end = false) {
    const currImg = imgPopup?.getAttribute('src');
    if (imgPopup && currImg) {

        const currIndex = images.indexOf(currImg);
        let nextImg = images.at(currIndex + (scrollRight ? 1 : -1))
        if (end) {
            nextImg = images.at(scrollRight ? -1 : 0);
        }

        if (nextImg &&
            ((scrollRight && currIndex < carouselSockets.length - 1) ||
                (!scrollRight && currIndex > 0))) {
            imgPopup.setAttribute('src', nextImg)
        }
    }
}
