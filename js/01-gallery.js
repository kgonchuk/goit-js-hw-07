import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = creatGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);
galleryContainer.addEventListener('click', onGalleryItemsClick);

function creatGalleryItemsMarkup(galleryItems){
    return galleryItems.map(({preview, original, description}) => {
       return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    }).join('')
};

function onGalleryItemsClick (evt){
    evt.preventDefault();
    if(!evt.target.classList.contains("gallery__image")){
      return;
    }
     console.log(evt.target)
    const imgUrl = evt.target.dataset.source;

const instance = basicLightbox.create(
       `<img src = "${imgUrl}" width = "1200" height ="800" >`, {
        onShow: (instance) => {
                  window.addEventListener('keydown', onEscKeyPress);
                },
                onClose: (instance) => {
                  window.removeEventListener('keydown', onEscKeyPress);
                },
       }
       );

       instance.show();
       function onEscKeyPress(evt) {
            const ESC_KEY_CODE = 'Escape';
            const isEscKey = evt.code === ESC_KEY_CODE;
            if (!isEscKey) return;
            instance.close();
          }
}

