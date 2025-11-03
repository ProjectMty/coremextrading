import { animate, spring, stagger } from "animejs";

export const ScaleEnter = (selector = ".img-capsula-body-1") => {
  animate(selector, {
    scale: 1.5, 
    duration: 400,
    delay: stagger(100),
    easing: "easeInOutQuad",
  });
};

export const ScaleLeave = (selector = ".img-capsula-body-1") => {
  animate(selector, {
    scale: 1,
    duration: 300,
    easing: "easeInOutQuad",
    ease: spring({ bounce: 0.7 }),
  });
};

// Animación al cargar
export const FadeInOnLoad = (selector = ".fade-on-load") => {
  animate(selector, 
    { opacity: [0, 1], scale: [0.90, 1] }, 
    { duration: 0.6, easing: "ease-out" }
  );
};
