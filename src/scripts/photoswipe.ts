import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';


export function initAllScripts() {
    initPhotoSwipe();
    initCarousel();
}

function initPhotoSwipe() {
    const lightbox = new PhotoSwipeLightbox({
        gallery: '.gallery',
        children: 'a',
        pswpModule: () => import('photoswipe'),
    });

    lightbox.init();
}

function initCarousel() {
    var card = document.querySelector(".c-card") as Element;
    var carousel = document.querySelector(".carousel") as Element;
    var prevBtn = document.querySelector(".prev") as HTMLButtonElement;
    var nextBtn = document.querySelector(".next") as HTMLButtonElement;
    var imgWidth = card?.getBoundingClientRect().width;

    const updateButtons = () => {
        prevBtn.disabled = carousel.scrollLeft <= 0;
        nextBtn.disabled =
            carousel.scrollLeft + carousel.clientWidth >=
            carousel.scrollWidth - 1;
    };

    const handleBtnClick = (type: string) => {
        if (type === "prev") {
            carousel.scrollBy({ left: -imgWidth, behavior: "smooth" });
        } else if (type === "next") {
            carousel.scrollBy({ left: imgWidth, behavior: "smooth" });
        }
    };

    prevBtn.addEventListener("click", () => handleBtnClick("prev"));
    nextBtn.addEventListener("click", () => handleBtnClick("next"));
    carousel.addEventListener("scroll", updateButtons);

    updateButtons();
}