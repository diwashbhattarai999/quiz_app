import { decode } from 'html-entities';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Loading } from '../components'
import useAxios from '../hooks/useAxios'
import '../styles/Question.css'

function getRandNum(max){
  return Math.floor(Math.random()*Math.floor(max));
}

function Question() {

  
  const data = JSON.parse(localStorage.getItem("initialState"));

  const [questionData, setQuestionData] = useState(data);

  const {question_category, question_difficulty, question_type, amount_of_questions } = questionData
  let { score } = questionData

  const navigate = useNavigate();

  const [correctAns, setCorrectAns] = useState("");

  
  let apiUrl = `/api.php?amount=${amount_of_questions}`;
  if(question_category)
    apiUrl.concat(`&category=${question_category}`);
  if(question_difficulty)
    apiUrl.concat(`&difficulty=${question_difficulty}`);
  if(question_type)
    apiUrl.concat(`&type=${question_type}`);



  const {response, loading} = useAxios({url: apiUrl});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);



  useEffect(() => {
    if(response?.results.length){
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandNum(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  },[response, questionIndex])


  if (loading) {
    return <Loading />;
  }


  const handleClick = (e) => {
    const question = response.results[questionIndex];
    if(e.target.textContent === question.correct_answer){
      setQuestionData(prevQuestionData => {
        return {...prevQuestionData, score: score+1};
      })
      localStorage.setItem("initialState",JSON.stringify(questionData));
      setCorrectAns("correct");
    }
    else{
      setCorrectAns("wrong");
    }

    if(questionIndex + 1 < response.results.length){
      setQuestionIndex( questionIndex+1 );
    }
    else{
       navigate('/Final')
    }
  }

  return (
    <div className="quiz--container center quiz--question-container">
      <div className="quiz--title">Question {questionIndex+1}</div>
      <div className="quiz--subtitle quiz--question-para">{decode (response.results[questionIndex].question)}</div>



      {/* Button  */}
      <div className="quiz--question-btns center">

        {options.map((item, id)=> {
          return <button 
                    key={id}
                    className='quiz--btn center' 
                    onClick={handleClick}
                  >
                    {decode (item)}
                  </button>
        })}

      </div>

      {correctAns === "correct" && "Correct Answer!!"}
      {correctAns === "wrong" && "Oops!! Wrong Answer"}

      <div className="quiz--subtitle quiz--question-score">Score : {score} / {response.results.length}</div>
    </div>
  )

}

export default Question