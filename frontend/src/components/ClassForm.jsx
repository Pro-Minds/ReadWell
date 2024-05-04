import React, { useState } from "react";
import {createClass} from "../api";

const ClassForm = ({ onCreateClass }) => {
    const [className, setClassName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!className) return; // TODO: handle the empty name later on

        const response = await createClass({ name: className });
        if (response.ok) {
            setClassName('');
            onCreateClass(response.id); // passing the class id to parent
        } else {
            // TODO: Handle the class creating err
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Create Class</h3>
            <label htmlFor="class-name">Class name:</label>
            <input type="text" id="class-name" value={className} onChange={(e) => setClassName(e.target.value)} />
            <button type="submit">Create</button>
        </form>
    );
};

export default ClassForm;