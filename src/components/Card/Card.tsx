import React from 'react'
import "./Card.css"

type CardProps = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
}

const Card: React.FC<CardProps> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestions }) => {
  return (
    <aside className="card">
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map(answer => (
          <div>
            <button disabled={userAnswer} onClick={callback}><span dangerouslySetInnerHTML={{ __html: answer }} /></button>
          </div>
        ))}

      </div>
    </aside>
  )
}

export default Card;