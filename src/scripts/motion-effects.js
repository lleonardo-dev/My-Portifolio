import {
  animate,
  scroll,
  frame,
} from "https://cdn.jsdelivr.net/npm/motion@12.38.0/+esm";

const cards = document.querySelectorAll(".img-container > div");

cards.forEach((item) => {
  scroll(
    animate(item, {
      opacity: [0, 1, 1, 0],
      scale: [0.8, 1, 1, 0.8],
      y: [40, 0, 0, -40],
    }),
    {
      target: item,

      offset: ["start end", "end end", "start start", "end start"],
    },
  );
});


