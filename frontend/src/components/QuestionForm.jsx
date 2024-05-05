import React, { useState } from "react";

const QuestionForm = ({ topicID, onSubmit }) => {
    const [questionText, setQuestionText] = useState('');

    const handleChange = (e) =>  setQuestionText(e.target.value);

    return (
        <div className="question-form">
            <h3>Create Question</h3>
            <label htmlFor="question-text">Question Text: </label>
            <textarea id="question-text" value={questionText} onChange={handleChange}></textarea>
            <button type="button" onClick={() => onSubmit(questionText)}>
                Create Question
            </button>
        </div>
    );
};

export default QuestionForm;