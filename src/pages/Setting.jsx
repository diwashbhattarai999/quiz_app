import React, { useEffect, useState } from "react";
import { SelectField, TextField, Loading, Error } from "../components";
import "../styles/Setting.css";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import {
  containerVarients,
  childVarients,
  buttonVarients,
} from "../FramerVarients";

function Setting() {
  const [initialState, setInitialState] = useState({
    question_category: "",
    question_difficulty: "",
    question_type: "",
    amount_of_questions: 50,
    score: 0,
  });

  const { response, error, loading } = useAxios({ url: "api_category.php" });

  useEffect(() => {
    localStorage.setItem("initialState", JSON.stringify(initialState));
  }, [initialState]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const handleClick = () => {
  //   setInitialState({});
  // };

  const handleText = (text) => {
    setInitialState((prevInitialState) => {
      return { ...prevInitialState, amount_of_questions: text };
    });
  };

  const handleSelect = (text) => {
    if (difficultyOptions.some((elem) => elem.id === text)) {
      setInitialState((prevInitialState) => {
        return { ...prevInitialState, question_difficulty: text };
      });
    }
    if (typeOptions.some((elem) => elem.id === text)) {
      setInitialState((prevInitialState) => {
        return { ...prevInitialState, question_type: text };
      });
    }
    if (response.trivia_categories.some((elem) => elem.id === Number(text))) {
      setInitialState((prevInitialState) => {
        return { ...prevInitialState, question_category: text };
      });
    }
  };

  return (
    <m.div
      className="quiz--container center"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <m.h1 className="quiz--title">Quiz-App</m.h1>
      <m.form
        className="quiz--setting-form center"
        onSubmit={handleSubmit}
        variants={childVarients}
        // transition={{ delay: 0.6, duration: 0.5 }}
      >
        <SelectField
          options={response.trivia_categories}
          label="Category"
          className="quiz--setting--form-selct"
          values={initialState}
          handleSelect={handleSelect}
        />
        <SelectField
          options={difficultyOptions}
          label="Difficulty"
          className="quiz--setting--form-selct"
          values={initialState}
          handleSelect={handleSelect}
        />
        <SelectField
          options={typeOptions}
          label="Type"
          className="quiz--setting--form-selct"
          values={initialState}
          handleSelect={handleSelect}
        />

        <TextField handleText={handleText} />

        <Link
          to="/Question"
          className="quiz--setting-btn"
          type="submit"
          // onClick={handleClick}
        >
          <m.button
            className="quiz--btn"
            variants={buttonVarients}
            animate="move"
            whileHover="hover"
          >
            Get Started
          </m.button>
        </Link>
      </m.form>
    </m.div>
  );
}

export default Setting;
