export const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export const scaleIn = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};
