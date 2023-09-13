let pictureNumber = 1;
/* const slideshowImageElement = document.getElementById(
  "slideshow_image_element"
); */
const mainElement = document.getElementsByTagName("main");

const slideshowPreviousPictureButton = document.getElementById(
  "previous_picture_button"
);
const slideshowNextPictureButton = document.getElementById(
  "next_picture_button"
);

const slideshowImageElement = document.createElement("img");
slideshowImageElement.id = "slideshow_image_element";
slideshowImageElement.classList.add("fade-in");
slideshowImageElement.src = `img/img${pictureNumber}.png`;
mainElement[0].insertBefore(slideshowImageElement, slideshowNextPictureButton);

function slideshowCurrentPicture() {
  slideshowImageElement.src = `img/img${pictureNumber}.png`;
  slideshowImageElement.remove();
  mainElement[0].insertBefore(
    slideshowImageElement,
    slideshowNextPictureButton
  );
}

slideshowPreviousPictureButton.addEventListener("click", () => {
  pictureNumber = pictureNumber - 1;
  if (pictureNumber === 0) {
    pictureNumber = 3;
  }
  slideshowCurrentPicture();
});

slideshowNextPictureButton.addEventListener("click", () => {
  pictureNumber = pictureNumber + 1;
  if (pictureNumber === 4) {
    pictureNumber = 1;
  }
  slideshowCurrentPicture();
});
