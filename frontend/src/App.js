import './App.css';
import React, { useState, useEffect } from "react";
import './components/AdminPanel';
import { fetchClasses, fetchUsers, createClass, createSubject, createTopic, createQuestion, createAnswer } from './api';
import AdminPanel from "./components/AdminPanel";
import ClassList from "./components/ClassList";
import SubjectForm from "./components/SubjectForm";
import TopicForm from "./components/TopicForm";
import QuestionForm from "./components/QuestionForm";
import UserList from "./components/UserList";
import AnswerForm from "./components/AnswerForm";
import RegistrationForm from "./components/RegistrationForm";
function App() {
    const [ isLoggedIn, setIsLoggedIn ]          = useState(false);
    const [ classes, setClasses ]                   = useState([]);
    const [ users, setUsers ]                       = useState([]);
    const [ selectedClassID, setSelectedClassID ]         = useState(null);
    const [ selectedSubjectID, setSelectedSubjectID]      = useState(null);
    const [ selectedTopicID, setSelectedTopicID ]         = useState(null);

    const handleLogin = async (username, password) => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username, password}),
        });
        if (response.ok) {
            const token = await response.json();
            setIsLoggedIn(true);
        //     TODO: store JWT token securely for subsequent requests
        } else {
        //     TODO: Handle login failure
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // handle logout
    };

    const fetchData = async () => {
        const classData = await fetchClasses();
        const userData = await fetchUsers();
        setClasses(classData);
        setUsers(userData);
    };

    useEffect(() => {
        if (isLoggedIn){
            fetchData();
        }
    }, [isLoggedIn]);

    return (
        <div className="App">
            {isLoggedIn ? (
                <AdminPanel onLogout={handleLogout()}>
                    <h2>Admin Panel</h2>
                    <button onClick={handleLogout}>Logout</button>
                    <ClassList classes={classes} onClassSelect={setSelectedClassID()} />
                    {selectedClassID && (
                        <>
                            {/* User assignment?*/}
                            {users.length > 0 && <UserList users={users} />}
                            <SubjectForm classID={selectedClassID} onSubjectCreated={selectedSubjectID} />
                        </>
                    )}
                    {selectedSubjectID && (
                        <TopicForm subjectID={selectedSubjectID} onTopicCreated={setSelectedTopicID()} />
                    )}
                    {selectedSubjectID && (
                        <>
                            {selectedSubjectID && (
                                <>
                                    <QuestionForm topicID={selectedTopicID} />
                                    <AnswerForm questionID={selectedTopicID} onSubmit={createAnswer} />
                                </>
                            )}
                        </>
                    )}
                </AdminPanel>
            ) : (
                <RegistrationForm onSubmit={() => setIsLoggedIn(true)} />
            )}
        </div>
    );
}

export default App;
