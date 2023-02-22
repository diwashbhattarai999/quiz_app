import { useState } from "react";
import { motion as m } from "framer-motion";
import { buttonVarients } from "../FramerVarients";

function DarkMode() {
  const [theme, setTheme] = useState("dark-mode");

  const handleClick = () => {
    document.body.className = theme;
    setTheme((prevTheme) =>
      prevTheme === "light-mode" ? "dark-mode" : "light-mode"
    );
  };

  const btnText = theme === "dark-mode" ? "darkmode" : "lightmode";

  return (
    <m.div
      className="darkMode top__btn"
      initial={{ x: "-100vh" }}
      animate={{ x: 0 }}
    >
      <m.button
        className="quiz--btn"
        onClick={handleClick}
        variants={buttonVarients}
        whileHover="hover"
      >
        {btnText}
      </m.button>
    </m.div>
  );
}

export default DarkMode;
