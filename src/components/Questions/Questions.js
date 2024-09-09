import React, { useEffect, useState } from 'react';
import QuestionItem from '../QuestionItem/QuestionItem';
import './Questions.css';
import { getAnswers, saveAnswersInLocalStorage, saveTheChange } from '../utils/index';
const questions = [
  { id:1, question: 'How satisfied are you with our products?', type: 'rating', rating: 5 },
  { id:2, question: 'How fair are the prices compared to similar retailers?', type: 'rating', rating: 5 },
  { id:3, question: 'How satisfied are you with the value for money of your purchase?', type: 'rating', rating: 5 },
  { id:4, question: 'On a scale of 1-10, how would you recommend us to your friends and family?', type: 'rating', rating: 10 },
  { id:5, question: 'What could we do to improve our service?', type: 'text', rating: '' }
];

const Questions = ({setCompleted}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(getAnswers());

  const handleNext = () => {
    if(currentIndex < questions.length - 1){
      setCurrentIndex(currentIndex+1)
    }
  }

  const handlePrev = () => {
    if(currentIndex > 0){
      setCurrentIndex(currentIndex-1)
    }
  }

  const getRating = (quesId, rating) => {
    setAnswers({...answers, [quesId]:rating})
    saveTheChange(quesId, rating)
  }

  const handleSubmit = () =>{
    if(window.confirm("Do you want to submit?")){
      saveAnswersInLocalStorage()
      setCompleted(true)
    }
  }

  return (
    <div className="questions-main-container">
      <div className="questions-container">
      <h1>Customer survey</h1>
      <div className="questions-card">
      <QuestionItem 
        ques={questions[currentIndex]} 
        answer={answers[questions[currentIndex].id]}
        handleNext={handleNext}
        handlePrev={handlePrev}
        getRating={getRating}
        handleSubmit={handleSubmit}
        totalQuestions={questions.length} 
        currentQuestion={currentIndex+1}
      />
      </div>
      </div>
    </div>
  );
};

export default Questions;