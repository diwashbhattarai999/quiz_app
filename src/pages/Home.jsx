import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import {
  containerVarients,
  childVarients,
  buttonVarients
} from "../FramerVarients";

function Home() {
  return (
    <m.div
      className="quiz--container center"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <m.h1 className="quiz--title">Quiz-App</m.h1>
      <m.p className="quiz--subtitle" variants={childVarients}>
        Welcome to the Quiz App
      </m.p>
      <Link to="/Setting">
        <m.button
          className="quiz--btn center"
          variants={buttonVarients}
          animate="move"
          whileHover="hover"
        >
          Start quiz
        </m.button>
      </Link>
    </m.div>
  );
}

export default Home;
