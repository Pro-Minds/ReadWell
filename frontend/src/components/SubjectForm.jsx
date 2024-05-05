import React, { useState } from "react";

const SubjectForm = ({ classID, onSubjectCreated }) => {
    const [subjectName, setSubjectName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!subjectName) return; // TODO: handle this empty name

        const response = await createSubject(classID, subjectName);
        if (response.ok){
            setSubjectName('');
            onSubjectCreated(response.id)
        } else {
        //     TODO: handle subject create error
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h3>Create Subject</h3>
            <label htmlFor="subject-name">Subject Name: </label>
            <input type="text" id="subject-name" value={subjectName} onChange={(e) => setSubjectName(e.target.value)} />
            <button type="submit">Create</button>
        </form>
    );
};

export default SubjectForm;