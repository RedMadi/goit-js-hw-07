import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const createGalleryCard = ({ preview, original, description }) =>
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</li>`;

const itemsListArr = galleryItems.map((item) => createGalleryCard(item)).join("");

galleryList.insertAdjacentHTML("afterbegin", itemsListArr);

galleryList.addEventListener("click", openOriginal);

function openOriginal(event) {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }
  const originalImageUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${originalImageUrl}" width="800" height="600">`);
  instance.show();
  window.addEventListener("keydown", onEscKeyPress);
  function onEscKeyPress(event) {
    // console.log(event.code);
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
