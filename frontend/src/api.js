const BASE_URL = 'https:localhost:8080/api';

export const fetchClasses = async () => {
    const response = await fetch(`${BASE_URL}/classes`);
    return response.ok ? await response.json() : [];
};

export const fetchUsers = async () => {
//     TODO: implement logic to fetch users from the backend API
    return [];
};

export const createClass = async (data) => {
    const response = await fetch(`${BASE_URL}/classes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    // TODO: handle the errors here more appropriately
    return response.ok ? await response.json() : null;
};

export const createSubject = async (classID, subjectName) => {
    const response = await fetch(`${BASE_URL}/classes/${classID}/subjects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: subjectName }),
    });
//     TODO: improve the error handling here
    return response.ok ? await response.json() : null;
};

export const createTopic = async (subjectID, topicName) => {
    const response = await fetch(`${BASE_URL}/subjects/${subjectID}/topics`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: topicName }),
    });
//     TODO: handle this errors better
    return response.ok ? await response.json() : null;
};

export const createQuestion = async (topicID, questionText) => {
    const response = await fetch(`${BASE_URL}/topics/${topicID}/questions`, {
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: questionText }),
    });
    return response.ok ? await response.json() : null;
};

export const createAnswer = async (topicID, answerText) => {
    const response = await fetch(`${BASE_URL}/topics/${topicID}/answers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: answerText }),
    });
    return response.ok ? await response.json() : null;
}