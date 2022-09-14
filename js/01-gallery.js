import { galleryItems } from './gallery-items.js';
// Change code below this line
const markup = galleryItems.map(({ original, preview, description }) =>
  `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
    </a>
  </div>`
).join('');

let instance = {};

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('afterbegin', markup);

function onEscClose(e) {
  if (e.code === "Escape") {
        instance.close();
      }
}

const lightboxDisplay = {
  onShow: () => {
    document.addEventListener('keydown', onEscClose);
  }, 
  onClose: () => {
    document.removeEventListener('keydown', onEscClose);
  }
}

function onGalleryClick(e) {
    e.preventDefault();

    if(e.target.nodeName !== 'IMG') {
        return;
    }

    const bigImgSrc = e.target.dataset.source;  
        
    instance = basicLightbox.create(`
    <img src="${bigImgSrc}" width="800" height="600">
    `, lightboxDisplay);
    instance.show();
}

gallery.addEventListener('click', onGalleryClick);


