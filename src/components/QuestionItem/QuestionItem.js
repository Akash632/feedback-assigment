import React, { useState } from 'react';
import './QuestionItem.css'
const QuestionItem = ({ques, handleNext, currentQuestion, totalQuestions, handlePrev, getRating, answer, handleSubmit}) => {
  const { id, question, type, rating} = ques;

  return (
    <div className="question-item-container">
      <div className='question-nos'>
        <h3>{currentQuestion}/{totalQuestions}</h3>
      </div>
        <h2>{currentQuestion}. {question}</h2>
        <div className="question-item">
        {type==="rating" && Array.from({length : rating},(_, index)=>(
          <div key={index} 
          className={answer === index+1 ? "question-rating selected" : "question-rating"} 
          onClick={()=>getRating(id, index+1)}>
            {index+1}
          </div>
        ))}
        {type === "text" && 
          <textarea onChange={(e)=>getRating(id, e.target.value)} value={answer}></textarea>} 
        </div>
        <div>
          {currentQuestion != "1" && (<button 
            className="btn-prev" 
            onClick={handlePrev}
            >Previous</button>
          )}
          {currentQuestion === totalQuestions ? null : <button className="btn-skip"  onClick={handleNext}>Skip</button> }
          {currentQuestion === totalQuestions ? 
            <button className="btn-next" onClick={handleSubmit}>Skip & Submit</button> 
            : <button className="btn-next" onClick={handleNext}>Next</button>}
        </div>
    </div>
  );
};

export default QuestionItem;