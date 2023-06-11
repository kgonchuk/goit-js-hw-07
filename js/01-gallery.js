import { galleryItems } from './gallery-items.js';
// Change code below this line
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.






const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = creatGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);
galleryContainer.addEventListener('click', onGalleryItemsClick);
// galleryContainer.addEventListener('click', onEscKeyPress);

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
console.log(evt.target)
    if(evt.target.nodeName !== 'IMG'){
        return;
    }
    const isItemImage = evt.target.classList.contains("gallery__image");
    if(!isItemImage) return;
    const imgUrl = evt.target.dataset.source;

const instance = basicLightbox.create(
       `<img src = "${imgUrl}" width = "1200" height ="800" >`);

       instance.show();
       
}

// instance.close(onEscKeyPress);

function onEscKeyPress(e) {
    if (e.code !== 'Escape') return;
    instance.close();
    
  }
//   onEscKeyPress()

//   onShow: (instance) => {
//     window.addEventListener('keydown', onEscKeyPress);
//   }
//   onClose: (instance) => {
//     window.removeEventListener('keydown', onEscKeyPress);
//   }