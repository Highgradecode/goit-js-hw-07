import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function createGalleryItems() {
    const galleryLayout = galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
             </a>
        </div>`
    }).join('')
    
    galleryContainer.insertAdjacentHTML("afterbegin", galleryLayout);
}

galleryContainer.addEventListener('click', (event) =>{
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return
    }

    const originalImage = event.target.dataset.source;
    const galleryModalContent = `
    <img width="1400" height="900" src="${originalImage}">`

    const closeModalByEsc = (event) => {
        console.log(event.code);
        if (event.code === "Escape") {
            createModalOfOriginalImage.close()
        }
    }
    const modalImageOptions = {
        onShow: (createModalOfOriginalImage) => {
            document.addEventListener('keydown', closeModalByEsc)
        },
        onClose: (createModalOfOriginalImage) => {
            document.removeEventListener('keydown', closeModalByEsc)
        },
    }

    const createModalOfOriginalImage = basicLightbox.create(galleryModalContent, modalImageOptions)
    
    createModalOfOriginalImage.show()
})

	



















createGalleryItems()
