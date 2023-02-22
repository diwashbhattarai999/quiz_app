import { decode } from "html-entities";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components";
import useAxios from "../hooks/useAxios";
import "../styles/Question.css";
import { motion as m } from "framer-motion";
import {
  containerVarients,
  childVarients,
  buttonVarients,
} from "../FramerVarients";

function getRandNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Question() {
  const data = JSON.parse(localStorage.getItem("initialState"));

  const [questionData, setQuestionData] = useState(data);

  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_questions,
  } = questionData;
  let { score } = questionData;

  const navigate = useNavigate();

  const [correctAns, setCorrectAns] = useState("");

  let apiUrl = `/api.php?amount=${amount_of_questions}`;
  if (question_category) apiUrl.concat(`&category=${question_category}`);
  if (question_difficulty) apiUrl.concat(`&difficulty=${question_difficulty}`);
  if (question_type) apiUrl.concat(`&type=${question_type}`);

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandNum(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return <Loading />;
  }

  const handleClick = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      setQuestionData((prevQuestionData) => {
        return { ...prevQuestionData, score: score + 1 };
      });
      localStorage.setItem("initialState", JSON.stringify(questionData));
      setCorrectAns("correct");
    } else {
      setCorrectAns("wrong");
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/Final");
    }
  };

  return (
    <m.div
      className="quiz--container center quiz--question-container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="quiz--title">Question {questionIndex + 1}</div>
      <m.div
        className="quiz--subtitle quiz--question-para"
        variants={childVarients}
      >
        {decode(response.results[questionIndex].question)}
      </m.div>

      {/* Button  */}
      <m.div
        className="quiz--question-btns center"
        variants={childVarients}
        transition={{ delay: 0.4 }}
      >
        {options.map((item, id) => {
          return (
            <m.button
              key={id}
              className="quiz--btn center"
              onClick={handleClick}
              variants={buttonVarients}
              whileHover="hover"
            >
              {decode(item)}
            </m.button>
          );
        })}
      </m.div>

      {correctAns === "correct" && "Correct Answer!!"}
      {correctAns === "wrong" && "Oops!! Wrong Answer"}

      <m.div
        className="quiz--subtitle quiz--question-score"
        variants={childVarients}
        transition={{ delay: 0.6 }}
      >
        Score : {score} / {response.results.length}
      </m.div>
    </m.div>
  );
}

export default Question;
