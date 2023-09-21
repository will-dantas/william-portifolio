'use client'

export const container = {
  hidden: {
    opacity: 1,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.9,
      staggerChildren: 0.2
    }
  }
};

export const characterAnimation = {
  hidden: {
    x: 100,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.8
    }
  },
  visible: {
    x: 0,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.8
    }
  }
};


