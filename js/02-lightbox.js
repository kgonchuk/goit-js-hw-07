import { galleryItems } from './gallery-items.js';
// Change code below this line

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
            alt="${description}"
          />
        </a>
      </li>`
    }).join('')
};

function onGalleryItemsClick(evt){
    evt.preventDefault();
    console.log(evt.target)
        if(evt.target.nodeName !== 'IMG'){
            return;
        }
        const isItemImage = evt.target.classList.contains("gallery__image");
        if(!isItemImage) return;
}

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250

 });



