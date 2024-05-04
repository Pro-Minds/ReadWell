import React from "react";

const AdminPanel = ({ children, onLogout }) => {
    return (
        <div className="admin-panel">
            <h2>Admin Panel</h2>
            <button onClick={onLogout}>Logout</button>
            {children}
        </div>
    );
};

export default AdminPanel;