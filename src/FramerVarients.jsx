export const containerVarients = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 1,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

export const childVarients = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const buttonVarients = {
  hover: {
    scale: 1.2,
    textShadow: "0px 0px 8px rgb(255, 204, 0)",
    boxShadow: "0px 0px 8px rgb(255, 204, 0)",
    transition: {
      repeatType: "mirror",
      repeat: Infinity,
      delay: 0.4,
    },
  },
  move: {
    x: [-2, 0 ,2],
    y: [-1, 0 ,1],
    transition: {
      repeatType: "mirror",
      repeat: Infinity,
      delay: .4,
      ease: "easeInOut"
    }
  }
 
};
