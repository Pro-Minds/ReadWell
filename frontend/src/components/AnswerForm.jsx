import React, { useState } from "react";

const AnswerForm = ({ questionID, onSubmit }) => {
    const [answerText, setAnswerText] = useState('');

    const handleChange = (e) => setAnswerText(e.target.value);

    return (
        <div className="answer-form">
            <h3>Create Answer</h3>
            <label htmlFor="answer-text">Answer Text:</label>
            <textarea id="answer-text" value={answerText} onChange={handleChange} />
            <button type="button" onClick={() => onSubmit(questionID, answerText)}>
                Create Answer
            </button>
        </div>
    );
};

export default AnswerForm;