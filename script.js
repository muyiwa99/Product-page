// Variables

// - Quantity counter
const add = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const itemsNumber = document.querySelector(".numberofitems");
let count = 0;

// - ATC section
const atcButton = document.getElementById("atc-button");
const emtyCartHead = document.querySelector(".head");
const emtyCartText = document.querySelector(".text");
const itemCost = document.querySelector("cost");
const itemAmount = document.querySelector(".amount");
const itemTotal = document.querySelector(".total");
const fullCart = document.querySelector(".cart-menu-content");
const notification = document.querySelector(".notification");

const deleteIcon = document.querySelector(".delete-icon");

// -------------Thumbnail carousel----------------
const mainImage1 = document.getElementById("1");
const mainImage2 = document.getElementById("2");
const mainImage3 = document.getElementById("3");
const mainImage4 = document.getElementById("4");

const subImage1 = document.querySelector(".thumbnail-1");
const subImage2 = document.querySelector(".thumbnail-2");
const subImage3 = document.querySelector(".thumbnail-3");
const subImage4 = document.querySelector(".thumbnail-4");

subImage1.addEventListener("click", function (e) {
  mainImage1.classList.add("active-i");
  mainImage2.classList.remove("active-i");
  mainImage3.classList.remove("active-i");
  mainImage4.classList.remove("active-i");
});
subImage2.addEventListener("click", function () {
  mainImage1.classList.remove("active-i");
  mainImage3.classList.remove("active-i");
  mainImage4.classList.remove("active-i");
  mainImage2.classList.add("active-i");
});

subImage3.addEventListener("click", function () {
  mainImage1.classList.remove("active-i");
  mainImage2.classList.remove("active-i");
  mainImage4.classList.remove("active-i");
  mainImage3.classList.add("active-i");
});

subImage4.addEventListener("click", function () {
  mainImage1.classList.remove("active-i");
  mainImage2.classList.remove("active-i");
  mainImage3.classList.remove("active-i");
  mainImage4.classList.add("active-i");
});

// --------Quantity counter----------
add.addEventListener("click", function () {
  count++;
  itemsNumber.value = count;
});

minus.addEventListener("click", function () {
  if (itemsNumber.value > 0) {
    count--;
    itemsNumber.value = count;
  } else {
    alert("Number already 0");
  }
});

// -----------ATC container---------
function atc() {
  if (itemsNumber.value <= 0) {
    emtyCartHead.style.visibility = "visible";
    emtyCartText.style.visibility = " visible";
    alert(" Select Quantity please");
  } else if (itemsNumber.value > 0) {
    // emtyCartHead.style.display = "none";
    emtyCartText.style.display = "none";
    fullCart.style.visibility = "visible";
    itemAmount.textContent = itemsNumber.value;
    itemTotal.textContent = `$${125 * itemAmount.textContent}.00`;
    notification.style.display = "block";
    notification.textContent = itemsNumber.value;
  }
}

// ATC button
atcButton.addEventListener("click", function (event) {
  event.preventDefault();
  atc();
});

// Delete icon
deleteIcon.addEventListener("click", function () {
  emtyCartHead.style.visibility = "visible";
  emtyCartText.style.display = "block";
  notification.style.display = "none";

  fullCart.style.visibility = "hidden";
});

// ---------Main image carousel------------

const popUpImageList = document.querySelectorAll(".main-images-1");
const popUpcarousel = document.querySelector(".no-display");
const mainSection = document.querySelector(".main");
const modal = document.querySelector(".main-modal");

const crossButton = document.querySelector(".main-modal-close");

// When any of the larger images are clicked on, the image caorusel will then pop up
popUpImageList.forEach((image) => {
  image.addEventListener("click", (event) => {
    popUpcarousel.style.display = " block";
  });
});

// An event listener for the cancel button above the carousel.
crossButton.addEventListener("click", function () {
  popUpcarousel.style.display = "none";
  // Removing the overlay
  overlay.style.display = "none";
});

