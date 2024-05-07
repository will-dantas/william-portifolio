'use client'

import { Variants } from "framer-motion";

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transtion: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
      duration: 2
    }
  }
}

export const item = {
  hidden: { y: '100%' },
  show: {
    y: '0%',
    transition: { duration: 2 }
  }
}

export const itemImage = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 2 }
  }
}

export const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 30,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 3,
      repeat: Infinity
    }
  }
};