import React from "react";

const CreateSubject = () => {
    const handleClick = () => {
        handleCreateSubject();
    };

    return (
        <button onClick={handleClick}>Create Subject</button>
    );
}

const handleCreateSubject() = async () => {
    try {
        const response = await fetch('/api/subjects', {
            method: "POST",
            body: JSON.stringify({name: 'Your subject name'}),
        });
        if (!response.ok) {
            throw new Error(`Error creating subject: ${response.statusText}`);
        }
        alert('Subject created successfully!');
    }
    catch (error){
        alert("Error creating subject");
        console.log('Error creating subject: ', error);
    }
}
export default CreateSubject;