// Thumbnail Nav section
const carouselImage1 = document.getElementById("c1");
const carouselImage2 = document.getElementById("c2");
const carouselImage3 = document.getElementById("c3");
const carouselImage4 = document.getElementById("c4");

const carouselSubImage1 = document.querySelector(".main-modal_pannel-1 ");
const carouselSubImage2 = document.querySelector(".main-modal_pannel-2");
const carouselSubImage3 = document.querySelector(".main-modal_pannel-3");
const carouselSubImage4 = document.querySelector(".main-modal_pannel-4");

carouselSubImage1.addEventListener("click", function (e) {
  carouselImage1.classList.add("active");
  carouselImage2.classList.remove("active");
  carouselImage3.classList.remove("active");
  carouselImage4.classList.remove("active");
});
carouselSubImage2.addEventListener("click", function () {
  carouselImage4.classList.remove("active");
  carouselImage3.classList.remove("active");
  carouselImage1.classList.remove("active");
  carouselImage2.classList.add("active");
});

carouselSubImage3.addEventListener("click", function () {
  carouselImage1.classList.remove("active");
  carouselImage2.classList.remove("active");
  carouselImage4.classList.remove("active");
  carouselImage3.classList.add("active");
});

carouselSubImage4.addEventListener("click", function () {
  carouselImage1.classList.remove("active");
  carouselImage2.classList.remove("active");
  carouselImage3.classList.remove("active");
  carouselImage4.classList.add("active");
});

// ----- Popup carusel Next and previous

// This keeps track of the current image thats displayed, its set as 0 as the first image (index0) will be displayed when the gallery loads up
let currentSlide = 0;
// Selects all the images in the pop up carousel container
const slides = document.querySelectorAll(".slide");

// This function takes a slideIndex as an argument and is responsible for showing the image corresponding to that index. It will hide all images by removing the "active" class from each of them, and then add the "active" class to the image at the specified slideIndex
function showSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slides.forEach((slide) => slide.classList.remove("active"));
  slides[slideIndex].classList.add("active");
  currentSlide = slideIndex;
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

showSlide(currentSlide);

// ----------Dark overlay section------------
const overlay = document.getElementById("overlay");
// This function adds the overlay class, an onclick function is added to the gallery image so when the user click on it the class is added.
function on() {
  overlay.style.display = "block";
}

let mobileSlides = 1;
const mobileImages = document.querySelectorAll(".slides-2");

function mobileSlideC(mobileSlidesIndex) {
  if (mobileSlidesIndex < 1) {
    mobileSlidesIndex = mobileImages.length - 1;
  } else if (mobileSlidesIndex >= mobileImages.length) {
    mobileSlidesIndex = 1;
  }

  mobileImages.forEach((mobileImages) =>
    mobileImages.classList.remove("active-i")
  );
  mobileImages[mobileSlidesIndex].classList.add("active-i");
  currentSlide = mobileSlidesIndex;
}

function mobileChangeSlide(n) {
  mobileSlideC(currentSlide + n);
}

mobileSlideC(currentSlide);

// TODO-
// Add $ to total amount- Complete
// Add little floating number of current amount above shopping icon- Complete
// Delete button- Complete
// Thumbnail images carousel- Complete
// Pop up carousel- Complete
// Pop up carousel thumbnail nav- Complete
// pop up carousel Cancel Button- Complete
// Pop up carousel next and previous buttons-Complete
// Mobile navigation- Complete
// Dark overlay for mobile pop up- Complete

const mobileCartIcon = document.querySelector(".shopping-cart");
const mobileCart = document.querySelector(".nav-cart_menu");

const mobileCartMenu = document.querySelector(".cart-menu_mobile");

const mobileCartHead = document.querySelector(".cart-menu_head ");
mobileCartIcon.addEventListener("mouseover", function () {
  mobileCart.style.visibility = "visible";
  mobileCartMenu.style.visibility = "visible";
  mobileCartHead.style.visibility = "visible";
});

mobileCartIcon.addEventListener("mouseout", function () {
  mobileCart.style.visibility = "hidden";
  mobileCartMenu.style.visibility = "hidden";
  mobileCartHead.style.visibility = "hidden";
});
