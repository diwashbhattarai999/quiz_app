import React from "react";
import { Link } from "react-router-dom";
import "../styles/Final.css";
import { motion as m } from "framer-motion";
import {
  containerVarients,
  childVarients,
  buttonVarients,
} from "../FramerVarients";

function Final() {
  const data = JSON.parse(localStorage.getItem("initialState"));

  return (
    <m.div
      className="quiz--container center quiz--final-container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <m.div className="quiz--final-title">Final Score</m.div>
      <m.p className="quiz--subtitle" variants={childVarients}>
        You Scored : {data.score + 1}
      </m.p>
      <Link to="/">
        <m.button
          className="quiz--btn center"
          variants={buttonVarients}
          animate="move"
          whileHover="hover"
        >
          Back to Home
        </m.button>
      </Link>
    </m.div>
  );
}

export default Final;
