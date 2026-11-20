import PhotoSwipeLightbox from 'photoswipe/lightbox';


export function initPhotoSwipe() {
    let lightbox = new PhotoSwipeLightbox({
        gallery: '.gallery',
        children: 'a',
        showHideAnimationType: 'none',
        pswpModule: () => import('photoswipe'),
    });

    lightbox.init();
}