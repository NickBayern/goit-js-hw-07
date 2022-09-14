import { galleryItems } from './gallery-items.js';
// Change code below this line
function createGalleryItemsCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
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
    }).join('');
}

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsCardsMarkup(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

function onGalleryClick(e) {
    e.preventDefault();

    const bigImgSrc = e.target.dataset.source;
        
    const instance = basicLightbox.create(`
    <img src="${bigImgSrc}" width="800" height="600">
    `);

    instance.show();
}

gallery.addEventListener('click', onGalleryClick);



