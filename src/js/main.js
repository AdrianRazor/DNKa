import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function (event) {
  // Header submenus
  const submenu = document.querySelectorAll(".submenu");
  console.log(submenu);

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
