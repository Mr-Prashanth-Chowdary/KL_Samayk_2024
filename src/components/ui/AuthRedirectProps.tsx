import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

interface AuthRedirectProps {
    children: React.ReactNode;
}

const AuthRedirect: React.FC<AuthRedirectProps> = ({ children }) => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from localStorage
        navigate('/login'); // Redirect to login page
    };

    const handleClosePopup = () => {
        navigate('/')
    };

    // Trigger the popup if the token exists
    if (token) {
        setTimeout(() => {
            setShowPopup(true);
        }, 0);
    }

    return (
        <>
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">You are already logged in</h2>
                        <button
                            className="bg-black text-white px-4 py-2 rounded mb-4 hover:bg-gray-700"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                        <button
                            className="bg-gray-300 mx-2 text-black px-4 py-2 rounded hover:bg-gray-400"
                            onClick={handleClosePopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            {!token && <>{children}</>} {/* Render the children if no token is present */}
        </>
    );
};

export default AuthRedirect;
