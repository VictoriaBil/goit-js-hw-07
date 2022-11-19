import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageGallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryElementMarkup(galleryItems);

imageGallery.innerHTML = galleryMarkup;

function createGalleryElementMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
            <a class ="gallery__link" href = "${original}" >
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
  </a>
</div >`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});

// console.log(galleryItems);
