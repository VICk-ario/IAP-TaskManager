import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function App() {
    return (
        <Router>
            <div>
                {/* Navigation Links */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </ul>
                </nav>

                {/* Route Definitions */}
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/signup" element={<SignupForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
