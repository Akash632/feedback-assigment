import React,{useEffect, useState} from 'react';
import Questions from './components/Questions/Questions';
import './App.css'
import feedback from './assets/feedback.png';
const App = () => {
  const [startSurvey, setStartSurvey] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [counter, setCounter] = useState(5);

  const handleStartSurvey = ()=>{
    setStartSurvey(false)
    setCounter(5)
  }

  useEffect(()=>{
    if(completed){
      let intervalId

      if(!startSurvey){
        intervalId = setInterval(()=>{
        setCounter(prevState => prevState-1)
      },1000)
    }
      if(counter <= 0){
        clearInterval(intervalId);
        setStartSurvey(true);
        setCompleted(false)
      }
  
      return () => clearInterval(intervalId)
    }
  }, [counter, completed])

  console.log(counter);

  return (
    <div className="App">
      {startSurvey ? (
        <div className="main-container">
        <div className='welcome-container'>
        <h1>Welcome user!!</h1>
        <div>
        <img src={feedback}/>
          </div>
        <button className="feedback-btn" onClick={handleStartSurvey}>Give feedback</button>
        </div>
      </div>
      ) : completed ?  (
        <div className='main-container'>
          <div className="welcome-container">
          <h1>Thank you for your valuable time!!!</h1>
          <p>Returning back in {counter}</p>
        </div>
          </div>
      ):((<Questions setCompleted={setCompleted}/>))}
    </div>
  );
};

export default App;