import React from 'react'
import Questions from '../Questions/Questions'
import {v4 as uuidv4 } from 'uuid';
import QuestionItem from '../QuestionItem/QuestionItem';

const Home = () => {
  // const id = uuidv4();
  // console.log(id);
  return (
    <div>
        <Questions/>
        <QuestionItem/>
    </div>
  )
}

export default Home