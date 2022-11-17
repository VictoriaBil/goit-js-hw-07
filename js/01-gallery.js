import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageGallery = document.querySelector("gallery");
const galleryMarkup = createGalleryElementMarkup(galleryItems);

imageGallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryElementMarkup(galleryItems) {
  const markup = galleryItems
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

  console.log(markup);
}

// console.log(createGalleryElementMarkup(galleryItems));
