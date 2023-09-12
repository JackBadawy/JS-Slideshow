let pictureNumber = 1;
const slideshowImageElement = document.getElementById(
  "slideshow_image_element"
);
const slideshowPreviousPictureButton = document.getElementById(
  "previous_picture_button"
);
const slideshowNextPictureButton = document.getElementById(
  "next_picture_button"
);

function slideshowCurrentPicture() {
  slideshowImageElement.src = `img/img${pictureNumber}.png`;
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
