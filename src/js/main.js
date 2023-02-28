import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function (event) {
  const rootElement = document.documentElement;

  // Header submenus
  const submenu = document.querySelectorAll(".submenu");

  if (submenu?.length) {
    submenu.forEach((item) => {
      item.addEventListener("click", () => {
        if (!item.classList.contains("open")) {
          submenu.forEach((el) => {
            el.classList.remove("open");
          });
        }

        item.classList.toggle("open");
      });
    });

    window.addEventListener("click", (event) => {
      if (
        !event.target.closest(".submenu") ||
        event.target.classList.contains("submenu__item")
      ) {
        submenu.forEach((item) => {
          item.classList.remove("open");
        });
      }
    });
  }

  // Header search
  const headerSearchBtn = document.querySelector("#headerSearchBtn");
  const menuSearch = document.querySelector(".menu__search");

  if (headerSearchBtn) {
    headerSearchBtn.addEventListener("click", () => {
      menuSearch.classList.toggle("open");
    });

    window.addEventListener("click", (e) => {
      if (
        !e.target.closest(".search") &&
        !e.target.closest("#headerSearchBtn")
      ) {
        menuSearch.classList.remove("open");
      }
    });
  }

  // Searching
  const search = document.querySelectorAll(".search");
  const searchInput = document.querySelectorAll(".search input");

  if (search?.length) {
    searchInput.forEach((input, index) => {
      input.addEventListener("input", (e) => {
        if (!e.target.value == "") {
          search[index].classList.add("active");
        } else {
          search[index].classList.remove("active");
        }
      });
    });
  }

  // Search popup
  const headerSearchPopupBtn = document.querySelector("#headerSearchPopupBtn");
  const popupSearch = document.querySelector(".popup--search");

  if (headerSearchPopupBtn && popupSearch) {
    headerSearchPopupBtn.addEventListener("click", openPopup);

    const btnClose = popupSearch.querySelector(".popup__close");

    if (btnClose) {
      btnClose.addEventListener("click", closePopup);
    }

    const popupTitle = popupSearch.querySelector(".popup__title");

    if (popupTitle) {
      popupTitle.addEventListener("click", closePopup);
    }

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup--search")) {
        closePopup();
      }
    });

    function openPopup() {
      popupSearch.classList.add("open");
      rootElement.classList.add("block");
    }

    function closePopup() {
      popupSearch.classList.remove("open");
      rootElement.classList.remove("block");
    }
  }

  // Filter popup
  const filterPopupBtn = document.querySelector("#filterPopupBtn");
  const popupFilter = document.querySelector(".popup--filter");

  if (filterPopupBtn && popupFilter) {
    filterPopupBtn.addEventListener("click", openPopup);

    const btnClose = popupFilter.querySelector(".popup__close");

    if (btnClose) {
      btnClose.addEventListener("click", closePopup);
    }

    const popupTitle = popupFilter.querySelector(".popup__title");

    if (popupTitle) {
      popupTitle.addEventListener("click", closePopup);
    }

    function openPopup() {
      popupFilter.classList.add("open");
      rootElement.classList.add("block");
    }

    function closePopup() {
      popupFilter.classList.remove("open");
      rootElement.classList.remove("block");
    }
  }

  // Cart popup
  const btnCart = document.querySelectorAll(".cart-icon");
  const popupCart = document.querySelector(".popup--cart");

  if (btnCart?.length && popupCart) {
    btnCart.forEach((item) => {
      item.addEventListener("click", openPopup);
    });

    const btnClose = popupCart.querySelector(".popup__close");

    if (btnClose) {
      btnClose.addEventListener("click", closePopup);
    }

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup--cart")) {
        closePopup();
      }
    });

    function openPopup() {
      popupCart.classList.add("open");
      rootElement.classList.add("block");
    }

    function closePopup() {
      popupCart.classList.remove("open");
      rootElement.classList.remove("block");
    }
  }

  // Video popup
  const btnVideo = document.querySelector(".info__btn");
  const popupVideo = document.querySelector(".popup--video");

  if (btnVideo && popupVideo) {
    btnVideo.addEventListener("click", openPopup);

    const video = popupVideo.querySelector("video");
    const btnClose = popupVideo.querySelector(".popup__close");

    if (btnClose) {
      btnClose.addEventListener("click", closePopup);
    }

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup--video")) {
        closePopup();
      }
    });

    function openPopup() {
      popupVideo.classList.add("open");
      rootElement.classList.add("block");
      video.play();
    }

    function closePopup() {
      popupVideo.classList.remove("open");
      rootElement.classList.remove("block");
      video.pause();
    }
  }

  // Aside navigation
  const burger = document.querySelector(".menu__item--burger");
  const asideMenu = document.querySelector(".aside");
  const menuBottom = document.querySelector(".menu--bottom");

  if (burger && asideMenu && menuBottom) {
    burger.addEventListener("click", () => {
      asideMenu.classList.add("open");
      menuBottom.classList.add("hide");
      rootElement.classList.add("block");
    });

    window.addEventListener("click", (event) => {
      if (event.target.classList.contains("aside")) {
        asideMenu.classList.remove("open");
        menuBottom.classList.remove("hide");
        rootElement.classList.remove("block");
      }
    });
  }

  // Link's hover
  const link = document.querySelectorAll(".line-hover");

  if (link?.length) {
    link.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        el.classList.add("active");
      });
      el.addEventListener("mouseleave", () => {
        el.classList.remove("active");
      });
    });
  }

  // Header animation
  const header = document.querySelector(".header__wrapper");

  gsap.to(header, {
    duration: 1,
    delay: 0.5,
    opacity: 1,
    ease: "power1.out",
  });

  // Start section animation
  const start = document.querySelector(".start");
  const startImg = document.querySelectorAll(".start__img");
  const startTitle = document.querySelectorAll(".start__text h1 span");
  const startSubtitle = document.querySelector(".start__text p");
  const startBtn = document.querySelector(".start__btn");
  const startAnimation = gsap.timeline();

  if (
    start &&
    startImg?.length &&
    startTitle?.length &&
    startSubtitle &&
    startBtn
  ) {
    startAnimation
      .to(startImg, {
        duration: 1.5,
        ease: "power3.out",
        scale: 1,
      })
      .from(
        startImg,
        {
          duration: 2.5,
          ease: "elastic.out(1, 0.2)",
          rotation: 20,
        },
        "-=1.5"
      )
      .from(
        startTitle,
        {
          duration: 2.5,
          ease: "power3.out",
          xPercent: -140,
          stagger: 0.3,
        },
        "-=2.5"
      )
      .to(
        startTitle,
        {
          duration: 2.5,
          ease: "power3.out",
          opacity: 1,
          stagger: 0.3,
        },
        "-=2.5"
      )
      .to(
        startSubtitle,
        {
          duration: 1.5,
          ease: "power3.out",
          x: 0,
          opacity: 1,
        },
        "-=2"
      )
      .to(
        startBtn,
        {
          duration: 1.2,
          ease: "elastic.out(1, 0.4)",
          scale: 1,
        },
        "-=2"
      );
  }

  // Catalog animation
  const breadcrumbs = document.querySelector(".breadcrumbs");
  const catalogTitle = document.querySelector(".catalog__head .title");
  const catalogKinds = document.querySelector(".catalog__kinds");
  const catalogFilters = document.querySelector(".catalog__filters");
  const catalogCard = document.querySelectorAll(".catalog__card");
  const catalogAnimation = gsap.timeline({ delay: 0.5 });

  if (
    breadcrumbs &&
    catalogTitle &&
    catalogFilters &&
    catalogKinds &&
    catalogCard
  ) {
    catalogAnimation
      .to(breadcrumbs, {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power1.out",
      })
      .to(
        catalogTitle,
        {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: "power1.out",
        },
        "-=0.7"
      )
      .to(
        catalogKinds,
        {
          duration: 1,
          opacity: 1,
          x: 0,
          ease: "power1.out",
        },
        "-=0.6"
      )
      .to(
        catalogFilters,
        {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: "power1.out",
        },
        "-=0.7"
      )
      .to(
        catalogCard,
        {
          duration: 1,
          opacity: 1,
          ease: "power1.out",
          stagger: 0.1,
        },
        "-=0.5"
      );
  }

  // Our Production animation
  const ourTitle = document.querySelector(".our__title");
  const ourLinks = document.querySelectorAll(".our__link");
  const ourAnimation = gsap.timeline({ delay: 0.5 });

  if (breadcrumbs && ourTitle && ourLinks?.length) {
    ourAnimation
      .to(breadcrumbs, {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power1.out",
      })
      .to(
        ourTitle,
        {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: "power1.out",
        },
        "-=0.7"
      )
      .to(
        ourLinks,
        {
          duration: 1,
          opacity: 1,
          stagger: 0.2,
          ease: "power1.out",
        },
        "-=0.7"
      );
  }

  // About animation
  const aboutTitle = document.querySelector(".about__title h1");
  const aboutText = document.querySelectorAll(".about p");
  const aboutImage = document.querySelectorAll(".about__image");
  const aboutBtn = document.querySelector(".about__btn");
  const aboutAnimation = gsap.timeline({ delay: 0.5 });

  if (
    breadcrumbs &&
    aboutTitle &&
    aboutText?.length &&
    aboutImage?.length &&
    aboutBtn
  ) {
    aboutAnimation
      .to(breadcrumbs, {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power1.out",
      })
      .to(
        aboutTitle,
        {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: "power1.out",
        },
        "-=0.7"
      )
      .to(
        aboutText,
        {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: "power1.out",
          stagger: 0.1,
        },
        "-=0.7"
      )
      .to(
        aboutImage,
        {
          duration: 1,
          opacity: 1,
          ease: "power1.out",
          stagger: 0.2,
        },
        "-=0.7"
      )
      .to(
        aboutBtn,
        {
          duration: 1.2,
          ease: "elastic.out(1, 0.4)",
          scale: 1,
        },
        "-=2"
      );
  }

  // Contacts animation
  const contactsTitle = document.querySelector(".contacts__title");
  const contactsBody = document.querySelector(".contacts__body");
  const contactsAnimation = gsap.timeline({ delay: 0.5 });

  if (breadcrumbs && contactsTitle && contactsBody) {
    contactsAnimation
      .to(breadcrumbs, {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power1.out",
      })
      .to(
        contactsTitle,
        {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: "power1.out",
        },
        "-=0.7"
      )
      .to(
        contactsBody,
        {
          duration: 1,
          opacity: 1,
          ease: "power1.out",
        },
        "-=0.7"
      );
  }

  // Ticker animation
  const stripeLeft = document.querySelectorAll(".stripe-to-left");
  const stripeRight = document.querySelectorAll(".stripe-to-right");

  if (stripeLeft?.length) {
    gsap.to(stripeLeft, {
      xPercent: -100,
      repeat: -1,
      duration: 40,
      ease: "linear",
    });
  }

  if (stripeRight?.length) {
    gsap.from(stripeRight, {
      xPercent: -100,
      repeat: -1,
      duration: 40,
      ease: "linear",
    });
  }

  // Swiper
  const swiperExist = document.querySelectorAll(".swiper");

  if (swiperExist?.length) {
    const swiperMain = new Swiper(".swiperMain", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 6000,
      },

      breakpoints: {
        375: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 15,
        },
        1023: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 0,
        },
        1700: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      },

      pagination: {
        el: ".swiper-pagination",
        bulletClass: "pagination__bullet",
        bulletActiveClass: "pagination__bullet--active",
        clickable: true,
      },

      navigation: {
        nextEl: ".pagination__btn-next",
        prevEl: ".pagination__btn-prev",
      },
    });

    function renderSliderBullets() {
      const bulletsContainer = document.querySelectorAll(".pagination__bullet");

      if (bulletsContainer) {
        bulletsContainer.forEach((container) => {
          container.innerHTML = "";

          const fragment = document.createDocumentFragment();

          for (let j = 0; j < swiperMain.loopedSlides; j++) {
            const bulletRender = document.createElement("span");
            fragment.append(bulletRender);
          }
          container.append(fragment);
        });
      }
    }

    renderSliderBullets();

    window.addEventListener("resize", renderSliderBullets);

    const swiperPalette = new Swiper(".swiperPalette", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },

      breakpoints: {
        375: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1023: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
        },
        1700: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      },

      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      //   renderBullet: function (index, className) {
      //     return '<span class="' + className + '">' + (index + 1) + "</span>";
      //   },
      // },

      // navigation: {
      //   nextEl: ".pagination__btn-next",
      //   prevEl: ".pagination__btn-prev",
      // },
    });

    const swiperPartners = new Swiper(".swiperPartners", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },

      breakpoints: {
        375: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1023: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
        },
        1700: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },

      navigation: {
        nextEl: ".pagination__btn-next",
        prevEl: ".pagination__btn-prev",
      },
    });
  }

  // Instagram section -> photos appearing animation
  const inst = document.querySelector(".inst");
  const instImg = document.querySelectorAll(".inst__img");

  if (inst && instImg?.length) {
    gsap.fromTo(
      instImg,
      {
        width: "0%",
        scale: 1.4,
      },
      {
        scrollTrigger: {
          trigger: inst,
          start: "top 50%",
        },
        duration: 2.5,
        stagger: 0.2,
        width: "100%",
        scale: 1,
        ease: "power4.out",
      }
    );
  }

  // Filter
  const filter = document.querySelectorAll(".filter");
  const filterHead = document.querySelectorAll(".filter__head");

  if (filter?.length && filterHead?.length) {
    filterHead.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        // if (!btn.classList.contains("open")) {
        //   submenu.forEach((el) => {
        //     el.classList.remove("open");
        //   });
        // }

        filter[index].classList.toggle("open");
      });
    });

    window.addEventListener("click", (event) => {
      if (!event.target.closest(".filter")) {
        filter.forEach((item) => {
          item.classList.remove("open");
        });
      }
    });
  }

  // Tabs
  const tabItem = document.querySelectorAll(".tabs__item");
  const tabBody = document.querySelectorAll(".tabs__body");

  if (tabItem?.length) {
    tabItem.forEach((item, index) => {
      item.addEventListener("click", () => {
        if (tabBody?.length) {
          tabBody.forEach((el) => {
            el.classList.remove("active");
          });
          tabBody[index].classList.add("active");
        }

        tabItem.forEach((el) => {
          el.classList.remove("active");
        });
        item.classList.add("active");
      });
    });
  }

  // Product thumbs slider
  if (swiperExist?.length) {
    const swiperThumbs = new Swiper(".swiperThumbs", {
      slidesPerView: 5,
      direction: "horizontal",
      spaceBetween: 10,
      grabCursor: true,

      breakpoints: {
        1600: {
          slidesPerView: 6,
          direction: "vertical",
          spaceBetween: 20,
        },
      },
    });

    const swiperProduct = new Swiper(".swiperProduct", {
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      thumbs: {
        swiper: swiperThumbs,
      },
    });
  }

  // Accordion
  const accordion = document.querySelectorAll(".accordion");

  if (accordion?.length) {
    accordion.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("open");
      });
    });
  }

  // Select
  const select = document.querySelectorAll(".select");

  if (select?.length) {
    select.forEach((sel) => {
      const selectHead = sel.querySelector(".select__head");
      const selectCurrent = sel.querySelector(".select__current");
      const selectItem = sel.querySelectorAll(".select__item");

      selectHead.addEventListener("click", () => {
        sel.classList.toggle("active");
      });

      selectItem.forEach((el) => {
        el.addEventListener("click", () => {
          selectCurrent.textContent = el.textContent;
          sel.classList.remove("active");
          sel.classList.add("selected");
        });
      });

      window.addEventListener("click", (e) => {
        if (!e.target.closest(".select")) {
          sel.classList.remove("active");
        }
      });
    });
  }

  // Comments
  const btnComment = document.querySelector(".testimonials__btn");
  const popupComment = document.querySelector(".popup--comment");

  if (btnComment && popupComment) {
    btnComment.addEventListener("click", openPopup);

    const btnClose = popupComment.querySelector(".popup__close");
    const popupTitle = popupComment.querySelector(".popup__title");

    if (btnClose) {
      btnClose.addEventListener("click", closePopup);
    }

    if (popupTitle) {
      popupTitle.addEventListener("click", closePopup);
    }

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup--comment")) {
        closePopup();
      }
    });

    function openPopup() {
      popupComment.classList.add("open");
      rootElement.classList.add("block");
    }

    function closePopup() {
      popupComment.classList.remove("open");
      rootElement.classList.remove("block");
    }
  }

  // Contacts
  const btnContacts = document.querySelector("#btn-contacts");
  const popupContacts = document.querySelector(".popup--contacts");

  if (btnContacts && popupContacts) {
    btnContacts.addEventListener("click", openPopup);

    const btnClose = popupContacts.querySelector(".popup__close");
    const popupTitle = popupContacts.querySelector(".popup__title");

    if (btnClose) {
      btnClose.addEventListener("click", closePopup);
    }

    if (popupTitle) {
      popupTitle.addEventListener("click", closePopup);
    }

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup--contacts")) {
        closePopup();
      }
    });

    function openPopup() {
      popupContacts.classList.add("open");
      rootElement.classList.add("block");
    }

    function closePopup() {
      popupContacts.classList.remove("open");
      rootElement.classList.remove("block");
    }
  }

  // Popup login tabs
  const popupLogin = document.querySelector(".popup--login");
  const popupTabItem = document.querySelectorAll(".popup__tab-item");
  const popupTabBody = document.querySelectorAll(".popup__login");

  if (popupTabItem?.length && popupTabBody?.length) {
    popupTabItem.forEach((item, index) => {
      item.addEventListener("click", () => {
        popupTabItem.forEach((el) => {
          el.classList.remove("active");
        });
        item.classList.add("active");

        popupTabBody.forEach((el) => {
          el.classList.remove("active");
        });
        popupTabBody[index].classList.add("active");
      });
    });

    const btnClose = popupLogin.querySelector(".popup__close");

    if (btnClose) {
      btnClose.addEventListener("click", closePopup);
    }

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup--login")) {
        closePopup();
      }
    });

    function closePopup() {
      popupLogin.classList.remove("open");
      rootElement.classList.remove("block");
    }
  }

  // Compare modal
  const btnSort = document.querySelectorAll(".card__btn--sort");
  const modalCompare = document.querySelector(".modal");

  if (btnSort?.length && modalCompare) {
    btnSort.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalCompare.classList.add("open");
      });
    });

    const modalClearBtn = document.querySelector("#modalClearBtn");

    if (modalClearBtn) {
      modalClearBtn.addEventListener("click", () => {
        modalCompare.classList.remove("open");
        modalCompare.classList.remove("active");
        rootElement.classList.remove("block");
      });
    }

    window.addEventListener("click", (e) => {
      if (
        (window.screen.width < 768 &&
          e.target.classList.contains("modal__window")) ||
        (window.screen.width < 768 &&
          e.target.classList.contains("modal__container"))
      ) {
        rootElement.classList.add("block");
        modalCompare.classList.add("active");
      }

      if (
        e.target.classList.contains("modal") &&
        e.target.classList.contains("open") &&
        e.target.classList.contains("active")
      ) {
        rootElement.classList.remove("block");
        modalCompare.classList.remove("active");
      }
    });
  }

  // Compare page -> horizontal scroll
  const compareContainer = document.querySelector(".compare__content");

  if (compareContainer) {
    compareContainer.addEventListener("wheel", (e) => {
      e.preventDefault();

      compareContainer.scrollBy({
        left: e.deltaY < 0 ? -100 : 100,
      });
    });
  }

  // Heart icon
  const addToWishlist = document.querySelectorAll(".card__btn--heart");

  if (addToWishlist?.length) {
    addToWishlist.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("added");
      });
    });
  }

  console.log("DOM fully loaded and parsed");
});
