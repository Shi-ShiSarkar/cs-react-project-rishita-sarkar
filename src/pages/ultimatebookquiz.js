import React, { useState } from "react";
import './quiz.css';

const UltimateBookQuiz = () => {
    const questions = [
      {
        questionText: 'When was the first Harry Potter Book published?',
        answerOptions: [
          { answerText: '2001', isCorrect: false },
          { answerText: '1995', isCorrect: false },
          { answerText: '1997', isCorrect: true },
          { answerText: '2003', isCorrect: false },
        ],
      },
      {
        questionText: 'Who played Elizabeth Bennett in the movie based on Jane Austen\'s Pride and Prejudice?',
        answerOptions: [
          { answerText: 'Natalie Portman', isCorrect: false },
          { answerText: 'Keira Knightley', isCorrect: true },
          { answerText: 'Leonardo DiCaprio', isCorrect: false },
          { answerText: 'Nicole Kidman', isCorrect: false },
        ],
      },
      {
        questionText: 'How many novels did Agatha Christie write?',
        answerOptions: [
          { answerText: '75', isCorrect: true },
          { answerText: '102', isCorrect: false },
          { answerText: '34', isCorrect: false },
          { answerText: '91', isCorrect: false },
        ],
      },
      {
        questionText: 'How many ghosts visit Scrooge in A Christmas Carol?',
        answerOptions: [
          { answerText: '1', isCorrect: false },
          { answerText: '3', isCorrect: false },
          { answerText: '6', isCorrect: false },
          { answerText: '4', isCorrect: true },
        ],
      },
    ];
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
  
    const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };
    return (
      <div className='app'>
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
            <a href="UltimateBookQuiz"><button>Try Again?</button></a>
          </div>
    
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  // }
};

export default UltimateBookQuiz;