import React from "react";

const ClassList = ({ classes, onClassSelect }) => {
    return (
        <div className="class-list">
            <h3>Classes</h3>
            <ul>
                {classes.map((klass) => (
                    <li key={klass.id} onClick={() => onClassSelect(klass.id)}>
                        {klass.name}
                    </li>
                ) )}
            </ul>
        </div>
    );
};

export default ClassList;