import React, { useState } from "react";

const TopicForm = ({ subjectID, onTopicCreated }) => {
    const [topicName, setTopicName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!topicName) return; // TODO: handle this appropriately

        const response = await createTopic(subjectID, topicName);
        if (response.ok) {
            setTopicName('');
            onTopicCreated(response.id);
        } else {
        //     TODO: handle topic creating error
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h3>Create Topic</h3>
            <label htmlFor="topic-name" ></label>
            <input type="text" id="topic-name" value={topicName} onChange={(e) => setTopicName(e.target.value)} />
            <button type="submit">Create</button>
        </form>
    );
};

export default TopicForm;