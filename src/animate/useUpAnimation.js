import { animate } from "animejs";
import { useRef, useEffect } from "react";

// UP ANIMATION
export function useUpAnimation() {
 const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEnter = () => {
      animate(element, { y: -30 }, { duration: 0.3, easing: "ease-out" });
    };

    const handleMouseLeave = () => {
      animate(element, { y: 0 }, { duration: 0.3, easing: "ease-out" });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);


  return { ref };
}