import React, { useState } from 'react';
import questionsData from "./questionsData.json";

function QuizApp() {
    const [currentScreen, setCurrentScreen] = useState(0);
    const [answers, setAnswers] = useState([]);






    const questions = questionsData.questions;
    console.log(questions)
    console.log(questions.question_text)


    const handleNext = () => {
        setCurrentScreen(currentScreen + 1);
    };

    const handleSkip = () => {
        handleNext();
    };

   

    const handleAnswer = (event) => {
        const newAnswers = [...answers];
        newAnswers[currentScreen] = event.target.value;
        setAnswers(newAnswers);
    };



    const calculateProgress = () => {
        const answeredCount = Object.keys(answers).length;
        const totalCount = questions.length;
        return Math.floor((answeredCount / totalCount) * 100);
    };




    return (
        <div className='container'>

            {currentScreen < questions.length ? (
                <div className='question-container'>
                    <h2 className='question-number'>Question {currentScreen + 1}</h2>
                    <p className='question-text'>{questions[currentScreen].question_text}</p>
                    {questions[currentScreen].id === 90 && (
                        <div>
                            <input className='input_field'
                                id="email"
                                placeholder='Entre Your Email'
                                type='email'
                                name="email"

                                onChange={handleAnswer}

                            />


                        </div>
                    )}
                    {questions[currentScreen].id === 91 && (
                        <div>
                            <input type='number'
                                className='input_field'
                                onChange={handleAnswer}
                                placeholder='Type Your age' />
                        </div>
                    )}
                    {questions[currentScreen].id === 92 && (
                        <div>
                            {questions[currentScreen].choices.map((option) => (
                                <div key={option.id}>
                                    <input
                                        type="radio"
                                        id={option.id}
                                        name={questions[currentScreen].id}
                                        value={option.choice_text}
                                        onChange={handleAnswer}
                                    />
                                    <label className='text' htmlFor={option.id}>{option.choice_text}</label>
                                </div>
                            ))}
                        </div>
                    )}
                    {questions[currentScreen].id === 93 && (
                        <div>

                            {questions[currentScreen].choices.map((option) => (
                                <div key={option.id}>
                                    <input
                                        type="radio"
                                        id={option.id}
                                        name={questions[currentScreen].id}
                                        value={option.choice_text}

                                        onChange={handleAnswer}
                                    />
                                    <label className='text' htmlFor={option.id}>{option.choice_text}</label>
                                </div>
                            ))}
                        </div>
                    )}
                    {questions[currentScreen].id === 94 && (
                        <div>

                            <select
                                id={questions[currentScreen].id}
                                defaultValue={answers[questions[currentScreen].id] || ''}
                                onChange={handleAnswer}
                                className="dropdown"
                            >
                                <option value="">Select an option</option>
                                {questions[currentScreen].choices.map((option) => (
                                    <option key={option.id} value={option.choices}
                                        selected={answers[questions[currentScreen].id] === option.choice_text}
                                    >
                                        {option.choice_text}
                                    </option>
                                ))}
                            </select>


                        </div>
                    )}
                    {questions[currentScreen].id === 95 && (
                        <div>

                            <select
                                id={questions[currentScreen].id}
                                defaultValue={answers[questions[currentScreen].id] || ''}
                                onChange={handleAnswer}
                                className="dropdown"
                            >
                                <option value="">Select an option</option>
                                {questions[currentScreen].choices.map((option) => (
                                    <option key={option.id} value={option.choices}
                                        selected={answers[questions[currentScreen].id] === option.choice_text}
                                    >
                                        {option.choice_text}
                                    </option>
                                ))}
                            </select>


                        </div>
                    )}
                    {questions[currentScreen].id === 96 && (
                        <div>

                            {questions[currentScreen].choices.map((option) => (
                                <div key={option.id}>
                                    <input
                                        type="checkbox"
                                        id={option.id}
                                        name={questions[currentScreen].id}
                                        value={option.choice_text}

                                        onChange={handleAnswer}
                                    />
                                    <label className='text' htmlFor={option.id}>{option.choice_text}</label>
                                </div>
                            ))}
                        </div>
                    )}
                    {questions[currentScreen].id === 97 && (
                        <div>

                            {questions[currentScreen].choices.map((option) => (
                                <div key={option.id}>
                                    <input
                                        type="checkbox"
                                        id={option.id}
                                        name={questions[currentScreen].id}
                                        value={option.choice_text}

                                        onChange={handleAnswer}
                                    />
                                    <label className='text' htmlFor={option.id}>{option.choice_text}</label>
                                </div>
                            ))}
                        </div>
                    )}
                    {questions[currentScreen].id === 98 && (
                        <div>
                            <input className='input'
                                type="file"
                                accept="image/*"
                                onChange={handleAnswer}

                            />
                        </div>
                    )}
                    {questions[currentScreen].id === 99 && (
                        <div >
                            <input
                                className='input'
                                type="file"
                                accept=".pdf"
                                onChange={handleAnswer}

                            />
                        </div>
                    )}
                    <div className='button-container'>


                        <button className='skip' onClick={handleSkip}>Skip</button>
                        <button className='next-button' onClick={handleNext}>Next</button>
                    </div>
                </div>
            ) : (
                <div className='result-container'>
                    <h2 className='result-heading'>Thank you for completing the questionnaire!</h2>
                    <ul className='result-list'>
                        {Object.entries(answers).map(([id, answer]) => (
                            <li key={id} className='result-item'>
                                <strong>Question {id}: </strong>
                                {answer}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="footer">
                <p className="progress">Completed: {calculateProgress()}%</p>
            </div>
        </div>
    );
}

export default QuizApp;
