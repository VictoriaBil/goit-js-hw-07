import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageGallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryElementMarkup(galleryItems);

const image = document.createElement("img");

imageGallery.insertAdjacentHTML("beforeend", galleryMarkup);

imageGallery.addEventListener("click", onImageClick);

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

image.classList.add("gallery__image");

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}">
`,
    {
      onShow: (modal) => {
        document.addEventListener("keydown", onPressEsc);
      },
      onClose: (modal) => {
        document.removeEventListener("keydown", onPressEsc);
      },
    }
  );
  modal.show();

  function onPressEsc(event) {
    if (event.code === "Escape") {
      modal.close();
    }
  }
}
