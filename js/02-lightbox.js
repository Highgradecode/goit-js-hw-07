import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const galleryLayout = galleryItems.map(({preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
}).join('')

galleryContainer.insertAdjacentHTML("afterbegin", galleryLayout);


const lightboxOptions = {
    captionsData: 'alt',
    captionDelay: 250,
}

var lightbox = new SimpleLightbox('.gallery a', lightboxOptions);



