import { animate, stagger, spring } from "animejs";
import { useRef, useEffect } from "react";

// SCALE ANIMATION
export function useHoverAnimation(selector, triggerOnView = false) {
  const ref = useRef(null);

  const ScaleEnter = () => {
    animate(selector ?? ref.current, {
      scale: { to: 1.15, duration: 400 },
      duration: 0.2,
      delay: stagger(0.1),
      easing: "ease-in-out",
    });
  };

  const ScaleLeave = () => {
    animate(selector ?? ref.current, {
      scale: 1,
      duration: 0.3,
      easing: "ease-in-out",
      ease: spring({ bounce: 0.4 }),
    });
  };

  useEffect(() => {
    const element = selector ? document.querySelector(selector) : ref.current;
    if (!element) return;

    element.style.opacity = 0;
    element.style.transform = "scale(0.9)";

    const animateIn = () => {
      animate(element, {
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 800,
        ease: spring({ bounce: .35 })
      });
    };

    if (triggerOnView) {
    
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateIn();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(element);
      return () => observer.disconnect();
    } else {
      setTimeout(() => animateIn(), 100);
    }
  }, [selector, triggerOnView]);

  return { ref, ScaleEnter, ScaleLeave };
}