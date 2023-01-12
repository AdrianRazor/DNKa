import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

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

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
});
