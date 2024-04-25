import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css'

// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

const ulSelector = document.querySelector(".gallery");

const ulGallery = galleryItems
    .map(item => 
        `<li>
        <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
        </li>`
    )
    .join("");

ulSelector.insertAdjacentHTML('afterbegin', ulGallery);

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,

});
    
console.log(galleryItems);