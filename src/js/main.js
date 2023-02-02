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
      .from(startImg, {
        duration: 1.5,
        ease: "power3.out",
        scale: 0,
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
          opacity: 0,
          stagger: 0.3,
        },
        "-=1.8"
      )
      .from(
        startSubtitle,
        {
          duration: 1.5,
          ease: "power3.out",
          xPercent: -100,
          opacity: 0,
        },
        "-=1"
      )
      .from(
        startBtn,
        {
          duration: 1.2,
          ease: "elastic.out(1, 0.4)",
          scale: 0,
        },
        "-=2"
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

  // Slider on main page
  const swiperExist = document.querySelectorAll(".swiper");

  if (swiperExist?.length) {
    const swiperMain = new Swiper(".swiperMain", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 8000,
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
        el: ".latest__pagination",
        bulletClass: "pagination__bullet",
        bulletActiveClass: "pagination__bullet--active",
        clickable: true,
      },

      navigation: {
        nextEl: ".latest__btn-next",
        prevEl: ".latest__btn-prev",
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

  console.log("DOM fully loaded and parsed");
});
