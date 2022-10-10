const workersSwiper = new Swiper(".workers__swiper", {
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

const reviewItems = document.querySelectorAll(".reviews__slide");

const resetAllReviewsStyling = () => {
  reviewItems.forEach((reviewItem) => {
    reviewItem.classList.remove("reviews__slide--active");
    reviewItem.querySelector(".review-card__text").style.height = "170px";
  });
};

reviewItems.forEach((reviewItem) => {
  const header = reviewItem.querySelector(".review-card__read-more-btn");
  const body = reviewItem.querySelector(".review-card__text");

  header.addEventListener("click", () => {
    const isFaqItemActive = reviewItem.classList.contains(
      "reviews__slide--active"
    );

    if (isFaqItemActive) {
      reviewItem.classList.remove("reviews__slide--active");
      reviewItem.querySelector(".review-card__text").style.height = "170px";
      let textBtn = reviewItem
        .querySelector(".review-card__read-more-btn")
        .getAttribute("data-orig-text");
      reviewItem.querySelector(".review-card__read-more-btn").innerHTML =
        textBtn;
    } else {
      resetAllReviewsStyling();
      const bodyHeight = body.scrollHeight;
      body.style.height = bodyHeight + "px";
      reviewItem.classList.add("reviews__slide--active");
      let textBtn = reviewItem
        .querySelector(".review-card__read-more-btn")
        .getAttribute("data-active-text");
      reviewItem.querySelector(".review-card__read-more-btn").innerHTML =
        textBtn;
    }
  });
});

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const menuBtn = document.querySelector(".header-contact").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
  popup.appendChild(menuBtn);
}

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

// In your Javascript (external .js resource or <script> tag)
$(document).ready(function () {
  $(".t-work").select2({
    minimumResultsForSearch: 1,
    placeholder: "Выберите тип работы",
    allowClear: true,
  });
  $(".t-subject").select2({
    minimumResultsForSearch: 1,
    placeholder: "Предмет работы",
    allowClear: true,
  });
  $(".c-page").select2({
    minimumResultsForSearch: 1,
    placeholder: "Выберите к-во страниц",
    allowClear: true,
  });
});

/*Input range*/
for (let e of document.querySelectorAll(
  'input[type="range"].slider-progress'
)) {
  e.style.setProperty("--value", e.value);
  e.style.setProperty("--min", e.min == "" ? "0" : e.min);
  e.style.setProperty("--max", e.max == "" ? "100" : e.max);
  e.addEventListener("input", () => e.style.setProperty("--value", e.value));
}

document.getElementById("i-range").addEventListener("change", function () {
  document.querySelector(".field-range").innerHTML = this.value;
});

/*Table*/
let twHead = () => {
  const tHead = document.querySelector(".thead");
  const trHead = document.querySelector(".trHead").cloneNode(1);
  tHead.appendChild(trHead);
};
if (document.documentElement.clientWidth < 712) {
  twHead();
}
