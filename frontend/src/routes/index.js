import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AdminLoginPage from '../admin/pages/LoginPage';
import AdminRegistrationPage from '../admin/pages/RegistrationPage';
import AdminDashboard from '../admin/components/Dashboard';

const Routes = () => {
    return (
        <Router>
            <div>
                {/* Admin Routes */}

                <Route path="/admin/login" component={AdminLoginPage} />
                <Route path="/admin/registration" component={AdminRegistrationPage} />
                <Route path="/admin" component={AdminDashboard} />
            </div>
        </Router>
    );
}

export default Routes;