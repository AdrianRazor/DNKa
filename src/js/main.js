import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function (event) {
  // Header submenus
  const submenu = document.querySelectorAll(".submenu");

  if (submenu) {
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

  // Aside navigation
  const burger = document.querySelector(".menu__item--burger");
  const asideMenu = document.querySelector(".aside");
  const menuBottom = document.querySelector(".menu--bottom");

  if (burger) {
    const rootElement = document.documentElement;

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

  if (link) {
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
  const startAnimation = gsap.timeline();
  startAnimation
    .from(".start__img", {
      duration: 1.5,
      ease: "power3.out",
      scale: 0,
    })
    .from(
      ".start__img",
      {
        duration: 2.5,
        ease: "elastic.out(1, 0.2)",
        rotation: 20,
      },
      "-=1.5"
    )
    .from(
      ".start__text h1 span",
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
      ".start__text p",
      {
        duration: 1.5,
        ease: "power3.out",
        xPercent: -100,
        opacity: 0,
      },
      "-=1"
    )
    .from(
      ".start__btn",
      {
        duration: 1.2,
        ease: "elastic.out(1, 0.4)",
        scale: 0,
      },
      "-=2"
    );

  // Ticker animation
  gsap.to(".stripe-to-left", {
    xPercent: -100,
    repeat: -1,
    duration: 25,
    ease: "linear",
  });
  gsap.from(".stripe-to-right", {
    xPercent: -100,
    repeat: -1,
    duration: 25,
    ease: "linear",
  });

  // Slider on main page
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

  // Instagram section -> photos appearing animation
  gsap.fromTo(
    ".inst__img",
    {
      width: "0%",
      scale: 1.4,
    },
    {
      scrollTrigger: {
        trigger: ".inst",
        start: "top 50%",
      },
      duration: 2.5,
      stagger: 0.2,
      width: "100%",
      scale: 1,
      ease: "power4.out",
    }
  );

  console.log("DOM fully loaded and parsed");
});
