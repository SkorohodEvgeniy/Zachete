// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../styles/index.scss";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

const workersSwiper = new Swiper(".workers__swiper", {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-btn--next",
    prevEl: ".swiper-btn--prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
  },
});

const lastInBlogSwiper = new Swiper(".last-in-blog__swiper", {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-btn--next",
    prevEl: ".swiper-btn--prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
  },
});

const reviewsSwiper = new Swiper(".reviews__swiper", {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-btn--next",
    prevEl: ".swiper-btn--prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
  },
});

// --------- LAZY LOAD IMAGES ---------
// const images = document.querySelectorAll('img');
// const options = {
// 	root: null,
// 	rootMargin: '0px',
// 	threshold: 0.1
// }

// function handleImg(myImg, observer) {
// 	myImg.forEach(myImgSingle => {
// 		if (myImgSingle.intersectionRatio > 0) {
// 			loadImage(myImgSingle.target);
// 		}
// 	})
// }

// function loadImage(image) {
// 	image.src = image.getAttribute('data-src');
// 	observer.unobserve(image);
// }
// const observer = new IntersectionObserver(handleImg, options);
// images.forEach(img => {
// 	observer.observe(img);
// })

const howWorkBlocks = document.querySelectorAll(".how-work");

howWorkBlocks.forEach((howWork) => {
  const images = howWork.querySelectorAll(".how-work__img");
  const buttons = howWork.querySelectorAll(".how-work__how-work-button");

  const clearAllButtonsAppearance = () => {
    images.forEach((img) => {
      img.classList.remove("how-work__img--active");
    });
    buttons.forEach((button) => {
      button.classList.remove("how-work-button--active");
    });
  };

  buttons.forEach((button, idx) => {
    button.addEventListener("click", () => {
      clearAllButtonsAppearance();
      button.classList.add("how-work-button--active");
      images[idx].classList.add("how-work__img--active");
    });
  });
});

const faqItems = document.querySelectorAll(".faq-item");

const resetAllFaqsStyling = () => {
  faqItems.forEach((faqItem) => {
    faqItem.classList.remove("faq-item--active");
    faqItem.querySelector(".faq-item__body").style.height = "1px";
  });
};

faqItems.forEach((faqItem) => {
  const header = faqItem.querySelector(".faq-item__header");
  const body = faqItem.querySelector(".faq-item__body");

  header.addEventListener("click", () => {
    const isFaqItemActive = faqItem.classList.contains("faq-item--active");

    if (isFaqItemActive) {
      faqItem.classList.remove("faq-item--active");
      faqItem.querySelector(".faq-item__body").style.height = "1px";
    } else {
      resetAllFaqsStyling();
      const bodyHeight = body.scrollHeight;
      body.style.height = bodyHeight + "px";
      faqItem.classList.add("faq-item--active");
    }
  });
});

const partnerPrograms = document.querySelectorAll(".partner-program");
partnerPrograms.forEach((partnerProgram) => {
  const buttons = partnerProgram.querySelectorAll(".partner-program__tab-btn");
  const cards = partnerProgram.querySelectorAll(
    ".partner-program__content-card"
  );

  const resetAllStyles = () => {
    buttons.forEach((button) => {
      button.classList.remove("partner-program__tab-btn--active");
    });
    cards.forEach((card) => {
      card.classList.remove("partner-program__content-card--active");
    });
  };

  buttons.forEach((button, idx) => {
    button.addEventListener("click", () => {
      const isActiveButton = button.classList.contains(
        "partner-program__tab-btn--active"
      );

      if (!isActiveButton) {
        resetAllStyles();
        buttons[idx].classList.add("partner-program__tab-btn--active");
        cards[idx].classList.add("partner-program__content-card--active");
      }
    });
  });
});
