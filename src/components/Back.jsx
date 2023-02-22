import React from "react";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import { buttonVarients } from "../FramerVarients";

const Back = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <m.div
      className="quiz__back top__btn"
      initial={{ x: "100vh" }}
      animate={{ x: 0 }}
    >
      <m.button
        className="quiz--btn"
        onClick={goBack}
        variants={buttonVarients}
        whileHover="hover"
      >
        Back
      </m.button>
    </m.div>
  );
};

export default Back;
