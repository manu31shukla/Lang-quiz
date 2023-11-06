import React, { useState } from 'react';
import './GameDetails.css';

const GameDetails = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isLanguagePopupOpen, setLanguagePopupOpen] = useState(true);

  const languages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Russian', 'Japanese', 'Chinese', 'Korean', 'Arabic', 'Hindi']; 

  // Simulated questions data structure
  const questionsData = [
    {
      language: 'English',
      question: 'What is the capital of France?',
      options: ['Paris', 'Madrid', 'Berlin', 'Rome'],
      correctAnswer: 'Paris',
      rating: 4,
    },
    {
      language: 'English',
      question: 'What is the capital of Spain?',
      options: ['Paris', 'Madrid', 'Berlin', 'Rome'],
      correctAnswer: 'Madrid',
      rating: 3,
    },
    // Add more questions in different languages
  ];

  const handleLanguageSelect = (language) => {
    // Filter questions based on the selected language
    const filteredQuestions = questionsData.filter((question) => question.language === language);
    setQuestions(filteredQuestions);
    setSelectedLanguage(language);
    setLanguagePopupOpen(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswerSelect = (selectedOption) => {
    // Store the user's answer
    const question = questions[currentQuestionIndex];
    setUserAnswers([...userAnswers, { question, selectedOption }]);
  };

  return (
    <div>
      {isLanguagePopupOpen && (
        <div className="language-popup">
          <h3>Select a Language</h3>
          <ul>
            {languages.map((language, index) => (
              <li key={index}>
                <button onClick={() => handleLanguageSelect(language)}>{language}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!isLanguagePopupOpen && questions.length > 0 && currentQuestionIndex < questions.length && (
        <div className="question-container">
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{questions[currentQuestionIndex].question}</p>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswerSelect(option)}>{option}</button>
              </li>
            ))}
          </ul>
          <p>Rating: {questions[currentQuestionIndex].rating}</p>
          <div className="navigation-buttons">
            <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
              Previous
            </button>
            <button onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDetails;
