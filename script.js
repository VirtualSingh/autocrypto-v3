const track = document.querySelector(".carousel__track");
const slides = [...track.children];
const dotNav = document.querySelector(".dot-nav");
const dots = [...dotNav.children];
let i = 1;

// align slides in a row
const slideWidth = slides[0].getBoundingClientRect().width;
slides.forEach((slide, index) => {
  slide.style.left = `${(slideWidth + 40) * index}px`;
});

// const getSlides = () => {
//   const currentSlide = track.querySelector(".current-slide");
//   const nextSlide = currentSlide.nextElementSibling;
// };

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

// function autoSlide() {
//   setInterval(() => {
//     i++;
//     // for (let i = 0; i < slides.length; i++) {
//     track.style.transform = `translateX(-${(slideWidth + 40) * i})`;

//     // }
//   }, 2000);
// }

// autoSlide();

dotNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("span");
  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotNav.querySelector(".current-slide");

  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  // const amountToMove = targetSlide.style.left;
  // track.style.transform = `translateX(-${amountToMove})`;

  // currentSlide.classList.remove("current-slide");
  // aimedSlide.classList.add("current-slide");

  moveToSlide(track, currentSlide, targetSlide);
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
});

// dots.forEach((dot, index) => {
//   dot.addEventListener("click", (e) => {
//     const currentSlide = track.querySelector(".current-slide");
//     const nextSlide = currentSlide.nextElementSibling;
//     moveToSlide(track, currentSlide, nextSlide);
//   });
// });

// const firstSlideClone = slides[0].cloneNode(true);
// const lastSlideClone = slides[slides.length - 1].cloneNode(true);

// carousel.append(firstSlideClone);
// carousel.prepend(lastSlideClone);

// carousel.style.transform = `translateX(${-slideWidth * index}px)`;

// const startSlide = () => {
//   setInterval(() => {
//     // index++;
//     track.style.transform = `translateX(${-slideWidth * index}px)`;
//     carousel.style.transition = "0.7s";
//   }, 3000);
// };

// carousel.addEventListener("transitionend", () => {
//   slides = [...document.querySelectorAll(".slide")];
//   if (slides[index].id === firstSlideClone.id) {
//     carousel.style.transition = "none";
//     index = 1;
//     carousel.style.transform = `translateX(${-slideWidth * index}px)`;
//   }
// });

// startSlide();

// console.log(carousel.children);

// ---------------accordian-------------
const accordianHeaders = document.querySelectorAll(".accordian__item-head");

accordianHeaders.forEach((accordianHead) => {
  accordianHead.addEventListener("click", (e) => {
    // check for already open item
    const openItem = document.querySelector(".accordian__item-head.open");
    if (openItem && openItem !== accordianHead) {
      openItem.classList.remove("open");
      openItem.nextElementSibling.style.maxHeight = 0;
    }

    // set maxHeight
    accordianHead.classList.toggle("open");
    const accordianItemBody = accordianHead.nextElementSibling;
    if (accordianHead.classList.contains("open")) {
      accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
    } else {
      accordianItemBody.style.maxHeight = 0;
    }
  });
});

// change the size of navbar on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  windowPosition = window.scrollY > 0;
  header.classList.toggle("on-scroll", windowPosition);
});

// price-toggler

const month = document.querySelector(".duration .monthly");
const year = document.querySelector(".duration .yearly");
const monthlyAmount = document.querySelectorAll(".pricing__card .monthly");
const yearlyAmount = document.querySelectorAll(".pricing__card .yearly");

year.addEventListener("click", () => {
  year.classList.add("clicked");
  month.classList.remove("clicked");
  monthlyAmount.forEach((mo) => (mo.style.display = "none"));
  yearlyAmount.forEach((yr) => (yr.style.display = "block"));
});
month.addEventListener("click", () => {
  month.classList.add("clicked");
  year.classList.remove("clicked");
  monthlyAmount.forEach((mo) => (mo.style.display = "block"));
  yearlyAmount.forEach((yr) => (yr.style.display = "none"));
});

console.log(monthlyAmount);
// console.log(yearly);
// const priceToggler = document.querySelector(".duration");
// console.log(priceToggler);

// priceToggler.addEventListener("click", (e) => {
//   const targetSpan = e.target.closest("span");
//   // console.log(targetSpan);
//   if (!targetSpan) return;
//   targetSpan.classList.toggle("clicked");
// });
