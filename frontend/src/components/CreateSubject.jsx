import React, {useState} from "react";

const CreateSubject = () => {
    // state to hold subject name
    const [subjectName, setSubjectName] = useState("");

    const handleCreateSubject = async () => {
        if (!subjectName) {
            alert("Please enter a subject name!")
            return; // exit the function if the input is empty.
        }
        try {
            const response = await fetch('/api/subjects', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: subjectName })
            });
            if (response.ok) {
                alert("Subject created successfully!");
            }
            else {
                throw new Error(`Error creating a new subject: ${response.statusText}`);
            }

        }
        catch (error){
            alert("Error creating subject");
            console.log('Error creating subject: ', error);
        }
    };

    const handleInputChange = (event) => {
        // update the subjectName state with input value.
        setSubjectName(event.target.value);
    };

    const handleButtonClick = () => {
        handleCreateSubject();
    }

    return (
        <div>
            <input
                type="text"
                value={subjectName}
                onChange={handleInputChange}
                placeholder="subject name"
            />
            <button onClick={handleButtonClick}>Create Subject</button>
        </div>
    );
};

export default CreateSubject;