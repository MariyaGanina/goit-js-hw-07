import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryTable = createGalleryTable(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryTable);

gallery.addEventListener("click", GalleryClick);

function createGalleryTable(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `;
    })
    .join("");
}

function GalleryClick(event) {
  event.preventDefault();

  const { target } = event;

  if (target.nodeName !== "IMG") {
    return;
  }

  const originalSrc = target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${originalSrc}" width="800" height="600">
`);

  instance.show();
}

console.log(galleryItems);
