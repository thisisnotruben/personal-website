import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';


export function initPhotoSwipe() {
    const lightbox = new PhotoSwipeLightbox({
        gallery: '.gallery',
        children: 'a',
        pswpModule: () => import('photoswipe'),
    });

    lightbox.init();
}
